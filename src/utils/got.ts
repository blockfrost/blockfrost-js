import got, { Got } from 'got';
import { ValidatedOptions } from '../types';

export const getInstance = (
  apiUrl: string,
  options: ValidatedOptions,
  userAgent: string | undefined,
): Got =>
  got.extend({
    prefixUrl: apiUrl,
    responseType: 'json',
    http2: true,
    headers: {
      project_id: options.projectId,
      userAgent: userAgent,
    },
    retry: options.retrySettings,
    timeout: {
      request: options.requestTimeout,
    },
  });
