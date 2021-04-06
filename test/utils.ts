import { BlockFrostAPI } from '../src/index';
import * as utils from '../src/utils';

describe('utils', () => {
  // options

  test('no options', () => {
    const API = new BlockFrostAPI({ projectId: 'xxx' });
    expect(API.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');
    expect(API.projectId).toBe('xxx');
  });

  test('isTestnet', () => {
    const API = new BlockFrostAPI({ projectId: 'xxx', isTestnet: true });
    expect(API.apiUrl).toBe('https://cardano-testnet.blockfrost.io/api/v0');

    const API2 = new BlockFrostAPI({ projectId: 'xxx', isTestnet: false });
    expect(API2.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');
  });

  test('version', () => {
    const API = new BlockFrostAPI({ projectId: 'xxx', version: 2 });
    expect(API.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v2');
  });

  test('customBackend', () => {
    const API = new BlockFrostAPI({
      customBackend: 'http://customBackend.com',
    });
    expect(API.apiUrl).toBe('http://customBackend.com');
  });

  // headers

  test('getHeaders', () => {
    expect(utils.getHeaders('xxx')).toEqual({ project_id: 'xxx' });
  });
});
