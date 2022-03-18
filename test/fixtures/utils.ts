export const handleError = [
  {
    description: 'handle network errors',
    payload: {
      message: 'getaddrinfo ENOTFOUND cardano-mainnet.blockfrost.io', // message field is a part of an Error object
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: 'cardano-mainnet.blockfrost.io',
      request: {
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'cardano-mainnet.blockfrost.io',
        protocol: 'https:',
      },
      response: undefined,
      isAxiosError: true,
    },
    result: {
      errno: -3008,
      code: 'ENOTFOUND',
      message: 'getaddrinfo ENOTFOUND cardano-mainnet.blockfrost.io',
    },
  },
  {
    description: 'handle json backend errors',
    payload: {
      config: {
        url: 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/ada',
        headers: {
          project_id: 'xxx',
          'User-Agent': '@blockfrost/blockfrost-js@0.8.0',
        },
        method: 'get',
        data: undefined,
      },
      request: {
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'cardano-mainnet.blockfrost.io',
        protocol: 'https:',
      },
      response: {
        status: 404,
        statusText: 'Not Found',
        headers: {
          date: 'Wed, 07 Jul 2021 16:23:25 GMT',
          'content-type': 'application/json; charset=utf-8',
          'content-length': '95',
          connection: 'close',
        },
        config: {
          url: 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/ada',
          headers: [Object],
          transformRequest: [Array],
          transformResponse: [Array],
          timeout: 20000,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          raxConfig: [Object],
          method: 'get',
          data: undefined,
        },
        request: {
          _eventsCount: 7,
          _maxListeners: undefined,
          outputData: [],
          outputSize: 0,
        },
        data: {
          status_code: 404,
          error: 'Not Found',
          message: 'The requested component has not been found.',
        },
      },
      isAxiosError: true,
    },
    result: {
      status_code: 404,
      error: 'Not Found',
      message: 'The requested component has not been found.',
    },
  },
  {
    description: 'handle non-json errors (eg. returned by nginx)',
    payload: {
      config: {
        url: 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/ada',
        headers: {
          project_id: 'xxx',
          'User-Agent': '@blockfrost/blockfrost-js@0.8.0',
        },
        method: 'get',
        data: undefined,
      },
      request: {
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'cardano-mainnet.blockfrost.io',
        protocol: 'https:',
      },
      response: {
        status: 504,
        statusText: 'Gateway Timeout',
        headers: {
          date: 'Wed, 07 Jul 2021 16:23:25 GMT',
          'content-type': 'application/json; charset=utf-8',
          'content-length': '95',
          connection: 'close',
        },
        config: {
          url: 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/ada',
          headers: [Object],
          transformRequest: [Array],
          transformResponse: [Array],
          timeout: 20000,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          raxConfig: [Object],
          method: 'get',
          data: undefined,
        },
        request: {
          _eventsCount: 7,
          _maxListeners: undefined,
          outputData: [],
          outputSize: 0,
        },
        data: 'some html displaying the error',
      },
      isAxiosError: true,
    },
    result: {
      status_code: 504,
      message: '504: Gateway Timeout',
      error: 'Gateway Timeout',
    },
  },
  {
    description:
      'handle non-networks error with no response from backend, invalid toJSON (artificial case to cover every code path)',
    payload: {
      request: {
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'cardano-mainnet.blockfrost.io',
        protocol: 'https:',
      },
      toJSON: (): any => ({}),
      response: undefined,
      isAxiosError: true,
    },
    result: 'Error: Unexpected error while sending a request',
  },
  {
    description:
      'handle non-networks error with no response from backend, valid toJSON (artificial case to cover every code path)',
    payload: {
      request: {
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'cardano-mainnet.blockfrost.io',
        protocol: 'https:',
      },
      toJSON: (): any => ({
        message: 'Custom message',
        error: 'CustomError',
      }),
      response: undefined,
      isAxiosError: true,
    },
    result: 'CustomError: Custom message',
  },
  {
    description: 'Unexpected error format',
    payload: {
      something: 'weird',
    },
    result: 'Unexpected error',
  },
];