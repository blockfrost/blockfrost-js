import { ErrorType } from '../types';

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

const hasProp = <K extends PropertyKey>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: object,
  prop: K,
): data is Record<K, unknown> => {
  return prop in data;
};

export const isBlockfrostErrorResponse = (
  data: unknown,
): data is Extract<ErrorType, { status_code: number }> => {
  // type guard for narrowing response body to an error object that should be returned by Blockfrost API
  return (
    typeof data === 'object' &&
    data !== null &&
    hasProp(data, 'status_code') &&
    hasProp(data, 'message') &&
    hasProp(data, 'error')
  );
};
