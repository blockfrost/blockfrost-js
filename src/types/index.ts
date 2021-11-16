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
  isTestnet: boolean;
};

type AdditionalOptions = {
  isTestnet?: boolean;
  version?: number;
  retry429?: boolean;
  userAgent?: string;
  requestTimeout?: number;
  retryCount?: number;
  retryDelay?: number;
};

export type Options = (OptionCombination1 | OptionCombination2) &
  AdditionalOptions;

export interface ValidatedOptions {
  customBackend?: string;
  projectId?: string;
  isTestnet?: boolean;
  version: number;
  retry429: boolean;
  requestTimeout: number;
  retryCount: number;
  retryDelay: number;
}

export interface Headers {
  project_id: string;
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
