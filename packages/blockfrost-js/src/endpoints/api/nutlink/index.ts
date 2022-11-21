import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';
import { components } from '@blockfrost/openapi';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

export async function nutlinkAddress(
  this: BlockFrostAPI,
  address: string,
): Promise<components['schemas']['nutlink_address']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['nutlink_address']>(
      `nutlink/${address}`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function nutlinkAddressTickers(
  this: BlockFrostAPI,
  address: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['nutlink_address_tickers']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['nutlink_address_tickers']>(
      `nutlink/${address}/tickers`,
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

export async function nutlinkAddressTickersAll(
  this: BlockFrostAPI,
  address: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['nutlink_address_tickers']> {
  return paginateMethod(
    pagination => this.nutlinkAddressTickers(address, pagination),
    allMethodOptions,
  );
}

export async function nutlinkAddressTicker(
  this: BlockFrostAPI,
  address: string,
  ticker: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['nutlink_address_ticker']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['nutlink_address_ticker']>(
      `nutlink/${address}/tickers/${ticker}`,
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

export async function nutlinkAddressTickerAll(
  this: BlockFrostAPI,
  address: string,
  ticker: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['nutlink_address_ticker']> {
  return paginateMethod(
    pagination => this.nutlinkAddressTicker(address, ticker, pagination),
    allMethodOptions,
  );
}

export async function nutlinkTickers(
  this: BlockFrostAPI,
  ticker: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['nutlink_tickers_ticker']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['nutlink_tickers_ticker']>(
      `nutlink/tickers/${ticker}`,
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

export async function nutlinkTickersAll(
  this: BlockFrostAPI,
  ticker: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['nutlink_tickers_ticker']> {
  return paginateMethod(
    pagination => this.nutlinkTickers(ticker, pagination),
    allMethodOptions,
  );
}
