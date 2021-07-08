import { BlockFrostAPI } from '../src';

const SDK = new BlockFrostAPI({
  projectId: `${process.env.PROJECT_ID}`,
  retryCount: 5,
});

const SDKError = new BlockFrostAPI({
  projectId: 'INVALID_TOKEN',
});

export { SDK, SDKError };
