import { BlockFrostAPI } from '../src';

const SDK = new BlockFrostAPI({
  projectId: `${process.env.PROJECT_ID}`,
  retryCount: 5,
});

const SDKError = new BlockFrostAPI({
  projectId: 'INVALID_TOKEN',
});

const IPFS = new BlockFrostAPI({
  projectId: `${process.env.PROJECT_ID_IPFS}`,
  isIPFS: true,
});

export { SDK, SDKError, IPFS };
