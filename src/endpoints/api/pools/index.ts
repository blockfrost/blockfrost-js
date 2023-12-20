import { getPaginationOptions, paginateMethod } from '../../../utils';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { handleError } from '../../../utils/errors';

/**
 * Obtains list of registered stake pools (paginated).
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools/get | API docs for List of stake pools}
 *
 * @param pagination - Optional, Pagination options
 * @returns List of registered stake pools.
 *
 */
export async function pools(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_list']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['pool_list']>(
      `pools`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains list of all registered stake pools.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools/get | API docs for List of stake pools}
 * @remarks
 * Variant of `pools` method for fetching all pages with built-in requests batching
 *
 * @param allMethodOptions - Optional, Options for request batching
 * @returns List of registered stake pools.
 *
 */
export async function poolsAll(
  this: BlockFrostAPI,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['pool_list']> {
  return paginateMethod(pagination => this.pools(pagination), allMethodOptions);
}

export async function poolsRetired(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_list_retire']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['pool_list_retire']>(
      `pools/retired`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains list of stake pools retiring in the upcoming epochs (paginated).
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1retiring/get | API docs for List of retiring stake pools}
 *
 * @param pagination - Optional, Pagination options
 * @returns List of stake pools retiring in the upcoming epochs
 *
 */
export async function poolsRetiring(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_list_retire']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['pool_list_retire']>(
      `pools/retiring`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains information of a specific stake pool.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D/get | API docs for Stake Pool}
 *
 * @param poolId - Pool ID
 * @returns Information of a specific stake pool.
 *
 */
export async function poolsById(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool']> {
  try {
    const res = await this.instance<components['schemas']['pool']>(
      `pools/${poolId}`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains history of stake pool parameters over epochs (paginated).
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1history/get | API docs for Stake pool history}
 *
 * @param poolId - Pool ID
 * @param pagination - Optional, Pagination options
 * @returns List of stake pool parameters per epoch
 *
 */
export async function poolsByIdHistory(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_history']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['pool_history']>(
      `pools/${poolId}/history`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains stake pool registration metadata.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1metadata/get | API docs for Stake pool metadata}
 *
 * @param poolId - Pool ID
 * @returns Stake pool registration metadata
 *
 */
export async function poolMetadata(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_metadata']> {
  try {
    const res = await this.instance<components['schemas']['pool_metadata']>(
      `pools/${poolId}/metadata`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains stake pool relays.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1relays/get | API docs for Stake pool relays}
 *
 * @param poolId - Pool ID
 * @returns Stake pool relays
 *
 */
export async function poolsByIdRelays(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_relays']> {
  try {
    const res = await this.instance<components['schemas']['pool_relays']>(
      `pools/${poolId}/relays`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains current stake pool delegators.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~delegators/get | API docs for Stake pool delegators}
 *
 * @param poolId - Pool ID
 * @returns Current stake pool delegators
 *
 */
export async function poolsByIdDelegators(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_delegators']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['pool_delegators']>(
      `pools/${poolId}/delegators`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains list of stake pool blocks.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1blocks/get | API docs for Stake pool blocks}
 *
 * @param poolId - Pool ID
 * @param pagination - Optional, Pagination options
 * @returns List of stake pool blocks
 *
 */
export async function poolsByIdBlocks(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_blocks']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['pool_blocks']>(
      `pools/${poolId}/blocks`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains list of certificate updates to the stake pool.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1updates/get | API docs for Stake pool updates}
 *
 * @param poolId - Pool ID
 * @param pagination - Optional, Pagination options
 * @returns List of certificate updates to the stake pool
 *
 */
export async function poolsByIdUpdates(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_updates']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['pool_updates']>(
      `pools/${poolId}/updates`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains list of registered stake pools with additional information.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1extended/get | API docs for List of stake pools with additional information}
 *
 * @returns List of registered stake pools with additional information
 *
 */
export async function poolsExtended(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_list_extended']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<
      components['schemas']['pool_list_extended']
    >(`pools/extended`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    });
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains list of registered stake pools with additional information.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1extended/get | API docs for List of stake pools with additional information}
 * @remarks
 * Variant of `poolsExtended` method for fetching all pages with built-in requests batching
 *
 * @param allMethodOptions - Optional, Options for request batching
 * @returns List of registered stake pools with additional information
 *
 */
export async function poolsExtendedAll(
  this: BlockFrostAPI,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['pool_list_extended']> {
  return paginateMethod(
    pagination => this.poolsExtended(pagination),
    allMethodOptions,
  );
}
