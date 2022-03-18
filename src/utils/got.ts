import got, { Got } from 'got';
import { ValidatedOptions } from '../types';
import {
  BurstyRateLimiter,
  RateLimiterMemory,
  RateLimiterQueue,
} from 'rate-limiter-flexible';

const burstyLimiter = new BurstyRateLimiter(
  new RateLimiterMemory({
    points: 10,
    duration: 10,
  }),
  new RateLimiterMemory({
    keyPrefix: 'burst',
    points: 500,
    duration: 50,
  }),
);

const limiterQueue = new RateLimiterQueue(burstyLimiter);

export const getInstance = (
  apiUrl: string,
  options: ValidatedOptions,
  userAgent: string | undefined,
): Got =>
  got.extend({
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
