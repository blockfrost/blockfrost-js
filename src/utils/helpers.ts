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

  const networkId = isTestnet
    ? NetworkInfo.testnet().network_id()
    : NetworkInfo.mainnet().network_id();

  const baseAddr = BaseAddress.new(
    networkId,
    StakeCredential.from_keyhash(utxoPubKey.to_raw_key().hash()),
    StakeCredential.from_keyhash(mainStakeKey.to_raw_key().hash()),
  );

  if (role === 2 && !isByron) {
    const addressSpecificStakeKey = accountKey.derive(2).derive(addressIndex);
    // always return stake address
    const rewardAddr = RewardAddress.new(
      networkId,
      StakeCredential.from_keyhash(addressSpecificStakeKey.to_raw_key().hash()),
    )
      .to_address()
      .to_bech32();
    return {
      address: rewardAddr,
      path: [role, addressIndex],
    };
  }

  if (isByron) {
    const protocolMagic = isTestnet
      ? NetworkInfo.testnet().protocol_magic()
      : NetworkInfo.mainnet().protocol_magic();

    const byronAddress = ByronAddress.icarus_from_key(
      utxoPubKey,
      protocolMagic,
    );

    return {
      address: byronAddress.to_base58().toString(),
      path: [role, addressIndex],
    };
  }

  return {
    address: baseAddr.to_address().to_bech32(),
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
