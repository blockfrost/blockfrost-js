import { handleError, getPaginationOptions } from '../../utils';
import { PaginationOptions } from '../../types';
import fs from 'fs';
import { components } from '../../types/OpenApi';
import {
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';
import { BlockFrostAPI } from '../../index';

export async function ipfsAdd(
  this: BlockFrostAPI,
  filePath: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    const data = fs.readFileSync(filePath, 'utf8');
    form.append('file', data);

    this.axiosInstance
      .post(`${this.apiUrl}/ipfs/pin/add`, form, {
        headers: {
          'Content-type': 'multipart/form-data',
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

export async function ipfsGateway(
  this: BlockFrostAPI,
  path: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    this.axiosInstance
      .get(`${this.apiUrl}/ipfs/gateway/add`, {
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

export async function ipfsPinAdd(
  this: BlockFrostAPI,
  path: string,
): Promise<string> {
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

export async function ipfsPinList(
  this: BlockFrostAPI,
  pagination: PaginationOptions,
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

export async function ipfsPinListAll(
  this: BlockFrostAPI,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['address_transactions_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: any = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.ipfsPinList({
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
}

export async function ipfsPinListByPath(
  this: BlockFrostAPI,
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

export async function ipfsPinRemove(
  this: BlockFrostAPI,
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
