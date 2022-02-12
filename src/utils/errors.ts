import { HTTPError } from 'got';
import { GotError, ErrorType } from '../types';

export class BlockfrostServerError extends Error {
  status_code: number;
  error: string;
  constructor(error: Extract<ErrorType, { status_code: number }>) {
    super(error.message);
    this.name = 'BlockfrostServerError';
    this.status_code = error.status_code;
    this.message = error.message;
    this.error = error.error;
    Object.setPrototypeOf(this, BlockfrostServerError.prototype);
  }
}

export class BlockfrostClientError extends Error {
  code: string;
  constructor(error: Extract<ErrorType, { code: string }>) {
    super(error.message);
    this.name = 'BlockfrostClientError';
    this.code = error.code;
    this.message = error.message;
    Object.setPrototypeOf(this, BlockfrostClientError.prototype);
  }
}

const hasProperty = <K extends PropertyKey>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: object,
  property: K,
): data is Record<K, unknown> => {
  return property in data;
};

export const isBlockfrostErrorResponse = (
  data: unknown,
): data is Extract<ErrorType, { status_code: number }> => {
  // type guard for narrowing response body to an error object that should be returned by Blockfrost API
  return (
    typeof data === 'object' &&
    data !== null &&
    hasProperty(data, 'status_code') &&
    hasProperty(data, 'message') &&
    hasProperty(data, 'error')
  );
};

export const handleError = (
  error: GotError,
): BlockfrostServerError | BlockfrostClientError => {
  if (error instanceof HTTPError) {
    const responseBody = error.response.body;

    if (isBlockfrostErrorResponse(responseBody)) {
      return new BlockfrostServerError(responseBody);
    } else {
      // response.body may contain html output (eg. errors returned by nginx)
      const { statusCode, statusMessage } = error.response;
      const statusText = statusMessage ?? error.message;
      return new BlockfrostServerError({
        status_code: statusCode,
        message: `${statusCode}: ${statusText}`,
        error: statusText,
      });
    }
  }

  // system errors such as -3008 ENOTFOUND and various got errors like ReadError, CacheError, MaxRedirectsError, TimeoutError,...
  // https://github.com/sindresorhus/got/blob/main/documentation/8-errors.md
  return new BlockfrostClientError({
    code: error.code ?? 'ERR_GOT_REQUEST_ERROR', // ENOTFOUND, ETIMEDOUT...
    message: error.message, // getaddrinfo ENOTFOUND cardano-testnet.blockfrost.io'
  });
};
