import { handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function pools(
  this: BlockFrostAPI,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['pool_list']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/pools?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsRetired(
  this: BlockFrostAPI,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['pool_list_retire']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/pools/retired?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsRetiring(
  this: BlockFrostAPI,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['pool_list_retire']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/pools/retiring?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsById(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/${poolId}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdHistory(
  this: BlockFrostAPI,
  poolId: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['pool_history']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/pools/${poolId}/history?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolMetadata(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_metadata']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/${poolId}/metadata`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdRelays(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_relays']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/${poolId}/relays`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdDelegators(
  this: BlockFrostAPI,
  poolId: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['pool_delegators']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/pools/${poolId}/delegators?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdBlocks(
  this: BlockFrostAPI,
  poolId: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['pool_blocks']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/pools/${poolId}/blocks?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdUpdates(
  this: BlockFrostAPI,
  poolId: string,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['pool_updates']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/pools/${poolId}/updates?page=${page}&count=${count}&order=${order}`,
      {},
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
