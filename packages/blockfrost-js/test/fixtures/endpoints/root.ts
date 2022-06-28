import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.root(),
    response: {
      url: 'https://blockfrost.io/',
      version: expect.any(String),
    },
  },
] as const;
