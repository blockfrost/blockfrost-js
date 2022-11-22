import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.metrics(),
    response: expect.arrayContaining([
      expect.objectContaining({
        calls: expect.any(Number),
        time: expect.any(Number),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metricsEndpoints(),
    response: expect.arrayContaining([
      expect.objectContaining({
        calls: expect.any(Number),
        endpoint: expect.any(String),
        time: expect.any(Number),
      }),
    ]),
  },
] as const;
