import { BlockFrostIPFS } from '../../index';
import { handleError } from '../../utils/errors';
import { getPaginationOptions } from '../../utils';
import { PaginationOptions } from '../../types';
import { AddResponse, PinResponse, ListResponse } from '../../types/ipfs';
import FormData from 'form-data';
import fs from 'fs';

/**
 * add - Add a file or directory to ipfs
 *
 * @returns information about added ipfs object
 */
export async function add(
  this: BlockFrostIPFS,
  path: string,
): Promise<AddResponse> {
  const stream = fs.createReadStream(path);
  const data = new FormData();

  data.append('file', stream);

  return new Promise((resolve, reject) => {
    this.instance
      .post<AddResponse>(`ipfs/add`, {
        body: data,
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data.getBoundary()}`,
        },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * gateway - Relay to an ipfs gateway
 *
 * @returns the object content
 *
 */
export async function gateway(
  this: BlockFrostIPFS,
  path: string,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    this.instance
      .get(`ipfs/gateway`, {
        searchParams: { path },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * pin - Pin an object
 *
 * @returns pinned object
 *
 */
export async function pin(
  this: BlockFrostIPFS,
  path: string,
): Promise<PinResponse> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<PinResponse>(`ipfs/pin/add/${path}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * list - List objects pinned to local storage
 *
 * @returns list of pinned objects
 *
 */
export async function list(
  this: BlockFrostIPFS,
  pagination?: PaginationOptions,
): Promise<ListResponse> {
  const paginationOptions = getPaginationOptions(pagination);
  return new Promise((resolve, reject) => {
    this.instance<ListResponse>(`ipfs/pin/list`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * listByPath - List objects pinned to local storage
 *
 * @returns list of pinned objects
 *
 */
export async function listByPath(
  this: BlockFrostIPFS,
  path: string,
): Promise<ListResponse> {
  return new Promise((resolve, reject) => {
    this.instance<ListResponse>(`ipfs/pin/list/${path}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * pinRemove - Remove pinned objects from local storage
 *
 * @returns removed pinned object
 *
 */
export async function pinRemove(
  this: BlockFrostIPFS,
  path: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<string>(`ipfs/pin/remove/${path}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
