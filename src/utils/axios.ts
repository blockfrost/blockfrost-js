import axios, { AxiosInstance } from 'axios';
import * as rax from 'retry-axios';
import { getHeaders } from '../utils';
import { ValidatedOptions } from '../types';
import { createRateLimiter } from './ratelimiter';

export const hackInstance = (
  options: ValidatedOptions,
  userAgent: string,
): AxiosInstance => {
  const axiosInstance = options.adapter
    ? axios.create({ adapter: options.adapter })
    : axios.create();

  const readyForNextRequest = createRateLimiter();
  axiosInstance.interceptors.request.use(config =>
    readyForNextRequest().then(() => config),
  );

  axiosInstance.defaults.raxConfig = {
    instance: axiosInstance,
    retry: options.retryCount, // // Retry on requests that return a response (429, etc) before giving up.
    noResponseRetries: 3, // // Retry on errors that don't return a response (ENOTFOUND, ETIMEDOUT, etc).
    retryDelay: options.retryDelay,
    statusCodesToRetry: options.retry429 ? [[429, 429]] : [],
    backoffType: 'static', // the backoff type. options are 'exponential' (default), 'static' or 'linear'
  };
  // set default headers
  axiosInstance.defaults.headers = getHeaders(options.projectId, userAgent);
  axiosInstance.defaults.timeout = options.requestTimeout;
  rax.attach(axiosInstance);

  return axiosInstance;
};
