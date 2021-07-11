import {
  Bip32PublicKey,
  BaseAddress,
  NetworkInfo,
  StakeCredential,
} from '@emurgo/cardano-serialization-lib-nodejs';
import { BlockFrostAPI } from '..';
import * as Account from '../types/account';
import { ADDRESS_GAP_LIMIT } from '../config';

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

export async function getAccount(
  this: BlockFrostAPI,
  publicKey: string,
  type: Account.Type,
): Promise<Account.Result[]> {
  let addressDiscoveredCount = 0;
  let lastEmptyCount = 0;
  let addressCount = 0;

  const result: Account.Result[] = [];

  while (lastEmptyCount < ADDRESS_GAP_LIMIT) {
    const promisesBundle: Account.Bundle = [];

    for (
      let i = addressDiscoveredCount;
      i < addressDiscoveredCount + ADDRESS_GAP_LIMIT;
      i++
    ) {
      const { address, path } = deriveAddress(publicKey, addressCount, type);
      addressCount++;
      const promise = this.addresses(address);
      promisesBundle.push({ address, promise, path });
    }

    await Promise.all(
      promisesBundle.map(p =>
        p.promise
          .then(data => {
            result.push({ address: p.address, path: p.path, data });
            lastEmptyCount = 0;
          })
          .catch(error => {
            lastEmptyCount++;
            if (error.status_code === 404) {
              result.push({ address: p.address, data: 'empty', path: p.path });
            } else {
              throw Error(error);
            }
          }),
      ),
    );

    addressDiscoveredCount++;
  }

  return result;
}
