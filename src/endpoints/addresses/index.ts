import axios from 'axios';
import { getHeaders, getAdditionalParams, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function addresses(
  this: BlockFrostAPI,
  address: string,
): Promise<components['schemas']['address_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/addresses/${address}`, {
        headers: getHeaders(this),
      })
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
    axios
      .get(`${this.apiUrl}/addresses/${address}/total`, {
        headers: getHeaders(this),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function addressesTxs(
  this: BlockFrostAPI,
  address: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['address_txs_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/addresses/${address}/txs?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
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
      this.addressesTxs(address, page + i, count, order),
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
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
  from: string | undefined,
  to: string | undefined,
): Promise<components['schemas']['address_transactions_content']> {
  const additionalParams: string = getAdditionalParams(from, to);

  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/addresses/${address}/transactions?page=${page}&count=${count}&order=${order}&${additionalParams}`,
        {
          headers: getHeaders(this),
        },
      )
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
        page + i,
        count,
        order,
        undefined,
        undefined,
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
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['address_utxo_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/addresses/${address}/utxos?page=${page}&count=${count}&order=${order}`,
        { headers: getHeaders(this) },
      )
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
      this.addressesUtxos(
        address,
        page + i,
        DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
        order,
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
