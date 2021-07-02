import { BlockFrostAPI } from '../../../src/index';
import * as utils from '../../../src/utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../../package.json');

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

  test('retryCount', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      retryCount: 1,
    });

    expect(api.options).toEqual({
      customBackend: undefined,
      isTestnet: undefined,
      projectId: 'xxx',
      requestTimeout: 20000,
      retry429: true,
      retryCount: 1,
      retryDelay: 1000,
      version: 0,
    });
  });

  test('retryDelay', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      retryDelay: 1,
    });

    expect(api.options).toEqual({
      customBackend: undefined,
      isTestnet: undefined,
      projectId: 'xxx',
      requestTimeout: 20000,
      retry429: true,
      retryCount: 20,
      retryDelay: 1,
      version: 0,
    });
  });

  test('retryDelay 0', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      retryDelay: 0,
    });

    expect(api.options).toEqual({
      customBackend: undefined,
      isTestnet: undefined,
      projectId: 'xxx',
      requestTimeout: 20000,
      retry429: true,
      retryCount: 20,
      retryDelay: 0,
      version: 0,
    });
  });

  test('default options', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
    });

    expect(api.options).toEqual({
      customBackend: undefined,
      isTestnet: undefined,
      projectId: 'xxx',
      requestTimeout: 20000,
      retry429: true,
      retryCount: 20,
      retryDelay: 1000,
      version: 0,
    });
  });

  test('requestTimeout', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      requestTimeout: 1,
    });

    expect(api.options).toEqual({
      customBackend: undefined,
      isTestnet: undefined,
      projectId: 'xxx',
      requestTimeout: 1,
      retry429: true,
      retryCount: 20,
      retryDelay: 1000,
      version: 0,
    });
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
    expect(utils.getAdditionalParams(undefined, undefined)).toEqual('');
    expect(utils.getAdditionalParams('100', undefined)).toEqual('from=100');
    expect(utils.getAdditionalParams('100:1', undefined)).toEqual('from=100:1');
    expect(utils.getAdditionalParams(undefined, '200')).toEqual('to=200');
    expect(utils.getAdditionalParams(undefined, '200:2')).toEqual('to=200:2');
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
