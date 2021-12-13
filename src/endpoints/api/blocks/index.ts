import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';
import {
  AllMethodOptions,
  HashOrNumber,
  PaginationOptions,
} from '../../../types';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';

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

export async function blocksLatestTxsAll(
  this: BlockFrostAPI,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['block_content_txs']> {
  return paginateMethod(
    pagination => this.blocksLatestTxs(pagination),
    allMethodOptions,
  );
}

export async function blocksNext(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  pagination?: PaginationOptions,
): Promise<components['schemas']['block_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content_array']>(
      `blocks/${hashOrNumber}/next`,
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

export async function blocksPrevious(
  this: BlockFrostAPI,
  hashOrNumber: HashOrNumber,
  pagination?: PaginationOptions,
): Promise<components['schemas']['block_content_array']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['block_content_array']>(
      `blocks/${hashOrNumber}/previous`,
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
