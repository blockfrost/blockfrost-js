import got, { Got } from 'got';
import { RateLimiterQueue } from 'rate-limiter-flexible';
import { ValidatedOptions } from '../types';
import { getLimiter } from './limiter';

export const getInstance = (
  apiUrl: string,
  options: ValidatedOptions,
  userAgent: string | undefined,
): Got => {
  let limiterQueue: RateLimiterQueue;

  if (options.rateLimiter) {
    limiterQueue = getLimiter(options.rateLimiter);
  }

  return got.extend({
    hooks: {
      beforeRequest: [
        async hookOptions => {
          if (options.rateLimiter) {
            await limiterQueue.removeTokens(1);
          }
          if (options.debug) {
            console.log(`${hookOptions.method} ${hookOptions.url}`);
          }
        },
      ],
      beforeError: [
        error => {
          if (options.debug) {
            console.error(error);
          }
          return error;
        },
      ],
    },
    prefixUrl: apiUrl,
    responseType: 'json',
    http2: options.http2,
    headers: {
      project_id: options.projectId,
      'User-Agent': userAgent,
    },
    retry: options.retrySettings,
    timeout: {
      request: options.requestTimeout,
    },
  });
};
