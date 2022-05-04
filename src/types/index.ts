import { AxiosError, AxiosAdapter } from 'axios';

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
  retry429?: boolean;
  userAgent?: string;
  requestTimeout?: number;
  retryCount?: number;
  retryDelay?: number;
  adapter?: AxiosAdapter;
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
  adapter?: AxiosAdapter;
}

export interface Headers {
  project_id: string;
}

export type HashOrNumber = string | number;

export type ErrorType =
  | string
  | {
      status_code: number;
      message: string;
      error: string;
    }
  | {
      errno: number;
      message: string;
      code: string;
    };

export interface ExtendedAxiosError extends AxiosError {
  errno: number;
}

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
