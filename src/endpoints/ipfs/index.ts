import { BlockFrostIPFS } from '../../index';
import { urlSource } from 'ipfs-http-client';
import { handleError, getPaginationOptions } from '../../utils';
import { PaginationOptions } from '../../types';
import { AddParams } from '../../types/ipfs';

export async function add(
  this: BlockFrostIPFS,
  params: AddParams,
): Promise<any> {
  // if (params.sourceType === 'file') {
  //   const result = await this.client.add(globSource(params.path, {}));
  //   return result;
  // }

  if (params.sourceType === 'url') {
    const result = await this.client.add(urlSource(params.path));
    return result;
  }
}

export async function gateway(
  this: BlockFrostIPFS,
  path: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    this.axiosInstance
      .get(`${this.apiUrl}/ipfs/gateway`, {
        params: { path },
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function pin(this: BlockFrostIPFS, path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    this.axiosInstance
      .post(`${this.apiUrl}/ipfs/pin/add/${path}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function list(
  this: BlockFrostIPFS,
  pagination?: PaginationOptions,
): Promise<string> {
  const paginationOptions = getPaginationOptions(pagination);
  return new Promise((resolve, reject) => {
    this.axiosInstance
      .get(`${this.apiUrl}/ipfs/pin/list`, {
        params: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function listByPath(
  this: BlockFrostIPFS,
  path: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    this.axiosInstance
      .get(`${this.apiUrl}/ipfs/pin/list/${path}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function pinRemove(
  this: BlockFrostIPFS,
  path: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    this.axiosInstance
      .post(`${this.apiUrl}/ipfs/pin/remove`, {
        params: { path },
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
