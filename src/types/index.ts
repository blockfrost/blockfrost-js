import {
  CacheError,
  CancelError,
  TimeoutError,
  RequestError,
  ReadError,
  ParseError,
  UploadError,
  HTTPError,
  MaxRedirectsError,
  UnsupportedProtocolError,
  RequiredRetryOptions,
  Options as GotOptions,
} from 'got';
import { RateLimiterConfig } from '../utils/limiter';

export type GotError =
  | CacheError
  | CancelError
  | TimeoutError
  | RequestError
  | ReadError
  | ParseError
  | UploadError
  | HTTPError
  | MaxRedirectsError
  | UnsupportedProtocolError;

type OptionCombination1 = {
  projectId: string;
  customBackend?: string;
};

type OptionCombination2 = {
  projectId?: string;
  customBackend: string;
};

type cursorPagination = {
  network?: CardanoNetwork;
  version?: number;
  rateLimiter?: boolean | RateLimiterConfig;
  http2?: boolean;
  debug?: boolean;
  userAgent?: string;
  requestTimeout?: number;
  retrySettings?: RequiredRetryOptions;
  gotOptions?: GotOptions; // https://github.com/sindresorhus/got/blob/main/documentation/2-options.md
};

export type Options = (OptionCombination1 | OptionCombination2) &
  cursorPagination;

export type CardanoNetwork = 'mainnet' | 'preview' | 'preprod' | 'sanchonet';
export type BlockfrostNetwork = CardanoNetwork | 'ipfs';
export interface ValidatedOptions {
  customBackend?: string;
  version: number;
  requestTimeout: number;
  rateLimiter?: false | RateLimiterConfig;
  http2?: boolean;
  debug: boolean;
  projectId?: string;
  network?: BlockfrostNetwork;
  retrySettings?: RequiredRetryOptions;
  gotOptions?: GotOptions;
}

export type HashOrNumber = string | number;

export type ErrorType =
  | // Server error
  {
      status_code: number;
      message: string;
      error: string;
      url: string;
      body?: unknown;
    }
  // Client Error
  | {
      message: string;
      code: string;
      url: string | undefined;
    };

export type PaginationOptions = {
  count?: number;
  page?: number;
  order?: 'asc' | 'desc';
};

export type CursorPaginationOptions = {
  from?: string | undefined;
  to?: string | undefined;
};

export type AllMethodOptions = {
  batchSize?: number | undefined;
  order?: 'asc' | 'desc';
};
