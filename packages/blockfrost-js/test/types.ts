import { BlockFrostAPI } from '../src';

export interface TestFixture {
  name: string;
  command: (SDK: BlockFrostAPI) => any;
  jestTimeout?: number;
  response: any;
  itemsCountMinimum?: number;
  itemsCount?: number;
}
