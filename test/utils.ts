import { BlockFrostAPI } from '../src/index';
import * as utils from '../src/utils';

describe('utils', () => {
  // options

  test('no options', () => {
    const api = new BlockFrostAPI({
      projectId: process.env.PROJECT_ID,
    });
    expect(api.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');
    expect(api.projectId).toBe('xxx');
  });

  test('isTestnet', () => {
    const api = new BlockFrostAPI({
      projectId: process.env.PROJECT_ID,
      isTestnet: true,
    });
    expect(api.apiUrl).toBe('https://cardano-testnet.blockfrost.io/api/v0');

    const api2 = new BlockFrostAPI({
      projectId: process.env.PROJECT_ID,
      isTestnet: false,
    });
    expect(api2.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');
  });

  test('version', () => {
    const api = new BlockFrostAPI({
      projectId: process.env.PROJECT_ID,
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

  // headers

  test('getHeaders', () => {
    expect(utils.getHeaders(process.env.PROJECT_ID)).toEqual({
      project_id: process.env.PROJECT_ID,
    });
  });
});
