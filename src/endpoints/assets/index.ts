import { handleError, getPaginationOptions } from '../../utils';
import { components } from '../../types/OpenApi';
import { PaginationOptions } from '../../types';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function assets(
  this: BlockFrostAPI,
  pagination: PaginationOptions,
): Promise<components['schemas']['assets']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/assets`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
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
  pagination: PaginationOptions,
): Promise<components['schemas']['asset_history']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/assets/${asset}/history`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
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
      this.assetsHistory(asset, {
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

export async function assetsTxs(
  this: BlockFrostAPI,
  asset: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['asset_txs']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/assets/${asset}/txs`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsTransactions(
  this: BlockFrostAPI,
  asset: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['asset_transactions']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/assets/${asset}/transactions`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsAddresses(
  this: BlockFrostAPI,
  asset: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['asset_addresses']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/assets/${asset}/addresses`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsPolicyById(
  this: BlockFrostAPI,
  policy: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['asset_addresses']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/assets/policy/${policy}`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
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
      this.assetsPolicyById(policy, {
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
