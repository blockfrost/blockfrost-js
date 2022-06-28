import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.network(),
    response: {
      supply: {
        max: expect.any(String),
        total: expect.any(String),
        circulating: expect.any(String),
      },
      stake: {
        live: expect.any(String),
        active: expect.any(String),
      },
    },
  },
] as const;
