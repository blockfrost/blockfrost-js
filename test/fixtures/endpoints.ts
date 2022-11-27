import { BlockFrostAPI } from '../../src';
import mocks from './blockfrost';

export default [
  { command: (SDK: BlockFrostAPI) => SDK.health(), response: mocks.health },
  {
    command: (SDK: BlockFrostAPI) => SDK.healthClock(),
    response: mocks.healthClock,
  },
  { command: (SDK: BlockFrostAPI) => SDK.network(), response: mocks.network },
  { command: (SDK: BlockFrostAPI) => SDK.root(), response: mocks.root },
  {
    command: (SDK: BlockFrostAPI) => SDK.metrics(),
    response: mocks.metrics,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metricsEndpoints(),
    response: mocks.metricsEndpoints,
  },
] as const;
