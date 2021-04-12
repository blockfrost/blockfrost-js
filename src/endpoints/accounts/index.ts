import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
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
        headers: getHeaders(this.projectId),
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
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['account_reward_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/accounts/${stakeAddress}/rewards?page=${page}&count=${count}&order=${order}`,
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
          headers: getHeaders(this.projectId),
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
          headers: getHeaders(this.projectId),
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
          headers: getHeaders(this.projectId),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}
