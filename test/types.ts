import { BlockFrostAPI } from '../src';

export interface Fixture {
  command: (SDK: BlockFrostAPI) => any;
  response: any;
  itemsCountMinimum?: number;
  itemsCount?: number;
}
