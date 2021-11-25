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
} from 'got';

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

type AdditionalOptions = {
  isTestnet?: boolean;
  version?: number;
  http2?: boolean;
  userAgent?: string;
  requestTimeout?: number;
  retrySettings?: RequiredRetryOptions;
};

export type Options = (OptionCombination1 | OptionCombination2) &
  AdditionalOptions;

export interface ValidatedOptions {
  customBackend?: string;
  version: number;
  requestTimeout: number;
  http2?: boolean;
  debug: boolean;
  projectId?: string;
  isTestnet?: boolean;
  retrySettings?: RequiredRetryOptions;
}

export type HashOrNumber = string | number;

export type ErrorType =
  | {
      status_code: number;
      message: string;
      error: string;
    }
  | {
      message: string;
      code: string;
    };

export type PaginationOptions = {
  count?: number;
  page?: number;
  order?: 'asc' | 'desc';
};

export type AdditionalEndpointOptions = {
  from?: string | undefined;
  to?: string | undefined;
};

export type AllMethodOptions = {
  batchSize?: number | undefined;
  order?: 'asc' | 'desc';
};
