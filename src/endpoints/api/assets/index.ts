import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';
import { components } from '../../../types/OpenApi';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

/**
 * assets - List of assets.
 *
 * @returns List of assets.
 *
 */
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

/**
 * assetsById - Information about a specific asset.
 *
 * @param asset - Concatenation of the policy_id and hex-encoded asset_name
 * @returns Information about a specific asset.
 *
 */
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

/**
 * assetsHistory - History of a specific asset.
 *
 * @param asset - Concatenation of the policy_id and hex-encoded asset_name
 * @returns History of a specific asset.
 *
 */
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

/**
 * assetsHistoryAll - Whole history of a specific asset.
 *
 * @param asset - Concatenation of the policy_id and hex-encoded asset_name
 * @returns History of a specific asset.
 *
 */
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

/**
 * assetsTransactions - List of a specific asset transactions.
 *
 * @param asset - Concatenation of the policy_id and hex-encoded asset_name
 * @returns List of a specific asset transactions.
 *
 */
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

/**
 * assetsAddresses - List of a addresses containing a specific asset.
 *
 * @param asset - Concatenation of the policy_id and hex-encoded asset_name
 * @returns List of a addresses containing a specific asset.
 *
 */
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

/**
 * assetsPolicyById - List of asset minted under a specific policy.
 *
 * @param policyId - Specific policy_id
 * @returns List of asset minted under a specific policy.
 *
 */
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

/**
 * assetsPolicyByIdAll - List of all assets minted under a specific policy.
 *
 * @param policyId - Specific policy_id
 * @returns List of asset minted under a specific policy.
 *
 */
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
