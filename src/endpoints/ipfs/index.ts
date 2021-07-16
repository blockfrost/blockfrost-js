import { BlockFrostIPFS } from '../../index';
import { handleError, getPaginationOptions } from '../../utils';
import { PaginationOptions } from '../../types';
import { AddResponse, PinResponse, ListResponse } from '../../types/ipfs';
import FormData from 'form-data';
import { ReadStream } from 'fs';

export async function add(
  this: BlockFrostIPFS,
  readStream: ReadStream,
): Promise<AddResponse> {
  const data = new FormData();
  data.append('file', readStream);

  return new Promise((resolve, reject) => {
    this.axiosInstance
      .post(`${this.apiUrl}/ipfs/add`, data, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data.getBoundary()}`,
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

export async function gateway(
  this: BlockFrostIPFS,
  path: string,
): Promise<unknown> {
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

export async function pin(
  this: BlockFrostIPFS,
  path: string,
): Promise<PinResponse> {
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
): Promise<ListResponse> {
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
): Promise<ListResponse> {
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
