import { BlockFrostAPI } from '../../src';

export interface TestFixture {
  command: (SDK: BlockFrostAPI) => any;
  response: any;
  itemsCountMinimum?: number;
  itemsCount?: number;
}
