import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsRetired(),
    response: expect.arrayContaining([
      expect.objectContaining({
        pool_id: expect.any(String),
        epoch: expect.any(Number),
      }),
    ]),
  },
] as const;
