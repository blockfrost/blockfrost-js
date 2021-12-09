import {
  Bip32PublicKey,
  BaseAddress,
  NetworkInfo,
  StakeCredential,
} from '@emurgo/cardano-serialization-lib-nodejs';
import EmurgoCip from '@emurgo/cip14-js';
import { ParseAssetResult } from '../types/utils';

export const deriveAddress = (
  publicKey: string,
  type: number,
  addressIndex: number,
  isTestnet: boolean,
): { address: string; path: string } => {
  const accountKey = Bip32PublicKey.from_bytes(Buffer.from(publicKey, 'hex'));
  const utxoPubKey = accountKey.derive(type).derive(addressIndex);
  const stakeKey = accountKey.derive(2).derive(0);
  const networkId = isTestnet
    ? NetworkInfo.testnet().network_id()
    : NetworkInfo.mainnet().network_id();
  const baseAddr = BaseAddress.new(
    networkId,
    StakeCredential.from_keyhash(utxoPubKey.to_raw_key().hash()),
    StakeCredential.from_keyhash(stakeKey.to_raw_key().hash()),
  );

  return {
    address: baseAddr.to_address().to_bech32(),
    path: `m/1852'/1815'/0'/${type}/${addressIndex}`,
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
  new EmurgoCip(
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
