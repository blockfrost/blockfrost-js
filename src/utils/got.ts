import got, { Got } from 'got';
import { ValidatedOptions } from '../types';

export const getInstance = (
  apiUrl: string,
  options: ValidatedOptions,
  userAgent: string | undefined,
): Got =>
  got.extend({
    hooks: options.debug
      ? {
          beforeRequest: [
            options => {
              console.log(`${options.method} ${options.url}`);
            },
          ],
          beforeError: [
            error => {
              console.error(error);
              return error;
            },
          ],
        }
      : undefined,
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
