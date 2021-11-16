import EmurgoCip from '@emurgo/cip14-js';
import { ParseAssetResult } from '../types/utils';

import {
  DEFAULT_API_VERSION,
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
  DEFAULT_BATCH_SIZE,
} from '../config';

import {
  GotError,
  Headers,
  Options,
  ValidatedOptions,
  PaginationOptions,
  AdditionalEndpointOptions,
  AllMethodOptions,
} from '../types';
import {
  BlockfrostClientError,
  BlockfrostGenericError,
  BlockfrostServerError,
} from './errors';

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
  projectId?: string,
  userAgent?: string,
): Headers | undefined => {
  if (!projectId) {
    return undefined;
  }

  const userAgentHeader = userAgent ? { 'User-Agent': userAgent } : null;

  return {
    project_id: projectId,
    ...userAgentHeader,
  };
};

export const handleError = (
  error: GotError,
): BlockfrostServerError | BlockfrostClientError | BlockfrostGenericError => {
  console.log('error', error);
  if (error.code && error.request) {
    // system errors such as -3008 ENOTFOUND
    return new BlockfrostClientError({
      errno: error.errno, // -3008
      code: error.code, // ENOTFOUND
      message: error.message, // getaddrinfo ENOTFOUND cardano-testnet.blockfrost.io'
    });
  }

  if (error.response) {
    if (
      typeof error.response.data === 'object' &&
      error.response.data?.status_code
    ) {
      // response.data is already properly formatted
      return new BlockfrostServerError(error.response.data);
    }

    // response.data may contain html output (eg. errors returned by nginx)
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    return new BlockfrostServerError({
      status_code: statusCode,
      message: `${statusCode}: ${statusText}`,
      error: statusText,
    });
  } else if (error.request) {
    const jsonError = error.toJSON() as { message?: string; error?: string };
    const message =
      jsonError.message ?? 'Unexpected error while sending a request';
    const errorName = jsonError.error ?? 'Error';
    return new BlockfrostGenericError(`${errorName}: ${message}`);
  } else if (error.message) {
    return new BlockfrostGenericError(error.message);
  } else {
    // we shouldn't get here, but just to be safe...
    return new BlockfrostGenericError('Unexpected error');
  }
};

export const getAdditionalParams = (
  options?: AdditionalEndpointOptions,
): AdditionalEndpointOptions => {
  if (!options) {
    return {
      from: undefined,
      to: undefined,
    };
  }

  return {
    from: options.from || undefined,
    to: options.to || undefined,
  };
};

export const getPaginationOptions = (
  options?: PaginationOptions,
): PaginationOptions => {
  if (!options) {
    return {
      page: DEFAULT_PAGINATION_PAGE_COUNT,
      count: DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
      order: DEFAULT_ORDER,
    };
  }

  return {
    page: options.page || DEFAULT_PAGINATION_PAGE_COUNT,
    count: options.count || DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
    order: options.order || DEFAULT_ORDER,
  };
};

export const getAllMethodOptions = (
  options?: AllMethodOptions,
): { batchSize: number; order: 'asc' | 'desc' } => {
  if (!options) {
    return {
      batchSize: DEFAULT_BATCH_SIZE,
      order: DEFAULT_ORDER,
    };
  }

  return {
    batchSize: options.batchSize || DEFAULT_PAGINATION_PAGE_COUNT,
    order: options.order || DEFAULT_ORDER,
  };
};

const hexToString = (input: string): string => {
  const hex = input.toString();
  let str = '';
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  return str;
};

export const getFingerprint = (policyId: string, assetName?: string): string =>
  new EmurgoCip(
    Uint8Array.from(Buffer.from(policyId, 'hex')),
    Uint8Array.from(Buffer.from(assetName || '', 'hex')),
  ).fingerprint();

export const parseAsset = (hex: string): ParseAssetResult => {
  const policyIdSize = 56;
  const policyId = hex.slice(0, policyIdSize);
  const assetNameInHex = hex.slice(policyIdSize);
  const assetName = hexToString(assetNameInHex);
  const fingerprint = getFingerprint(policyId, assetNameInHex);

  return {
    policyId,
    assetName,
    fingerprint,
  };
};
