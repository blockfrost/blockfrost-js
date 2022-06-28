import { BlockFrostIPFS } from '../../index';
import { handleError } from '../../utils/errors';
import { getPaginationOptions } from '../../utils';
import { PaginationOptions } from '../../types';
import { AddResponse, PinResponse, ListResponse } from '../../types/ipfs';
import FormData from 'form-data';
import fs from 'fs';

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
