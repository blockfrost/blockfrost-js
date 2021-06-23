import { DEFAULT_API_VERSION } from '../config';
import {
  ErrorType,
  ExtendedAxiosError,
  Headers,
  Options,
  ValidatedOptions,
} from '../types';

import { BlockFrostAPI } from '..';

export const validateOptions = (options?: Options): ValidatedOptions => {
  if (!options || (!options.customBackend && !options.projectId)) {
    throw Error('Missing customBackend or projectId option');
  }

  if (!options.projectId && !options.customBackend) {
    throw Error('Missing param projectId in options');
  }

  if (options.version && isNaN(options.version)) {
    throw Error('Param version is not a number');
  }

  if (options.requestTimeout && isNaN(options.requestTimeout)) {
    throw Error('Param requestTimeout is not a number');
  }

  if (options.retryDelay && isNaN(options.retryDelay)) {
    throw Error('Param retryDelay is not a number');
  }

  if (options.retryCount && isNaN(options.retryCount)) {
    throw Error('Param retryCount is not a number');
  }

  return {
    customBackend: options.customBackend,
    projectId: options.projectId,
    isTestnet: options.isTestnet,
    version: options.version || DEFAULT_API_VERSION,
    retry429: options.retry429 || true,
    retryCount: options.retryCount ?? 20,
    retryDelay: options.retryDelay ?? 1000, // 1 second
    requestTimeout: options.requestTimeout ?? 20000, // 20 seconds
  };
};

export const getHeaders = (
  api?: BlockFrostAPI,
  isTxSubmit = false,
): Headers | null => {
  if (!api?.projectId) {
    return null;
  }

  // headers needed for /tx/submit endpoint
  const cborHeader = isTxSubmit ? { 'Content-type': 'application/cbor' } : null;
  const userAgentHeader = api.userAgent
    ? { 'User-Agent': api.userAgent }
    : null;

  return {
    project_id: api.projectId,
    ...cborHeader,
    ...userAgentHeader,
  };
};

export const handleError = (error: ExtendedAxiosError): ErrorType | string => {
  if (error.code && error.errno) {
    // system errors such as -3008 ENOTFOUND
    return {
      errno: error.errno, // -3008
      code: error.code, // ENOTFOUND
      message: error.message, // getaddrinfo ENOTFOUND cardano-testnet.blockfrost.io'
    };
  }

  if (error.response) {
    if (
      typeof error.response.data === 'object' &&
      error.response.data?.status_code
    ) {
      // response.data is already properly formatted
      return error.response.data;
    }

    // response.data may contain html output (eg. errors returned by nginx)
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    return {
      status_code: statusCode,
      message: `${statusCode}: ${statusText}`,
      error: statusText,
    };
  } else if (error.request) {
    const jsonError = error.toJSON() as { message?: string; error?: string };
    const message =
      jsonError.message ?? 'Unexpected error while sending a request';
    const errorName = jsonError.error ?? 'Error';
    return `${errorName}: ${message}`;
  } else if (error.message) {
    return error.message;
  } else {
    // we shouldn't get here, but just to be safe...
    return 'Unexpected error';
  }
};

export const getAdditionalParams = (
  from: string | undefined,
  to: string | undefined,
): string => {
  // from & to parameters don't have default values
  let additionalParams = '';
  if (from && to) additionalParams = `from=${from}&to=${to}`;
  else if (from) additionalParams = `from=${from}`;
  else if (to) additionalParams = `to=${to}`;
  return additionalParams;
};
