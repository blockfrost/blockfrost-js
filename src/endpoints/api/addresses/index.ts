import {
  getAdditionalParams,
  getPaginationOptions,
  paginateMethod,
} from '../../../utils';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';
import { handleError } from '../../../utils/errors';
import {
  PaginationOptions,
  AdditionalEndpointOptions,
  AllMethodOptions,
} from '../../../types';

/**
 * Obtains information about a specific address.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses| API docs for Specific address}
 *
 * @param address - Bech32 address
 * @returns Information about a specific stake account.
 *
 */
export async function addresses(
  this: BlockFrostAPI,
  address: string,
): Promise<components['schemas']['address_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['address_content']>(
      `addresses/${address}`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}

/**
 * Obtains aggregated details about transactions for a specific address
 * (received assets, sent assets, number of transactions).
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1total/get | API docs for Address details}
 *
 * @param address - Bech32 address
 * @returns Aggregated details about an address (received assets, sent assets, number of transactions)
 *
 */
export async function addressesTotal(
  this: BlockFrostAPI,
  address: string,
): Promise<components['schemas']['address_content_total']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['address_content_total']>(
      `addresses/${address}/total`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}

/**
 * Obtains extended information about a specific address.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~extended/get | API docs for Extended information of a specific address}
 * @remarks Similar to `addresses` with the addition of `has_nft_onchain_metadata` and `decimals` fields in asset amounts.
 *
 * @param address - Bech32 address
 * @returns Extended information about a specific address
 *
 */
export async function addressesExtended(
  this: BlockFrostAPI,
  address: string,
): Promise<components['schemas']['address_content_extended']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['address_content_extended']>(
      `addresses/${address}/extended`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}

/**
 * Obtains transactions on the address.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1transactions/get | API docs for Address transactions}
 *
 * @param address - Bech32 address
 * @param pagination - Optional, Pagination options
 * @param additionalOptions - Optional, Additional options such as cursor pagination
 * @returns Extended information about a specific address
 *
 */
export async function addressesTransactions(
  this: BlockFrostAPI,
  address: string,
  pagination?: PaginationOptions,
  additionalOptions?: AdditionalEndpointOptions,
): Promise<components['schemas']['address_transactions_content']> {
  const additionalParams = getAdditionalParams(additionalOptions);
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['address_transactions_content']>(
      `addresses/${address}/transactions`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
          from: additionalParams.from,
          to: additionalParams.to,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        if (err && err.response && err.response.statusCode === 404) {
          resolve([]);
        }

        reject(handleError(err));
      });
  });
}

/**
 * Obtains all transactions on the address.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1transactions/get | API docs for Address transactions}
 * @remarks
 * Variant of `addressesTransactions` method for fetching all pages with built-in requests batching
 *
 * @param address - Bech32 address
 * @param allMethodOptions - Optional, Options for request batching
 * @param additionalOptions - Optional, Additional options such as cursor pagination
 * @returns Extended information about a specific address
 *
 */
export async function addressesTransactionsAll(
  this: BlockFrostAPI,
  address: string,
  allMethodOptions?: AllMethodOptions,
  additionalOptions?: AdditionalEndpointOptions,
): Promise<components['schemas']['address_transactions_content']> {
  return paginateMethod(
    (pagination, additionalOptions) =>
      this.addressesTransactions(address, pagination, additionalOptions),
    allMethodOptions,
    additionalOptions,
  );
}

/**
 * Obtains UTXOs of the address
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos/get | API docs for Address UTXOs}
 *
 * @param address - Bech32 address
 * @param pagination - Optional, Pagination options
 * @returns UTXOs of the address
 *
 */
export async function addressesUtxos(
  this: BlockFrostAPI,
  address: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['address_utxo_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['address_utxo_content']>(
      `addresses/${address}/utxos`,
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
 * Obtains all UTXOs of the address
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos/get | API docs for Address UTXOs}
 * @remarks
 * Variant of `addressesUtxos` method for fetching all pages with built-in requests batching
 *
 * @param address - Bech32 address
 * @param allMethodOptions - Optional, Options for request batching
 * @returns UTXOs of the address
 *
 */
export async function addressesUtxosAll(
  this: BlockFrostAPI,
  address: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['address_utxo_content']> {
  return paginateMethod(
    pagination => this.addressesUtxos(address, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains address's UTXOs containing a given asset (paginated)
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos~1%7Basset%7D/get | API docs for Address UTXOs of a given asset}
 *
 * @param address - Bech32 address
 * @param asset - Concatenation of the policy ID and hex-encoded asset name
 * @param pagination - Optional, Pagination options
 * @returns List of the address's utxos containing a given asset
 *
 */
export async function addressesUtxosAsset(
  this: BlockFrostAPI,
  address: string,
  asset: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['address_utxo_content']> {
  // TODO: test is missing since we can't guarantee that list of address's utxos won't change in the future
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['address_utxo_content']>(
      `addresses/${address}/utxos/${asset}`,
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
 * Obtains all address's UTXOs containing a given asset
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos~1%7Basset%7D/get | API docs for Address UTXOs of a given asset}
 * @remarks
 * Variant of `addressesUtxosAsset` method for fetching all pages with built-in requests batching
 *
 * @param address - Bech32 address
 * @param asset - Concatenation of the policy ID and hex-encoded asset name
 * @param allMethodOptions - Optional, Options for request batching
 * @returns List of the address's utxos containing a given asset
 *
 */
export async function addressesUtxosAssetAll(
  this: BlockFrostAPI,
  address: string,
  asset: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['address_utxo_content']> {
  return paginateMethod(
    pagination => this.addressesUtxosAsset(address, asset, pagination),
    allMethodOptions,
  );
}
