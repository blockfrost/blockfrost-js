import { handleError } from '../../utils';
import {
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';
import { HashOrNumber } from '../../types';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export async function blocks(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
): Promise<components['schemas']['block_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/blocks/${hashOrNumber}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function blocksLatest(
  this: BlockFrostAPI,
): Promise<components['schemas']['block_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/blocks/latest`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        return reject(handleError(err));
      });
  });
}

export async function blocksNext(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
): Promise<components['schemas']['block_content_array']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/blocks/${hashOrNumber}/next?page=${page}&count=${count}`,
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function blocksPrevious(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
): Promise<components['schemas']['block_content_array']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/blocks/${hashOrNumber}/previous?page=${page}&count=${count}`,
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function blocksTxs(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['block_content_txs']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/blocks/${hashOrNumber}/txs?page=${page}&count=${count}&order=${order}`,
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function blocksTxsAll(
  this: BlockFrostAPI,
  hashOrNumber: string | number,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['block_content_txs']> {
  let page = 1;
  const res: components['schemas']['block_content_txs'] = [];
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.blocksTxs(hashOrNumber, page + i, count, order),
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
