import {
  DEFAULT_API_VERSION,
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../config';

import {
  ErrorType,
  ExtendedAxiosError,
  Headers,
  Options,
  ValidatedOptions,
  PaginationOptions,
  AdditionalEndpointOptions,
} from '../types';

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
  projectId: string | undefined,
  userAgent?: string,
): Headers | null => {
  if (!projectId) {
    return null;
  }

  const userAgentHeader = userAgent ? { 'User-Agent': userAgent } : null;

  return {
    project_id: projectId,
    ...userAgentHeader,
  };
};

export const handleError = (error: ExtendedAxiosError): ErrorType => {
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
