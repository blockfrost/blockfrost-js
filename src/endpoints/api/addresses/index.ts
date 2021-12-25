import {
  getAdditionalParams,
  getPaginationOptions,
  paginateMethod,
} from '../../../utils';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';
import { handleError } from '../../../utils/errors';
import {
  PaginationOptions,
  AdditionalEndpointOptions,
  AllMethodOptions,
} from '../../../types';

/**
 * addresses - Information about a specific address.
 *
 * @param address
 * @returns information about a specific address.
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
 * addressesTotal - Detailed information about account associated addresses
 *
 * @param address
 * @returns information about a specific address.
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
 * addressesExtended - Extended information of a specific address
 *
 * @param address
 * @returns Extended information about a specific address.
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
 * addressesTransactions - Obtain information about a specific address.
 *
 * @param address
 * @returns information about a specific address.
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
 * addresses - Obtain information about a specific address.
 *
 * @param address
 * @returns information about a specific address.
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
 * addresses - Obtain information about a specific address.
 *
 * @param address
 * @returns information about a specific address.
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
 * addresses - Obtain information about a specific address.
 *
 * @param address
 * @returns information about a specific address.
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
