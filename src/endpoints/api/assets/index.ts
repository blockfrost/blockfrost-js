import { getPaginationOptions, getAllMethodOptions } from '../../../utils';
import { handleError } from '../../../utils/errors';
import { components } from '../../../types/OpenApi';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';
import { DEFAULT_PAGINATION_PAGE_ITEMS_COUNT } from '../../../config';

export async function assets(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['assets']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['assets']>(`assets`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsById(
  this: BlockFrostAPI,
  asset: string,
): Promise<components['schemas']['asset']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['asset']>(`assets/${asset}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsHistory(
  this: BlockFrostAPI,
  asset: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['asset_history']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['asset_history']>(
      `assets/${asset}/history`,
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
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsHistoryAll(
  this: BlockFrostAPI,
  asset: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['asset_history']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['asset_history'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.assetsHistory(asset, {
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

export async function assetsTransactions(
  this: BlockFrostAPI,
  asset: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['asset_transactions']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['asset_transactions']>(
      `assets/${asset}/transactions`,
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
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsAddresses(
  this: BlockFrostAPI,
  asset: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['asset_addresses']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['asset_addresses']>(
      `assets/${asset}/addresses`,
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
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsPolicyById(
  this: BlockFrostAPI,
  policy: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['asset_policy']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['asset_policy']>(
      `assets/policy/${policy}`,
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
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsPolicyByIdAll(
  this: BlockFrostAPI,
  policy: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['asset_policy']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['asset_policy'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.assetsPolicyById(policy, {
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
