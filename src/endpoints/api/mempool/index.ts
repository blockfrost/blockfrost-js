import { getPaginationOptions, paginateMethod } from '../../../utils';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { handleError } from '../../../utils/errors';

/**
 * Obtains transactions that are currently stored in Blockfrost mempool, waiting to be included in a newly minted block.
 * @remarks
 * Returns only transactions submitted via Blockfrost.io.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool/get | API docs for Mempool}
 *
 * @param pagination - Optional, Pagination options
 * @returns List of transactions in Blockfrost Mempool
 *
 */
export async function mempool(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['mempool_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['mempool_content']>(
      `mempool`,
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
 * Obtains all transactions that are currently stored in Blockfrost mempool, waiting to be included in a newly minted block.
 * @remarks
 * Returns only transactions submitted via Blockfrost.io.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool/get | API docs for Mempool}
 * @remarks
 * Variant of `mempool` method for fetching all pages with built-in requests batching
 *
 * @param allMethodOptions - Optional, Options for request batching
 * @returns List of transactions in Blockfrost Mempool
 *
 */
export async function mempoolAll(
  this: BlockFrostAPI,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['mempool_content']> {
  return paginateMethod(
    pagination => this.mempool(pagination),
    allMethodOptions,
  );
}

/**
 * Obtains mempool transaction
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool~1%7Bhash%7D/get | API docs for Mempool transaction}
 *
 * @param hash - Hash of the requested transaction
 * @returns Specific mempool transaction
 *
 */
export async function mempoolTx(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['mempool_tx_content']> {
  try {
    const res = await this.instance<
      components['schemas']['mempool_tx_content']
    >(`mempool/${hash}`);
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains list of mempool transactions where at least one of the transaction inputs or outputs belongs to the address (paginated).
 * @remarks Shows only transactions submitted via Blockfrost.io.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool~1addresses~1%7Baddress%7D/get | API docs for Mempool by address}
 *
 * @param address - bech32 address
 * @param pagination - Optional, Pagination options
 * @returns List of mempool transactions affecting the address
 *
 */
export async function mempoolByAddress(
  this: BlockFrostAPI,
  address: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['mempool_addresses_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['mempool_content']>(
      `mempool/addresses/${address}`,
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
 * Obtains list of all mempool transactions where at least one of the transaction inputs or outputs belongs to the address.
 * @remarks Shows only transactions submitted via Blockfrost.io.
 * @remarks
 * Variant of `mempoolByAddress` method for fetching all pages with built-in requests batching
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool~1addresses~1%7Baddress%7D/get | API docs for Mempool by address}
 *
 * @param address - bech32 address
 * @param allMethodOptions - Optional, Options for request batching
 * @returns List of mempool transactions affecting the address
 *
 */
export async function mempoolByAddressAll(
  this: BlockFrostAPI,
  address: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['mempool_addresses_content']> {
  return paginateMethod(
    pagination => this.mempoolByAddress(address, pagination),
    allMethodOptions,
  );
}
