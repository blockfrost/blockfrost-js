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
  Options,
  ValidatedOptions,
  PaginationOptions,
  AdditionalEndpointOptions,
  AllMethodOptions,
} from '../types';
import { RetryObject } from 'got';

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

  return {
    customBackend: options.customBackend,
    projectId: options.projectId,
    isTestnet:
      options.isTestnet ??
      deriveTestnetOption(options.projectId, options.isTestnet),
    version: options.version || DEFAULT_API_VERSION,
    http2: options.http2 ?? false,
    requestTimeout: options.requestTimeout ?? 20000, // 20 seconds
    // see: https://github.com/sindresorhus/got/blob/main/documentation/7-retry.md#retry
    retrySettings: options.retrySettings ?? {
      limit: 20, // retry count
      methods: ['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'], // no retry on POST
      statusCodes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
      errorCodes: [
        'ETIMEDOUT',
        'ECONNRESET',
        'EADDRINUSE',
        'ECONNREFUSED',
        'EPIPE',
        'ENOTFOUND',
        'ENETUNREACH',
        'EAI_AGAIN',
      ],
      calculateDelay: (_retryObject: RetryObject) => 1000, // 1s retry delay
      // maxRetryAfter: undefined,
      // backoffLimit: Number.POSITIVE_INFINITY,
      // noise: 100
    },
  };
};

const deriveTestnetOption = (
  projectId: string | undefined,
  isTestnet: boolean | undefined,
) => {
  if (!projectId) return undefined;

  if (projectId.includes('mainnet')) {
    return false;
  }

  if (projectId.includes('testnet')) {
    return true;
  }

  if (projectId.includes('ipfs')) {
    return false;
  }

  if (!isTestnet) {
    console.log(
      'WARNING: Old token was used without isTestnet parameter switching to mainnet network',
    );
    return false;
  }

  return undefined;
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
      if (p.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res as ReturnType<T>; // yikes
      }
    }
  }
};

export const debugMessage = (
  body: unknown,
  head?: string,
  tail?: string,
): void => {
  if (process.env.BLOCKFROST_DEBUG !== 'true') return;

  if (head) {
    console.log(`------ ${head}`);
  }

  console.log(body);

  if (tail) {
    console.log(`------ ${tail}`);
  }
};
