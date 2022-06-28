import { createHmac } from 'crypto';
import {
  Bip32PublicKey,
  BaseAddress,
  NetworkInfo,
  StakeCredential,
  RewardAddress,
  ByronAddress,
} from '@emurgo/cardano-serialization-lib-nodejs';
import AssetFingerprint from '@emurgo/cip14-js';
import { ParseAssetResult } from '../types/utils';
import { SignatureVerificationError } from './errors';

/**
 * Derives an address with derivation path m/1852'/1815'/account'/role/addressIndex
 * If role === 2 then it returns a stake address (m/1852'/1815'/account'/2/addressIndex)
 *
 * @Returns {address: string, path: number[] } Bech32 address shaped as {address: string, path: [role, addressIndex]}
 * */
export const deriveAddress = (
  accountPublicKey: string,
  role: number,
  addressIndex: number,
  isTestnet: boolean,
  isByron?: boolean,
): { address: string; path: [number, number] } => {
  const accountKey = Bip32PublicKey.from_bytes(
    Buffer.from(accountPublicKey, 'hex'),
  );
  const utxoPubKey = accountKey.derive(role).derive(addressIndex);
  const mainStakeKey = accountKey.derive(2).derive(0);

  const testnetNetworkInfo = NetworkInfo.testnet();
  const mainnetNetworkInfo = NetworkInfo.mainnet();

  const networkId = isTestnet
    ? testnetNetworkInfo.network_id()
    : mainnetNetworkInfo.network_id();

  const utxoPubKeyHash = utxoPubKey.to_raw_key().hash();
  const mainStakeKeyHash = mainStakeKey.to_raw_key().hash();
  const utxoStakeCred = StakeCredential.from_keyhash(utxoPubKeyHash);
  const mainStakeCred = StakeCredential.from_keyhash(mainStakeKeyHash);
  const baseAddr = BaseAddress.new(networkId, utxoStakeCred, mainStakeCred);

  utxoStakeCred.free();
  mainStakeCred.free();
  mainStakeKeyHash.free();
  utxoPubKeyHash.free();

  const baseAddrBech32 = baseAddr.to_address().to_bech32();
  baseAddr.free();

  if (role === 2 && !isByron) {
    const addressSpecificStakeKey = accountKey.derive(2).derive(addressIndex);
    const stakeKeyHash = addressSpecificStakeKey.to_raw_key().hash();
    const stakeCred = StakeCredential.from_keyhash(stakeKeyHash);
    // always return stake address
    const rewardAddr = RewardAddress.new(networkId, stakeCred);
    const rewardAddrBech32 = rewardAddr.to_address().to_bech32();

    rewardAddr.free();
    addressSpecificStakeKey.free();
    stakeKeyHash.free();
    stakeCred.free();

    return {
      address: rewardAddrBech32,
      path: [role, addressIndex],
    };
  }

  if (isByron) {
    const protocolMagic = isTestnet
      ? testnetNetworkInfo.protocol_magic()
      : mainnetNetworkInfo.protocol_magic();

    const byronAddress = ByronAddress.icarus_from_key(
      utxoPubKey,
      protocolMagic,
    );

    const byronAddrBase58 = byronAddress.to_base58();
    byronAddress.free();

    return {
      address: byronAddrBase58,
      path: [role, addressIndex],
    };
  }

  mainStakeKey.free();
  utxoPubKey.free();
  accountKey.free();

  testnetNetworkInfo.free();
  mainnetNetworkInfo.free();

  return {
    address: baseAddrBech32,
    path: [role, addressIndex],
  };
};

export const hexToString = (input: string): string => {
  const hex = input.toString();
  let str = '';
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  return str;
};

export const getFingerprint = (policyId: string, assetName?: string): string =>
  AssetFingerprint.fromParts(
    Uint8Array.from(Buffer.from(policyId, 'hex')),
    Uint8Array.from(Buffer.from(assetName || '', 'hex')),
  ).fingerprint();

export const parseAsset = (hex: string): ParseAssetResult => {
  const policyIdSize = 56;
  const policyId = hex.slice(0, policyIdSize);
  const assetNameInHex = hex.slice(policyIdSize);
  const assetName = hexToString(assetNameInHex);
  const fingerprint = getFingerprint(policyId, assetNameInHex);

  return {
    policyId,
    assetName,
    fingerprint,
  };
};

/**
 * Verifies webhook signature
 *
 * @param {string|Buffer} webhookPayload Buffer or stringified payload of the webhook request.
 * @param {string|Buffer} signatureHeader Blockfrost-Signature header.
 * @param {string} secret Auth token for the webhook.
 * @param {number} [timestampToleranceSeconds=600] Time tolerance affecting signature validity. By default signatures older than 600s are considered invalid.
 * @returns {boolean} Whether the signature is valid.
 * */
export const verifyWebhookSignature = (
  webhookPayload: unknown,
  signatureHeader: string | string[],
  secret: string,
  timestampToleranceSeconds = 600,
) => {
  let timestamp;

  if (Array.isArray(signatureHeader)) {
    throw new SignatureVerificationError(
      'Unexpected: An array was passed as a Blockfrost-Signature header',
    );
  }

  const decodedWebhookPayload = Buffer.isBuffer(webhookPayload)
    ? webhookPayload.toString('utf8')
    : webhookPayload;

  const decodedSignatureHeader = Buffer.isBuffer(signatureHeader)
    ? signatureHeader.toString('utf8')
    : signatureHeader;

  // Parse signature header (example: t=1648550558,v1=162381a59040c97d9b323cdfec02facdfce0968490ec1732f5d938334c1eed4e,v1=...)
  const signatures: string[] = [];
  const tokens = decodedSignatureHeader.split(',');
  for (const token of tokens) {
    const [key, value] = token.split('=');
    switch (key) {
      case 't':
        timestamp = Number(value);
        break;
      case 'v1':
        signatures.push(value);
        break;
      default:
        console.warn(
          `Cannot parse part of the signature header, key "${key}" is not supported by this version of Blockfrost SDK.`,
        );
    }
  }

  if (!timestamp || tokens.length < 2) {
    // timestamp and at least one signature must be present
    throw new SignatureVerificationError('Invalid signature header format.', {
      signatureHeader: decodedSignatureHeader,
      webhookPayload: decodedWebhookPayload,
    });
  }

  if (signatures.length === 0) {
    throw new SignatureVerificationError(
      'No signatures with supported version scheme.',
      {
        signatureHeader: decodedSignatureHeader,
        webhookPayload: decodedWebhookPayload,
      },
    );
  }

  let hasValidSignature = false;
  for (const signature of signatures) {
    // Recreate signature by concatenating timestamp with stringified payload,
    // then compute HMAC using sha256 and provided secret (auth token)
    const signaturePayload = `${timestamp}.${decodedWebhookPayload}`;
    const hmac = createHmac('sha256', secret)
      .update(signaturePayload)
      .digest('hex');

    // computed hmac should match signature parsed from a signature header
    if (hmac === signature) {
      hasValidSignature = true;
    }
  }

  if (!hasValidSignature) {
    throw new SignatureVerificationError(
      'No signature matches the expected signature for the payload.',
      {
        signatureHeader: decodedSignatureHeader,
        webhookPayload: decodedWebhookPayload,
      },
    );
  }

  const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  if (currentTimestamp - timestamp > timestampToleranceSeconds) {
    // Event is older than timestamp_tolerance_seconds
    throw new SignatureVerificationError(
      "Signature's timestamp is outside of the time tolerance",
      {
        signatureHeader: decodedSignatureHeader,
        webhookPayload: decodedWebhookPayload,
      },
    );
  } else {
    // Successfully validate the signature only if it is within timestamp_tolerance_seconds tolerance
    return true;
  }
};
