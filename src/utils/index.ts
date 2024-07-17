import {
  DEFAULT_API_VERSION,
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
  DEFAULT_BATCH_SIZE,
} from '../config';

import {
  Options,
  ValidatedOptions,
  PaginationOptions,
  AdditionalEndpointOptions,
  AllMethodOptions,
  BlockfrostNetwork,
} from '../types';
import { RetryObject } from 'got';
import { RATE_LIMITER_DEFAULT_CONFIG } from './limiter';

export const isDebugEnabled = () => process.env.BLOCKFROST_DEBUG === 'true';

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

  const debug = options.debug ?? isDebugEnabled();

  let rateLimiter: ValidatedOptions['rateLimiter'];
  if (options.rateLimiter === false) {
    rateLimiter = false;
  } else if (
    options.rateLimiter === true ||
    options.rateLimiter === undefined
  ) {
    rateLimiter = RATE_LIMITER_DEFAULT_CONFIG;
  } else if (options.rateLimiter) {
    // custom config
    // eslint-disable-next-line prefer-destructuring
    rateLimiter = options.rateLimiter;
  }

  return {
    customBackend: options.customBackend,
    projectId: options.projectId,
    network: options.network ?? deriveNetworkOption(options.projectId),
    rateLimiter,
    version: options.version || DEFAULT_API_VERSION,
    debug,
    http2: options.http2 ?? false,
    gotOptions: options.gotOptions || undefined,
    requestTimeout: options.requestTimeout ?? 20000, // 20 seconds
    // see: https://github.com/sindresorhus/got/blob/main/documentation/7-retry.md#retry
    retrySettings: options.retrySettings ?? {
      limit: 3, // retry count
      methods: ['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'], // no retry on POST
      statusCodes: [408, 413, 429, 500, 502, 503, 504, 520, 521, 522, 524],
      errorCodes: [
        'ETIMEDOUT',
        'ECONNRESET',
        'EADDRINUSE',
        'ECONNREFUSED',
        'EPIPE',
        'ENOTFOUND',
        'ENETUNREACH',
        'EAI_AGAIN',
        'EPROTO',
      ],
      calculateDelay: (retryObject: RetryObject) => {
        return retryObject.computedValue !== 0 ? 1000 : 0;
      },
      // maxRetryAfter: undefined,
      // backoffLimit: Number.POSITIVE_INFINITY,
      // noise: 100
    },
  };
};

const deriveNetworkOption = (
  projectId: string | undefined,
): BlockfrostNetwork | undefined => {
  if (!projectId) return undefined;

  if (projectId.startsWith('mainnet')) {
    return 'mainnet';
  } else if (projectId.startsWith('preview')) {
    return 'preview';
  } else if (projectId.startsWith('preprod')) {
    return 'preprod';
  } else if (projectId.startsWith('sanchonet')) {
    return 'sanchonet';
  } else if (projectId.startsWith('ipfs')) {
    return 'ipfs';
  } else {
    console.warn(
      'WARNING: Old token was used without network parameter. Switching to mainnet network',
    );
    return 'mainnet';
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

export const paginateMethod = async <
  T extends (
    pagination: PaginationOptions,
    additionalOptions?: AdditionalEndpointOptions,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => any,
>(
  fn: T,
  allMethodOptions: AllMethodOptions | undefined,
  additionalOptions?: AdditionalEndpointOptions,
): Promise<ReturnType<T>> => {
  const res = [];
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const options = getAllMethodOptions(allMethodOptions);

  const getSlice = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      fn(
        {
          page: page + i,
          count,
          order: options.order,
        },
        {
          from: additionalOptions?.from,
          to: additionalOptions?.to,
        },
      ),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const pages = await Promise.all(getSlice());
    for (const p of pages) {
      res.push(...p);
      if (p.length < count) {
        return res as ReturnType<T>; // yikes
      }
    }
  }
};
