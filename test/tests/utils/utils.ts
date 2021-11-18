import { BlockFrostAPI } from '../../../src/index';
import * as utils from '../../../src/utils';
import { expect } from '@jest/globals';

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
      isTestnet: false,
    });

    expect(api.apiUrl).toBe('http://customBackend.com');
  });

  test('retrySettings', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      retrySettings: {
        limit: 2,
        methods: ['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'],
        statusCodes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
        errorCodes: [
          'ETIMEDOUT',
          'ECONNRESET',
          'EADDRINUSE',
          'ECONNREFUSED',
          'EPIPE',
          'ENOTFOUND',
          'ENETUNREACH',
          'EAI_AGAIN',
        ],
        maxRetryAfter: undefined,
        calculateDelay: ({ computedValue }) => computedValue,
      },
    });

    expect(api.options).toStrictEqual({
      customBackend: undefined,
      isTestnet: undefined,
      projectId: 'xxx',
      requestTimeout: 20000,
      retrySettings: {
        limit: 2,
        methods: ['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'],
        statusCodes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
        errorCodes: [
          'ETIMEDOUT',
          'ECONNRESET',
          'EADDRINUSE',
          'ECONNREFUSED',
          'EPIPE',
          'ENOTFOUND',
          'ENETUNREACH',
          'EAI_AGAIN',
        ],
        maxRetryAfter: undefined,
        calculateDelay: ({ computedValue }) => computedValue,
      },
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
      retry: undefined,
      version: 0,
    });
  });

  test('version', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      version: 2,
    });

    expect(api.apiUrl).toEqual('https://cardano-mainnet.blockfrost.io/api/v2');
  });

  test('version parameter error', () => {
    try {
      // @ts-expect-error tests
      new BlockFrostAPI({});
    } catch (err) {
      expect(err.message).toBe('Missing customBackend or projectId option');
    }
  });

  test('version parameter error', () => {
    try {
      new BlockFrostAPI({
        projectId: 'xxx',
        // @ts-expect-error tests
        version: 's',
      });
    } catch (err) {
      expect(err.message).toBe('Param version is not a number');
    }
  });

  test('requestTimeout parameter error', () => {
    try {
      new BlockFrostAPI({
        projectId: 'xxx',
        // @ts-expect-error tests
        requestTimeout: 's',
      });
    } catch (err) {
      expect(err.message).toBe('Param requestTimeout is not a number');
    }
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
      version: 0,
    });
  });

  test('getAdditionalParams', () => {
    expect(utils.getAdditionalParams(undefined)).toEqual({
      from: undefined,
      to: undefined,
    });
    expect(utils.getAdditionalParams({ from: 'a', to: 'b' })).toEqual({
      from: 'a',
      to: 'b',
    });
  });
});
