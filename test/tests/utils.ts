import { BlockFrostAPI } from '../../src/index';
import * as utils from '../../src/utils';

describe('utils', () => {
  test('no options', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
    });

    expect(api.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');
    expect(api.projectId).toBe('xxx');
  });

  test('isTestnet', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      isTestnet: true,
    });

    expect(api.apiUrl).toBe('https://cardano-testnet.blockfrost.io/api/v0');

    const api2 = new BlockFrostAPI({
      projectId: 'xxx',
      isTestnet: false,
    });

    expect(api2.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');
  });

  test('version', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      version: 2,
    });

    expect(api.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v2');
  });

  test('customBackend', () => {
    const api = new BlockFrostAPI({
      customBackend: 'http://customBackend.com',
    });

    expect(api.apiUrl).toBe('http://customBackend.com');
  });

  test('getHeaders', () => {
    expect(utils.getHeaders('xxx')).toEqual({
      project_id: 'xxx',
    });
  });
});
