import got, { Got } from 'got';
import Bottleneck from 'bottleneck';
import { ValidatedOptions } from '../types';

export const getInstance = (
  apiUrl: string,
  options: ValidatedOptions,
  userAgent: string | undefined,
  rateLimiter: Bottleneck | undefined,
): Got => {
  return got.extend({
    hooks: {
      beforeRequest: [
        async hookOptions => {
          if (rateLimiter) {
            await rateLimiter.schedule(() => Promise.resolve(true));
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
