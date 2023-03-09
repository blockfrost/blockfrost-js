/* eslint-disable tsdoc/syntax */
import { API_URLS } from './config';
import { Got } from 'got';
import Bottleneck from 'bottleneck';
import {
  add,
  list,
  pin,
  listByPath,
  pinRemove,
  gateway,
} from './endpoints/ipfs';
import { Options, ValidatedOptions } from './types';
import { validateOptions } from './utils';
import { getInstance } from './utils/got';
import { getLimiter } from './utils/limiter';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostIPFS {
  /** @ignore */
  apiUrl: string;
  /** @ignore */
  projectId?: string;
  /** @ignore */
  userAgent?: string;
  /** @ignore */
  options: ValidatedOptions;
  /** @ignore */
  instance: Got;
  /** @ignore */
  rateLimiter: Bottleneck | undefined;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    const apiBase = API_URLS.ipfs;

    this.apiUrl = `${apiBase}/v${this.options.version}`;

    this.userAgent =
      options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.rateLimiter = this.options.rateLimiter
      ? getLimiter(this.options.rateLimiter)
      : undefined;

    this.instance = getInstance(
      this.apiUrl,
      this.options,
      this.userAgent,
      this.rateLimiter,
    );

    this.projectId = this.options.projectId;
  }

  add = add;
  gateway = gateway;
  pin = pin;
  listByPath = listByPath;
  list = list;
  pinRemove = pinRemove;
}

export { BlockFrostIPFS };
