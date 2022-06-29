import { BlockFrostAPI, BlockFrostIPFS } from '../src';
import { Options } from '../src/types';

const SDK = (options?: Partial<Options>): BlockFrostAPI =>
  new BlockFrostAPI({
    projectId: `${process.env.PROJECT_ID}`,
    ...options,
  });

const SDK_ERROR = new BlockFrostAPI({
  projectId: 'INVALID_TOKEN',
});

const IPFS = new BlockFrostIPFS({
  projectId: `${process.env.PROJECT_ID_IPFS}`,
});

export { SDK, SDK_ERROR, IPFS };
