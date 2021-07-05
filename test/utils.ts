import { BlockFrostAPI } from '../src';

const SDK = new BlockFrostAPI({
  projectId: `${process.env.PROJECT_ID}`,
});

export { SDK };
