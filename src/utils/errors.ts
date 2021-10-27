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
  errno: number;
  code: string;
  constructor(error: Extract<ErrorType, { errno: number }>) {
    super(error.message);
    this.name = 'BlockfrostClientError';
    this.errno = error.errno;
    this.code = error.code;
    this.message = error.message;
    Object.setPrototypeOf(this, BlockfrostClientError.prototype);
  }
}
export class BlockfrostGenericError extends Error {
  constructor(error: string) {
    super(error);
    this.name = 'BlockfrostGenericError';
    this.message = error;
    Object.setPrototypeOf(this, BlockfrostGenericError.prototype);
  }
}
