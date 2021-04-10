import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
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
    axios
      .get(`${this.apiUrl}/blocks/${hashOrNumber}`, {
        headers: getHeaders(this.projectId),
      })
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
    axios
      .get(`${this.apiUrl}/blocks/latest`, {
        headers: getHeaders(this.projectId),
      })
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
    axios
      .get(
        `${this.apiUrl}/blocks/${hashOrNumber}/next?page=${page}&count=${count}`,
        { headers: getHeaders(this.projectId) },
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
    axios
      .get(
        `${this.apiUrl}/blocks/${hashOrNumber}/previous?page=${page}&count=${count}`,
        { headers: getHeaders(this.projectId) },
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
    axios
      .get(
        `${this.apiUrl}/blocks/${hashOrNumber}/txs?page=${page}&count=${count}&order=${order}`,
        { headers: getHeaders(this.projectId) },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
