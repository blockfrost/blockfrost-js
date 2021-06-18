import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function epochs(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}`, {
        headers: getHeaders(this),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsLatest(
  this: BlockFrostAPI,
): Promise<components['schemas']['epoch_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/latest`, {
        headers: getHeaders(this),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsNext(
  this: BlockFrostAPI,
  number: number,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
): Promise<components['schemas']['epoch_content_array']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/next?page=${page}&count=${count}`, {
        headers: getHeaders(this),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsPrevious(
  this: BlockFrostAPI,
  number: number,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
): Promise<components['schemas']['epoch_content_array']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/epochs/${number}/previous?page=${page}&count=${count}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsStakes(
  this: BlockFrostAPI,
  number: number,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
): Promise<components['schemas']['epoch_stake_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/epochs/${number}/stakes?page=${page}&count=${count}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsStakesByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
): Promise<components['schemas']['epoch_block_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/epochs/${number}/stakes/${poolId}?page=${page}&count=${count}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsBlocks(
  this: BlockFrostAPI,
  number: number,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['epoch_block_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/epochs/${number}/blocks?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsBlocksByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['epoch_stake_pool_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/epochs/${number}/blocks/${poolId}?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsParameters(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_param_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/parameters`, {
        headers: getHeaders(this),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
