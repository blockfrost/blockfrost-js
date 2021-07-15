import { API_URLS } from './config';
import { AxiosInstance } from 'axios';
import {
  add,
  list,
  pin,
  listByPath,
  pinRemove,
  gateway,
} from './endpoints/ipfs';
import { Options, ValidatedOptions } from './types';
import { create } from 'ipfs-http-client';
import join from 'url-join';
import { validateOptions } from './utils';
import { hackInstance } from './utils/axios';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostIPFS {
  apiUrl: string;
  client: ReturnType<typeof create>;
  projectId?: string;
  userAgent?: string;
  options: ValidatedOptions;
  axiosInstance: AxiosInstance;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    const apiBase = API_URLS.ipfs;

    this.apiUrl = join(apiBase, `v${this.options.version}`);

    this.userAgent =
      options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.axiosInstance = hackInstance(this.options, this.userAgent);

    this.projectId = this.options.projectId;

    this.client = create({
      url: `${this.apiUrl}/ipfs/add`,
      headers: {
        PROJECT_ID: `${this.options.projectId}`,
      },
    });
  }

  /**
   * add - Add a file or directory to ipfs
   *
   * @returns information about added ipfs object
   */
  add = add;

  /**
   * gateway - Relay to an ipfs gateway
   *
   * @returns the object content
   *
   */
  gateway = gateway;

  /**
   * pin - Pin an object
   *
   * @returns pinned object
   *
   */
  pin = pin;

  /**
   * listByPath - List objects pinned to local storage
   *
   * @returns list of pinned objects
   *
   */
  listByPath = listByPath;

  /**
   * list - List objects pinned to local storage
   *
   * @returns list of pinned objects
   *
   */
  list = list;

  /**
   * pinRemove - Remove pinned objects from local storage
   *
   * @returns removed pinned object
   *
   */
  pinRemove = pinRemove;
}

export { BlockFrostIPFS };
