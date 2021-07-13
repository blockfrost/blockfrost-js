import { BlockFrostAPI, BlockFrostIPFS } from '../src';

const SDK = new BlockFrostAPI({
  projectId: `${process.env.PROJECT_ID}`,
  retryCount: 5,
});

const SDK_ERROR = new BlockFrostAPI({
  projectId: 'INVALID_TOKEN',
});

const IPFS = new BlockFrostIPFS({
  projectId: `${process.env.PROJECT_ID_IPFS}`,
});

export { SDK, SDK_ERROR, IPFS };
