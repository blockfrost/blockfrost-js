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
 * Derives an address with derivation path `m/1852'/1815'/account'/role/addressIndex`
 * If role is set to `2` then it returns a stake address (`m/1852'/1815'/account'/2/addressIndex`)
 *
 * @param accountPublicKey - hex-encoded account public key
 * @param role - role within derivation path `m/1852'/1815'/account'/role/addressIndex`
 * @param addressIndex - address index within derivation path `m/1852'/1815'/account'/role/addressIndex`
 * @param isTestnet - Whether to derive testnet address
 * @param isByron - Whether to derive Byron address (Optional, default false)
 * @returns Object with bech32 address and corresponding partial derivation path `{address: string, path: [role, addressIndex]}`
 * @example
 *
 * ```ts
 * const Blockfrost = require('@blockfrost/blockfrost-js');
 * const res = Blockfrost.deriveAddress(
 * '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
 *  0,
 *  1,
 *  false,
 * );
 * console.log(res);
 * // {
 * //   address: 'addr1qy535472n2ctu3x55v03zmm9jnz54grqu3sueap9pnk4xys49ucjdfty5p5qlw5qe28v9k988stffc2g0hx2xx86a2dq5u58qk',
 * //   path: [0, 1],
 * // }
 * ```
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

  const utxoPubRawKey = utxoPubKey.to_raw_key();
  const utxoPubKeyHash = utxoPubRawKey.hash();
  const mainStakeRawKey = mainStakeKey.to_raw_key();
  const mainStakeKeyHash = mainStakeRawKey.hash();
  const utxoStakeCred = StakeCredential.from_keyhash(utxoPubKeyHash);
  const mainStakeCred = StakeCredential.from_keyhash(mainStakeKeyHash);
  const baseAddr = BaseAddress.new(networkId, utxoStakeCred, mainStakeCred);

  utxoStakeCred.free();
  mainStakeCred.free();
  mainStakeKeyHash.free();
  mainStakeRawKey.free();
  utxoPubKeyHash.free();
  utxoPubRawKey.free();

  const baseAddrBech32 = baseAddr.to_address().to_bech32();
  baseAddr.free();

  if (role === 2 && !isByron) {
    const addressSpecificStakeKey = accountKey.derive(2).derive(addressIndex);
    const stakeRawKey = addressSpecificStakeKey.to_raw_key();
    const stakeKeyHash = stakeRawKey.hash();
    const stakeCred = StakeCredential.from_keyhash(stakeKeyHash);
    // always return stake address
    const rewardAddr = RewardAddress.new(networkId, stakeCred);
    const address = rewardAddr.to_address();
    const rewardAddrBech32 = address.to_bech32();

    address.free();
    rewardAddr.free();
    addressSpecificStakeKey.free();
    stakeKeyHash.free();
    stakeRawKey.free();
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

/**
 * Calculates asset fingerprint.
 *
 * @param policyId - Policy Id
 * @param assetName - hex-encoded asset name
 * @returns Asset fingerprint for the given policy ID and asset name.
 * @example
 *
 * ```ts
 * const Blockfrost = require('@blockfrost/blockfrost-js');
 * const res = Blockfrost.getFingerprint(
 *  '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
 *  '6e7574636f696e',
 * );
 * console.log(res);
 * // 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd'
 * ```
 * */
export const getFingerprint = (policyId: string, assetName?: string): string =>
  AssetFingerprint.fromParts(
    Uint8Array.from(Buffer.from(policyId, 'hex')),
    Uint8Array.from(Buffer.from(assetName || '', 'hex')),
  ).fingerprint();

/**
 * Parses asset hex and returns its policy ID, asset name and fingerprint.
 *
 * @param hex - hex-encoded asset
 * @returns Object containing `policyId`, `assetName`, `assetNameHex` and `fingerprint`.
 * @example
 *
 * ```ts
 * const Blockfrost = require('@blockfrost/blockfrost-js');
 * const res = Blockfrost.parseAsset('00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e');
 * console.log(res);
 * // {
 * //   "assetName": 'nutcoin',
 * //   "assetNameHex": '6e7574636f696e',
 * //   "fingerprint": 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd',
 * //   "policyId": '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
 * // }
 * ```
 * */
export const parseAsset = (hex: string): ParseAssetResult => {
  const policyIdSize = 56;
  const policyId = hex.slice(0, policyIdSize);
  const assetNameHex = hex.slice(policyIdSize);
  const assetName = hexToString(assetNameHex);
  const fingerprint = getFingerprint(policyId, assetNameHex);

  return {
    policyId,
    assetName,
    assetNameHex,
    fingerprint,
  };
};

/**
 * Verifies webhook signature
 * @remarks
 * Webhooks enable Blockfrost to push real-time notifications to your application. In order to prevent malicious actor from pretending to be Blockfrost every webhook request is signed. The signature is included in a request's `Blockfrost-Signature` header. This allows you to verify that the events were sent by Blockfrost, not by a third party.
 *
 * To learn more about Secure Webhooks, see [Secure Webhooks Docs](https://blockfrost.dev/docs/start-building/webhooks/).
 * For full example project, see [webhook-basic example](https://github.com/blockfrost/blockfrost-js-examples/tree/master/examples/webhook-basic).
 *
 * @param webhookPayload - Buffer or stringified payload of the webhook request.
 * @param signatureHeader - Buffer or stringified Blockfrost-Signature header.
 * @param secret - Auth token for the webhook.
 * @param timestampToleranceSeconds - Time tolerance affecting signature validity. Optional, by default signatures older than 600s are considered invalid.
 * @returns `true` for the valid signature, otherwise throws `SignatureVerificationError`
 *
 * @throws {@link SignatureVerificationError}
 * Thrown if the signature is not valid. For easier debugging the SignatureVerificationError has additional detail object with 2 properties - header and request_body.
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
