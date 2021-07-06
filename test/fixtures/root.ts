import { BlockFrostAPI } from '../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.root(),
    response: {
      url: 'https://blockfrost.io/',
      version: '0.6.0',
    },
  },
] as const;
