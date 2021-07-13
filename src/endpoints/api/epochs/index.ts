import { handleError, getPaginationOptions } from '../../../utils';
import { PaginationOptions } from '../../../types';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';

export async function epochs(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}`)
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
    this.axiosInstance(`${this.apiUrl}/epochs/latest`)
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
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}/next`, {
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

export async function epochsPrevious(
  this: BlockFrostAPI,
  number: number,
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}/previous`, {
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

export async function epochsStakes(
  this: BlockFrostAPI,
  number: number,
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_stake_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}/stakes`, {
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

export async function epochsStakesByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_block_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}/stakes/${poolId}`, {
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

export async function epochsBlocks(
  this: BlockFrostAPI,
  number: number,
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_block_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}/blocks`, {
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

export async function epochsBlocksByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_stake_pool_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}/blocks/${poolId}`, {
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

export async function epochsParameters(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_param_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/epochs/${number}/parameters`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
