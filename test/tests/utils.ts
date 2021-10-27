import { serializeError } from 'serialize-error';
import { BlockFrostAPI } from '../../src/index';
import { ExtendedAxiosError } from '../../src/types';
import * as utils from '../../src/utils';
import { handleError } from '../fixtures/utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../package.json');

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

  test('retryDelay parameter error', () => {
    try {
      new BlockFrostAPI({
        projectId: 'xxx',
        // @ts-expect-error tests
        retryDelay: 's',
      });
    } catch (err) {
      expect(err.message).toBe('Param retryDelay is not a number');
    }
  });

  test('retryCount parameter error', () => {
    try {
      new BlockFrostAPI({
        projectId: 'xxx',
        // @ts-expect-error tests
        retryCount: 's',
      });
    } catch (err) {
      expect(err.message).toBe('Param retryCount is not a number');
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
    expect(utils.getHeaders(api.projectId, api.userAgent)).toEqual({
      project_id: 'xxx',
      'User-Agent': `${packageJson.name}@${packageJson.version}`,
    });
  });

  test('getHeaders with userAgent', () => {
    const api = new BlockFrostAPI({
      projectId: 'xxx',
      userAgent: 'yyy',
    });
    expect(utils.getHeaders(api.projectId, api.userAgent)).toEqual({
      project_id: 'xxx',
      'User-Agent': 'yyy',
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

  handleError.forEach(f => {
    test(`handleError: ${f.description}`, () => {
      const handledError = utils.handleError(
        f.payload as unknown as ExtendedAxiosError,
      );
      const serializedError = serializeError(handledError);
      expect(handledError).toBeInstanceOf(Error);
      expect(serializedError).toMatchObject(f.result);
    });
  });
});
