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

export async function getAccount(
  this: BlockFrostAPI,
  publicKey: string,
  type: Account.Type,
  isTestnet: boolean,
): Promise<Account.Result[]> {
  let lastEmptyCount = 0;
  let addressCount = 0;

  const result: Account.Result[] = [];

  while (lastEmptyCount < ADDRESS_GAP_LIMIT) {
    const promisesBundle: Account.Bundle = [];

    for (let i = 0; i < ADDRESS_GAP_LIMIT; i++) {
      const { address, path } = deriveAddress(
        publicKey,
        type,
        addressCount,
        isTestnet,
      );
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
  }

  const sortedResult = result.sort((item1, item2) => {
    const path1 = parseInt(item1.path.split('/').slice(-1)[0], 10);
    const path2 = parseInt(item2.path.split('/').slice(-1)[0], 10);

    return path1 - path2;
  });

  return sortedResult;
}
