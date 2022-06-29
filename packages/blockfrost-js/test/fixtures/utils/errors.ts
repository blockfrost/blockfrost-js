export const handleError = [
  {
    description: 'handle network errors',
    payload: {
      name: 'RequestError',
      code: 'ETIMEDOUT',
      timings: {
        start: 1637085077876,
        socket: 1637085077877,
      },
      message: "Timeout awaiting 'response' for 1ms",
    },
    result: {
      code: 'ETIMEDOUT',
      message: "Timeout awaiting 'response' for 1ms",
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
  {
    description: 'handle error without statusMessage',
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
        statusCode: 0,
        body: 'some html displaying the error',
      },
      message: 'Response code 0 (undefined)',
    },
    result: {
      status_code: 0,
      message: '0: Response code 0 (undefined)',
      error: 'Response code 0 (undefined)',
    },
  },
];
