import { handleError, getPaginationOptions } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';
import { PaginationOptions } from '../../types';

export async function pools(
  this: BlockFrostAPI,
  pagination: PaginationOptions,
): Promise<components['schemas']['pool_list']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools`, {
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
        reject(handleError(err));
      });
  });
}

export async function poolsRetired(
  this: BlockFrostAPI,
  pagination: PaginationOptions,
): Promise<components['schemas']['pool_list_retire']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/retired`, {
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
        reject(handleError(err));
      });
  });
}

export async function poolsRetiring(
  this: BlockFrostAPI,
  pagination: PaginationOptions,
): Promise<components['schemas']['pool_list_retire']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/retiring`, {
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
  pagination: PaginationOptions,
): Promise<components['schemas']['pool_history']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/${poolId}/history`, {
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
  pagination: PaginationOptions,
): Promise<components['schemas']['pool_delegators']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/${poolId}/delegators`, {
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
        reject(handleError(err));
      });
  });
}

export async function poolsByIdBlocks(
  this: BlockFrostAPI,
  poolId: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['pool_blocks']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/${poolId}/blocks`, {
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
        reject(handleError(err));
      });
  });
}

export async function poolsByIdUpdates(
  this: BlockFrostAPI,
  poolId: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['pool_updates']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/pools/${poolId}/updates`, {
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
        reject(handleError(err));
      });
  });
}
