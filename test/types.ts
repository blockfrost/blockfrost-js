import { BlockFrostAPI } from '../src';

export interface TestFixture {
  name: string;
  command: (SDK: BlockFrostAPI) => any;
  response: any;
  itemsCountMinimum?: number;
  itemsCount?: number;
}
