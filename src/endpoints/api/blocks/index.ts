import {
  handleError,
  getPaginationOptions,
  getAllMethodOptions,
} from '../../../utils';
import { DEFAULT_PAGINATION_PAGE_ITEMS_COUNT } from '../../../config';
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
  let page = 1;
  const res: components['schemas']['block_content_txs'] = [];
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.blocksLatestTxs({
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const res: components['schemas']['block_content_txs'] = [];
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.blocksTxs(hashOrNumber, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
}
