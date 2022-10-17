import { getPaginationOptions, paginateMethod } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { handleError } from '../../../utils/errors';

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

export async function mempoolAll(
  this: BlockFrostAPI,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['mempool_content']> {
  return paginateMethod(
    pagination => this.mempool(pagination),
    allMethodOptions,
  );
}

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
