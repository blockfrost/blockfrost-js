import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';
import { components } from '../../../types/OpenApi';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

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
      .catch(error => reject(handleError(error)));
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
      .catch(error => reject(handleError(error)));
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
      .catch(error => reject(handleError(error)));
  });
}

export async function assetsHistoryAll(
  this: BlockFrostAPI,
  asset: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['asset_history']> {
  return paginateMethod(
    pagination => this.assetsHistory(asset, pagination),
    allMethodOptions,
  );
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
      .catch(error => reject(handleError(error)));
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
      .catch(error => reject(handleError(error)));
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
      .catch(error => reject(handleError(error)));
  });
}

export async function assetsPolicyByIdAll(
  this: BlockFrostAPI,
  policy: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['asset_policy']> {
  return paginateMethod(
    pagination => this.assetsPolicyById(policy, pagination),
    allMethodOptions,
  );
}
