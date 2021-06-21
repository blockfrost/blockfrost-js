import { BlockFrostAPI } from '../../src/index';
import * as utils from '../../src/utils';
import * as packageJson from '../../package.json';

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
    const api = new BlockFrostAPI({
      projectId: 'xxx',
    });
    expect(utils.getHeaders(api)).toEqual({
      project_id: 'xxx',
      'User-Agent': `${packageJson.name}@${packageJson.version}`,
    });
  });

  test('getHeaders with userAgent', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      userAgent: 'yyy',
    });
    expect(utils.getHeaders(api)).toEqual({
      project_id: 'xxx',
      'User-Agent': 'yyy',
    });
  });

  test('getAdditionalParams', () => {
    expect(utils.getAdditionalParams(null, null)).toEqual('');
    expect(utils.getAdditionalParams('100', null)).toEqual('from=100');
    expect(utils.getAdditionalParams('100:1', null)).toEqual('from=100:1');
    expect(utils.getAdditionalParams(null, '200')).toEqual('to=200');
    expect(utils.getAdditionalParams(null, '200:2')).toEqual('to=200:2');
    expect(utils.getAdditionalParams('100', '200')).toEqual('from=100&to=200');
    expect(utils.getAdditionalParams('100:1', '200')).toEqual(
      'from=100:1&to=200',
    );
    expect(utils.getAdditionalParams('100', '200:2')).toEqual(
      'from=100&to=200:2',
    );
    expect(utils.getAdditionalParams('100:1', '200:2')).toEqual(
      'from=100:1&to=200:2',
    );
  });
});
