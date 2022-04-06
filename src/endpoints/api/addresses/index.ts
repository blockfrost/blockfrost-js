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

export async function addressesUtxosAsset(
  this: BlockFrostAPI,
  address: string,
  asset: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['address_utxo_content']> {
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
