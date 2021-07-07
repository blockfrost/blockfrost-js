import { handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function assets(
  this: BlockFrostAPI,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['assets']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/assets?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsById(
  this: BlockFrostAPI,
  asset: string,
): Promise<components['schemas']['asset']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/assets/${asset}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsHistory(
  this: BlockFrostAPI,
  asset: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['asset_history']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/assets/${asset}/history?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsHistoryAll(
  this: BlockFrostAPI,
  asset: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['asset_history']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['asset_history'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.assetsHistory(asset, page + i, count, order),
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

export async function assetsTxs(
  this: BlockFrostAPI,
  asset: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['asset_txs']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/assets/${asset}/txs?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsTransactions(
  this: BlockFrostAPI,
  asset: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['asset_transactions']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/assets/${asset}/transactions?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsAddresses(
  this: BlockFrostAPI,
  asset: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['asset_addresses']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/assets/${asset}/addresses?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsPolicyById(
  this: BlockFrostAPI,
  policy: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['asset_addresses']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/assets/policy/${policy}?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsPolicyByIdAll(
  this: BlockFrostAPI,
  policy: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['asset_addresses']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['asset_addresses'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.assetsPolicyById(policy, page + i, count, order),
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
