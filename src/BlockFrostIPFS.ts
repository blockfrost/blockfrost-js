import { API_URLS } from './config';
import { Got } from 'got';
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
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostIPFS {
  apiUrl: string;
  projectId?: string;
  userAgent?: string;
  options: ValidatedOptions;
  instance: Got;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    const apiBase = API_URLS.ipfs;

    this.apiUrl = `${apiBase}/v${this.options.version}`;

    this.userAgent =
      options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.instance = getInstance(this.apiUrl, this.options, this.userAgent);

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
