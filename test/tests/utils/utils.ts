import { BlockFrostAPI } from '../../../src/index';
import * as utils from '../../../src/utils';
import { expect, describe, test, vi } from 'vitest';
import {
  AdditionalEndpointOptions,
  PaginationOptions,
} from '../../../src/types';
import { DEFAULT_PAGINATION_PAGE_ITEMS_COUNT } from '../../../src/config';
import { RATE_LIMITER_DEFAULT_CONFIG } from '../../../src/utils/limiter';

describe('utils', () => {
  test('no options', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
    });

    expect(api.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');
    expect(api.projectId).toBe('xxx');
  });

  test('init BlockFrostAPI with different networks', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      network: 'testnet',
    });

    expect(api.apiUrl).toBe('https://cardano-testnet.blockfrost.io/api/v0');

    const api2 = new BlockFrostAPI({
      projectId: 'xxx',
      network: 'mainnet',
    });

    expect(api2.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v0');

    const api3 = new BlockFrostAPI({
      projectId: 'xxx',
      network: 'preprod',
    });

    expect(api3.apiUrl).toBe('https://cardano-preprod.blockfrost.io/api/v0');
    const api4 = new BlockFrostAPI({
      projectId: 'xxx',
      network: 'preview',
    });

    expect(api4.apiUrl).toBe('https://cardano-preview.blockfrost.io/api/v0');
  });

  test('version', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      version: 2,
    });

    expect(api.apiUrl).toBe('https://cardano-mainnet.blockfrost.io/api/v2');
  });

  test('rateLimiter - disabled', () => {
    // just simple test for properly passing rateLimiter option through validation
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      rateLimiter: false,
    });

    expect(api.options.rateLimiter).toBe(false);
    expect(api.rateLimiter).toBe(undefined);
  });

  test('rateLimiter - custom config', () => {
    // just simple test for properly passing rateLimiter option through validation
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      rateLimiter: { size: 5, increaseInterval: 1000, increaseAmount: 2 },
    });

    expect(api.options.rateLimiter).toMatchObject({
      size: 5,
      increaseInterval: 1000,
      increaseAmount: 2,
    });
    expect(api.rateLimiter).toBeTruthy();
  });

  test('customBackend', () => {
    const api = new BlockFrostAPI({
      customBackend: 'http://customBackend.com',
      network: 'mainnet',
    });

    expect(api.apiUrl).toBe('http://customBackend.com');
  });

  test('retrySettings', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      retrySettings: {
        limit: 3,
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

    expect(api.options).toMatchObject({
      customBackend: undefined,
      network: 'mainnet',
      projectId: 'xxx',
      requestTimeout: 20000,
      rateLimiter: RATE_LIMITER_DEFAULT_CONFIG,
      retrySettings: {
        limit: 3,
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
        // calculateDelay: ({ computedValue }) => computedValue, // function would need to be serialized
      },
      version: 0,
    });
  });

  test('default options', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
    });

    expect(api.options).toMatchObject({
      customBackend: undefined,
      network: 'mainnet',
      projectId: 'xxx',
      http2: false,
      requestTimeout: 20000,
      rateLimiter: RATE_LIMITER_DEFAULT_CONFIG,
      retrySettings: {
        limit: 3,
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
        // calculateDelay: () => 1000, // func would need to be serialized
      },
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
      projectId: 'mainnetxxx',
      requestTimeout: 1,
    });

    expect(api.options).toMatchObject({
      customBackend: undefined,
      network: 'mainnet',
      http2: false,
      projectId: 'mainnetxxx',
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

  test('paginateMethod', async () => {
    // should return 201 items (2 full pages with 100 items each and one additional item na 3rd page)
    const mockedMethod = vi
      .fn()
      .mockImplementation(
        (
          pagination: PaginationOptions,
          additionalOptions?: AdditionalEndpointOptions,
        ) => {
          return new Promise(resolve => {
            if (pagination.page !== 3) {
              // return full page of {pagination, additionalOptions} items
              resolve(
                [...Array(DEFAULT_PAGINATION_PAGE_ITEMS_COUNT).keys()].map(
                  () => ({
                    pagination: { ...pagination },
                    additionalOptions: { ...additionalOptions },
                  }),
                ),
              );
            } else {
              // return last page with 1 item array
              resolve([
                {
                  pagination: { ...pagination },
                  additionalOptions: { ...additionalOptions },
                },
              ]);
            }
          });
        },
      );

    const res = await utils.paginateMethod(
      mockedMethod,
      {
        // batchSize: 1, // batchSize is not tested
        order: 'desc',
      },
      {},
    );
    // console.log('res', JSON.stringify(res, undefined, 4));
    expect(res.filter(item => item.pagination.page === 1).length).toBe(100);
    expect(res.filter(item => item.pagination.page === 2).length).toBe(100);
    expect(res.filter(item => item.pagination.page === 3).length).toBe(1);
    expect(res.length).toBe(201);
    expect(
      res.filter(
        item =>
          item.pagination.order === 'desc' && item.pagination.count === 100,
      ).length,
    ).toBe(201); // check if order option really propagated to a method passed as param
  });
});
