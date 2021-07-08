import {
  getAdditionalParams,
  handleError,
  getPaginationOptions,
} from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';
import { PaginationOptions, AdditionalEndpointOptions } from '../../types';

export async function addresses(
  this: BlockFrostAPI,
  address: string,
): Promise<components['schemas']['address_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/addresses/${address}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function addressesTotal(
  this: BlockFrostAPI,
  address: string,
): Promise<components['schemas']['address_content_total']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/addresses/${address}/total`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function addressesTxs(
  this: BlockFrostAPI,
  address: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['address_txs_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/addresses/${address}/txs`, {
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
        if (err && err.response && err.response.data.status_code === 404) {
          resolve([]);
        }

        reject(handleError(err));
      });
  });
}

export async function addressesTxsAll(
  this: BlockFrostAPI,
  address: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['address_txs_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['address_txs_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.addressesTxs(address, {
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

export async function addressesTransactions(
  this: BlockFrostAPI,
  address: string,
  pagination?: PaginationOptions,
  additionalOptions?: AdditionalEndpointOptions,
): Promise<components['schemas']['address_transactions_content']> {
  const additionalParams = getAdditionalParams(additionalOptions);
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/addresses/${address}/transactions`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
        from: additionalParams.from,
        to: additionalParams.to,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        if (err && err.response && err.response.data.status_code === 404) {
          resolve([]);
        }

        reject(handleError(err));
      });
  });
}

export async function addressesTransactionsAll(
  this: BlockFrostAPI,
  address: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['address_transactions_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['address_transactions_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.addressesTransactions(
        address,
        {
          page: page + i,
          count,
          order,
        },
        {
          from: undefined,
          to: undefined,
        },
      ),
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

export async function addressesUtxos(
  this: BlockFrostAPI,
  address: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['address_utxo_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/addresses/${address}/utxos`, {
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

export async function addressesUtxosAll(
  this: BlockFrostAPI,
  address: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['address_utxo_content']> {
  let page = 1;
  const res: components['schemas']['address_utxo_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.addressesUtxos(address, {
        page: page + i,
        count: DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
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
