import { getPaginationOptions, paginateMethod } from '../../../utils';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';
import { handleError } from '../../../utils/errors';

/**
 * Obtains information about a specific epoch.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D/get | API docs for Specific epoch}
 *
 * @param number - Number of the epoch
 * @returns Information about a specific epoch.
 *
 */
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

/**
 * Obtains the information about the latest, therefore current, epoch.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1latest/get | API docs for Latest epoch}
 *
 * @returns Information about the current epoch.
 *
 */
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

/**
 * Obtains a list of epochs following a specific epoch.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1next/get | API docs for Listing of next epochs}
 *
 * @param number - Number of the epoch
 * @param pagination - Optional, Pagination options
 * @returns List of epochs following a specific epoch.
 *
 */
export async function epochsNext(
  this: BlockFrostAPI,
  number: number,
  pagination?: Omit<PaginationOptions, 'order'>,
): Promise<components['schemas']['epoch_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['epoch_content_array']>(
      `epochs/${number}/next`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
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

/**
 * Obtains a list of epochs preceding a specific epoch.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1previous/get | API docs for Listing of next epochs}
 *
 * @param number - Number of the epoch
 * @param pagination - Optional, Pagination options
 * @returns List of epochs preceding a specific epoch.
 *
 */
export async function epochsPrevious(
  this: BlockFrostAPI,
  number: number,
  pagination?: Omit<PaginationOptions, 'order'>,
): Promise<components['schemas']['epoch_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['epoch_content_array']>(
      `epochs/${number}/previous`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
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

/**
 * Obtains the active stake distribution for the specified epoch.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get | API docs for Stake distribution}
 *
 * @param number - Number of the epoch
 * @param pagination - Optional, Pagination options
 * @returns Active stake distribution for the specified epoch
 *
 */
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

/**
 * Obtains the whole active stake distribution for the specified epoch.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get | API docs for Stake distribution}
 * @remarks
 * Variant of `epochsStakes` method for fetching all pages with built-in requests batching
 *
 * @param number - Number of the epoch
 * @param allMethodOptions - Optional, Options for request batching
 * @returns Active stake distribution for the specified epoch
 *
 */
export async function epochsStakesAll(
  this: BlockFrostAPI,
  number: number,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['epoch_stake_content']> {
  return paginateMethod(
    pagination => this.epochsStakes(number, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains the active stake distribution for the epoch specified by stake pool.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get | API docs for Stake distribution}
 *
 * @param number - Number of the epoch
 * @param poolId - Stake pool ID to filter
 * @param pagination - Optional, Pagination options
 * @returns Active stake distribution for the epoch specified by stake pool
 *
 */
export async function epochsStakesByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_stake_pool_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['epoch_stake_pool_content']>(
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

/**
 * Obtains the whole active stake distribution for the epoch specified by stake pool.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get | API docs for Stake distribution}
 * @remarks
 * Variant of `epochsStakesByPoolId` method for fetching all pages with built-in requests batching
 *
 * @param number - Number of the epoch
 * @param poolId - Stake pool ID to filter
 * @param allMethodOptions - Optional, Options for request batching
 * @returns Active stake distribution for the epoch specified by stake pool
 *
 */
export async function epochsStakesByPoolIdAll(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['epoch_stake_pool_content']> {
  return paginateMethod(
    pagination => this.epochsStakesByPoolId(number, poolId, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains the blocks minted for the epoch specified.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks/get | API docs for Block distribution}
 *
 * @param number - Number of the epoch
 * @param pagination - Optional, Pagination options
 * @returns Blocks minted for the epoch specified
 *
 */
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

/**
 * Obtains the blocks minted for the epoch specified.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks/get | API docs for Block distribution}
 * @remarks
 * Variant of `epochsBlocks` method for fetching all pages with built-in requests batching
 *
 * @param number - Number of the epoch
 * @param allMethodOptions - Optional, Options for request batching
 * @returns Blocks minted for the epoch specified
 *
 */
export async function epochsBlocksAll(
  this: BlockFrostAPI,
  number: number,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['epoch_block_content']> {
  return paginateMethod(
    pagination => this.epochsBlocks(number, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains the blocks minted for the epoch specified by stake pool.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks~1%7Bpool_id%7D/get | API docs for Block distribution by pool}
 *
 * @param number - Number of the epoch
 * @param poolId - Stake pool ID to filter
 * @param pagination - Optional, Pagination options
 * @returns Blocks minted for the epoch specified by stake pool
 *
 */
export async function epochsBlocksByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['epoch_block_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['epoch_block_content']>(
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

/**
 * Obtains the blocks minted for the epoch specified by stake pool.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks~1%7Bpool_id%7D/get | API docs for Block distribution by pool}
 * @remarks
 * Variant of `epochsBlocksByPoolId` method for fetching all pages with built-in requests batching
 *
 * @param number - Number of the epoch
 * @param poolId - Stake pool ID to filter
 * @param allMethodOptions - Optional, Options for request batching
 * @returns Blocks minted for the epoch specified by stake pool
 *
 */
export async function epochsBlocksByPoolIdAll(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['epoch_block_content']> {
  return paginateMethod(
    pagination => this.epochsBlocksByPoolId(number, poolId, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains the protocol parameters for the epoch specified.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1parameters/get | API docs for Protocol Parameters}
 *
 * @param number - Number of the epoch
 * @returns Protocol parameters for the epoch specified
 *
 */
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

/**
 * Obtains the protocol parameters for the latest epoch.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1latest~1parameters/get | API docs for Latest epoch protocol parameters}
 *
 * @returns Protocol parameters for the latest epoch
 *
 */
export async function epochsLatestParameters(
  this: BlockFrostAPI,
): Promise<components['schemas']['epoch_param_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['epoch_param_content']>(
      `epochs/latest/parameters`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
