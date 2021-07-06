import { BlockFrostAPI } from '../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.health(),
    response: { is_healthy: true },
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.healthClock(),
    response: { server_time: expect.any(Number) },
  },
] as const;
