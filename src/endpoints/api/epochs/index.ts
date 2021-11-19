import { getPaginationOptions } from '../../../utils';
import { PaginationOptions } from '../../../types';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';
import { handleError } from '../../../utils/errors';

export async function epochs(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['epoch_content']>(`epochs/${number}`)
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_content']>(`epochs/latest`)
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_content_array']>(
      `epochs/${number}/next`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_content_array']>(
      `epochs/${number}/previous`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_stake_content']>(
      `epochs/${number}/stakes`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_block_content']>(
      `epochs/${number}/stakes/${poolId}`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_block_content']>(
      `epochs/${number}/blocks`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_stake_pool_content']>(
      `epochs/${number}/blocks/${poolId}`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['epoch_param_content']>(
      `epochs/${number}/parameters`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
