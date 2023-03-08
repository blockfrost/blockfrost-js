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
 * @param [pagination] - Pagination options
 * @returns List of transactions in Blockfrost Mempool
 *
 */
export async function mempool(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['mempool_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['mempool_content']>(`mempool`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains all transactions that are currently stored in Blockfrost mempool, waiting to be included in a newly minted block.
 * @remarks
 * Returns only transactions submitted via Blockfrost.io.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool/get | API docs for Mempool}
 * @remarks
 * Variant of `mempool` method for fetching all pages with built-in requests batching
 *
 * @param [allMethodOptions] - Options for request batching
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
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['mempool_tx_content']>(
      `mempool/${hash}`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
