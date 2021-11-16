import got, { Got } from 'got';
import { getHeaders } from '../utils';
import { ValidatedOptions } from '../types';

export const getInstance = (
  apiUrl: string,
  options: ValidatedOptions,
  userAgent: string,
): Got =>
  got.extend({
    prefixUrl: apiUrl,
    responseType: 'json',
    headers: getHeaders(options.projectId, userAgent),
  });
