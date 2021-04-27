import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
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
        headers: getHeaders(this.projectId),
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
        headers: getHeaders(this.projectId),
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
          headers: getHeaders(this.projectId),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
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
        {
          headers: getHeaders(this.projectId),
        },
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
  let res: components['schemas']['address_utxo_content'] = [];
  let shouldRun = true;
  const promisesBundle: Promise<
    components['schemas']['address_utxo_content']
  >[] = [];

  while (shouldRun) {
    for (let i = 0; i < batchSize; i++) {
      const promise = this.addressesUtxos(
        address,
        page,
        DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
        order,
      );
      promisesBundle.push(promise);
    }

    await Promise.all(
      promisesBundle.map(p =>
        p
          .then(data => {
            res = [...res, ...data];
            page++;
            if (data.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
              shouldRun = false;
            }
          })
          .catch(error => {
            shouldRun = false;
            return error;
          }),
      ),
    );
  }

  return res;
}
