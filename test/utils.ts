import { BlockFrostAPI, BlockFrostIPFS } from '../src';
import { Options } from '../src/types';
import { join } from 'path';

export const SDK = (options?: Partial<Options>): BlockFrostAPI =>
  new BlockFrostAPI({
    projectId: `${process.env.PROJECT_ID}`,
    ...options,
  });

export const SDK_ERROR = new BlockFrostAPI({
  projectId: 'INVALID_TOKEN',
});

export const IPFS = new BlockFrostIPFS({
  projectId: `${process.env.PROJECT_ID_IPFS}`,
});

export const mainnetUrl = (path: string) => {
  return new URL(
    join('/api/v0/', path),
    'https://cardano-mainnet.blockfrost.io',
  ).toString();
};

export const ipfsUrl = (path: string) => {
  return new URL(
    join('/api/v0/', path),
    'https://ipfs.blockfrost.io',
  ).toString();
};
