import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';
import { components } from '@blockfrost/openapi';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains list of assets.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets/get | API docs for Assets}
 * @remarks
 * If an asset is completely burned, it will stay on the list with quantity 0 (order of assets is immutable).
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
 * @returns List of assets
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
 * Obtains information about a specific asset.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D/get | API docs for Asset}
 *
 * @param asset - Concatenation of the policy ID and hex-encoded asset name
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
 * Obtains history of a specific asset.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1history/get | API docs for Asset history}
 *
 * @param asset - Concatenation of the policy ID and hex-encoded asset name
 * @param [pagination] - Pagination options
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
 * Obtains whole history of a specific asset.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1history/get | API docs for Asset history}
 * @remarks
 * Variant of `assetsHistory` method for fetching all pages with built-in requests batching
 *
 * @param asset - Concatenation of the policy ID and hex-encoded asset name
 * @param [allMethodOptions] - Options for request batching
 * @returns Whole history of a specific asset.
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
 * Lists of transactions of a specific asset.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1transactions/get | API docs for Asset transactions}
 *
 * @param asset - Concatenation of the policy ID and hex-encoded asset name
 * @param [pagination] - Pagination options
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
 * Obtains list of a addresses containing a specific asset.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1addresses/get | API docs for Asset addresses}
 *
 * @param asset - Concatenation of the policy ID and hex-encoded asset name
 * @param [pagination] - Pagination options
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
 * Obtains list of assets minted under a specific policy.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1policy~1%7Bpolicy_id%7D/get | API docs for Assets of a specific policy}
 *
 * @param policyId - Specific policy ID
 * @param [pagination] - Pagination options
 * @returns List of assets minted under a specific policy.
 *
 */
export async function assetsPolicyById(
  this: BlockFrostAPI,
  policyId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['asset_policy']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['asset_policy']>(
      `assets/policy/${policyId}`,
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
 * Obtains list of all assets minted under a specific policy.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1policy~1%7Bpolicy_id%7D/get | API docs for Assets of a specific policy}
 * @remarks
 * Variant of `assetsPolicyById` method for fetching all pages with built-in requests batching
 *
 * @param policyId - Specific policy ID
 * @param [pagination] - Pagination options
 * @param [allMethodOptions] - Options for request batching
 * @returns List of asset minted under a specific policy.
 *
 */
export async function assetsPolicyByIdAll(
  this: BlockFrostAPI,
  policyId: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['asset_policy']> {
  return paginateMethod(
    pagination => this.assetsPolicyById(policyId, pagination),
    allMethodOptions,
  );
}
