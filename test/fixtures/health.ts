import { SDK } from '../utils';

export default [
  {
    command: () => SDK.health(),
    response: { is_healthy: true },
  },
  {
    command: () => SDK.healthClock(),
    response: { server_time: expect.any(Number) },
  },
] as const;
