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
