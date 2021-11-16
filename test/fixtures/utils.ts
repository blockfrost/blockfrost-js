export const handleError = [
  {
    description: 'handle network errors',
    payload: {
      name: 'RequestError',
      code: 'ENOTFOUND',
      timings: {
        start: 1637085077876,
        socket: 1637085077877,
      },
      message: 'getaddrinfo ENOTFOUND cardano-mainnet.blockfrost.io',
    },
    result: {
      code: 'ENOTFOUND',
      message: 'getaddrinfo ENOTFOUND cardano-mainnet.blockfrost.io',
    },
  },
  {
    description: 'handle json backend errors',
    payload: {
      name: 'HTTPError',
      code: undefined,
      timings: {
        start: 1637084621487,
        socket: 1637084621488,
      },
      message: 'Response code 403 (Forbidden)',
      response: {
        body: {
          status_code: 403,
          error: 'Forbidden',
          message: 'Invalid project token.',
        },
      },
    },
    result: {
      status_code: 403,
      error: 'Forbidden',
      message: 'Invalid project token.',
    },
  },
  {
    description: 'handle non-json errors (eg. returned by nginx)',
    payload: {
      name: 'HTTPError',
      timings: {
        start: 1637094739914,
        socket: 1637094739915,
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
        statusCode: 504,
        statusMessage: 'Gateway Timeout',
        body: 'some html displaying the error',
      },
    },
    result: {
      status_code: 504,
      message: '504: Gateway Timeout',
      error: 'Gateway Timeout',
    },
  },
];
