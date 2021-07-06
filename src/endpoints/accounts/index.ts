import axios from 'axios';
import { getHeaders, handleError, getPaginationOptions } from '../../utils';
import { components } from '../../types/OpenApi';
import { PaginationOptions } from '../../types';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function accounts(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/accounts/${stakeAddress}`, {
        headers: getHeaders(this),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRewards(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['account_reward_content']> {
  const paginationOptions = getPaginationOptions(pagination);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/rewards?page=${paginationOptions.page}&count=${paginationOptions.count}&order=${paginationOptions.order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsHistory(
  this: BlockFrostAPI,
  stakeAddress: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['account_history_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/history?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsWithdrawals(
  this: BlockFrostAPI,
  stakeAddress: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['account_withdrawal_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/withdrawals?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsMirs(
  this: BlockFrostAPI,
  stakeAddress: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['account_mir_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/mirs?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsDelegations(
  this: BlockFrostAPI,
  stakeAddress: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['account_delegation_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/delegations?page=${page}&count=${count}&order=${order}`,
        { headers: getHeaders(this) },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRegistrations(
  this: BlockFrostAPI,
  stakeAddress: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['account_registration_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/registrations?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsAddresses(
  this: BlockFrostAPI,
  stakeAddress: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['account_addresses_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/addresses?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}
