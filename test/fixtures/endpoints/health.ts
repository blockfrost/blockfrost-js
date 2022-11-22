import { BlockFrostAPI } from '../../../src';
import mocks from '../blockfrost-api-server';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.health(),
    response: mocks.health,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.healthClock(),
    response: mocks.healthClock,
  },
] as const;
