import {
  Bip32PublicKey,
  BaseAddress,
  NetworkInfo,
  StakeCredential,
} from '@emurgo/cardano-serialization-lib-nodejs';

export const deriveAddress = (
  publicKey: string,
  addressIndex: number,
  type = 1 | 0,
): { address: string; path: string } => {
  const accountKey = Bip32PublicKey.from_bytes(Buffer.from(publicKey, 'hex'));
  const utxoPubKey = accountKey.derive(type).derive(addressIndex);
  const stakeKey = accountKey.derive(2).derive(0);
  const baseAddr = BaseAddress.new(
    NetworkInfo.mainnet().network_id(),
    StakeCredential.from_keyhash(utxoPubKey.to_raw_key().hash()),
    StakeCredential.from_keyhash(stakeKey.to_raw_key().hash()),
  );

  return {
    address: baseAddr.to_address().to_bech32(),
    path: `m/1852'/1815'/0'/${type}/${addressIndex}`,
  };
};
