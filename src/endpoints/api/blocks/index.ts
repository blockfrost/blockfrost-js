import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';
import {
  AllMethodOptions,
  HashOrNumber,
  PaginationOptions,
} from '../../../types';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains a specific block.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest/get| API docs for Latest block}
 *
 * @param hashOrNumber - Hash or number of the requested block
 * @returns Specific block
 *
 */
export async function blocks(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
): Promise<components['schemas']['block_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content']>(
      `blocks/${hashOrNumber}`,
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
 * Obtains the specific block available to the backends, also known as the tip of the blockchain.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest/get| API docs for Latest block}
 *
 * @returns latest block
 *
 */
export async function blocksLatest(
  this: BlockFrostAPI,
): Promise<components['schemas']['block_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content']>(`blocks/latest`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains transactions within the latest block.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest~1txs/get| API docs for Latest block transactions}
 *
 * @param [pagination] - Pagination options
 * @returns transactions within the latest block
 *
 */
export async function blocksLatestTxs(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['block_content_txs']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content_txs']>(
      `blocks/latest/txs`,
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
        return reject(handleError(err));
      });
  });
}

/**
 * Obtains all transactions within the latest block.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest~1txs/get| API docs for Latest block transactions}
 * @remarks
 * Variant of `blocksLatestTxs` method for fetching all pages with built-in requests batching
 *
 * @param [allMethodOptions] - Options for request batching
 * @returns transactions within the latest block
 *
 */
export async function blocksLatestTxsAll(
  this: BlockFrostAPI,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['block_content_txs']> {
  return paginateMethod(
    pagination => this.blocksLatestTxs(pagination),
    allMethodOptions,
  );
}

/**
 * Obtains list of blocks following a specific block.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1next/get| API docs for Listing of next blocks}
 *
 * @param hashOrNumber - Hash or number of the requested block
 * @param [pagination] - Pagination options
 * @returns List of blocks following a specific block
 *
 */
export async function blocksNext(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  pagination?: Omit<PaginationOptions, 'order'>,
): Promise<components['schemas']['block_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content_array']>(
      `blocks/${hashOrNumber}/next`,
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
 * Obtains list of blocks preceding a specific block.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~previous/get| API docs for Listing of previous blocks}
 *
 * @param hashOrNumber - Hash or number of the requested block
 * @param [pagination] - Pagination options
 * @returns List of blocks preceding a specific block
 *
 */
export async function blocksPrevious(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  pagination?: Omit<PaginationOptions, 'order'>,
): Promise<components['schemas']['block_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content_array']>(
      `blocks/${hashOrNumber}/previous`,
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
 * Obtains transactions within the specific block.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1txs/get| API docs for Block transactions}
 *
 * @param hashOrNumber - Hash or number of the requested block
 * @param [pagination] - Pagination options
 * @returns Transactions within the specific block
 *
 */
export async function blocksTxs(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  pagination?: PaginationOptions,
): Promise<components['schemas']['block_content_txs']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content_txs']>(
      `blocks/${hashOrNumber}/txs`,
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
 * Obtains all transactions within the specific block.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1txs/get| API docs for Block transactions}
 * @remarks
 * Variant of `blocksTxs` method for fetching all pages with built-in requests batching
 *
 * @param hashOrNumber - Hash or number of the requested block
 * @param [allMethodOptions] - Options for request batching
 * @returns All transactions within the specific block
 *
 */
export async function blocksTxsAll(
  this: BlockFrostAPI,
  hashOrNumber: string | number,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['block_content_txs']> {
  return paginateMethod(
    pagination => this.blocksTxs(hashOrNumber, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains list of addresses affected in the specified block with additional information.
 * @remarks
 * Sorted by the bech32 address, in ascending order.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1addresses/get| API docs for Addresses affected in a specific block}
 *
 * @param hashOrNumber - Hash or number of the requested block
 * @param [pagination] - Pagination options
 * @returns List of addresses affected in the specified block
 *
 */
export async function blocksAddresses(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  pagination?: Omit<PaginationOptions, 'order'>,
): Promise<components['schemas']['block_content_addresses']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content_addresses']>(
      `blocks/${hashOrNumber}/addresses`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          // order: paginationOptions.order, // no ordering on /blocks/{hash}/addresses
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
 * Obtains list of addresses affected in the specified block with additional information.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1addresses/get| API docs for Addresses affected in a specific block}
 * @remarks
 * Sorted by the bech32 address, in ascending order.
 * @remarks
 * Variant of `blocksAddresses` method for fetching all pages with built-in requests batching
 *
 * @param hashOrNumber - Hash or number of the requested block
 * @param [allMethodOptions] - Options for request batching
 * @returns List of addresses affected in the specified block
 *
 */
export async function blocksAddressesAll(
  this: BlockFrostAPI,
  hashOrNumber: string | number,
  allMethodOptions?: Omit<AllMethodOptions, 'order'>,
): Promise<components['schemas']['block_content_addresses']> {
  return paginateMethod(
    pagination => this.blocksAddresses(hashOrNumber, pagination),
    allMethodOptions,
  );
}
