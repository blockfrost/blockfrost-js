import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { components } from '../../../types/OpenApi';
import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';

export async function accounts(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_content']>(
      `accounts/${stakeAddress}`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRewards(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_reward_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_reward_content']>(
      `accounts/${stakeAddress}/rewards`,
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

export async function accountsRewardsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_reward_content']> {
  return paginateMethod(
    pagination => this.accountsRewards(stakeAddress, pagination),
    allMethodOptions,
  );
}

export async function accountsHistory(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_history_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_history_content']>(
      `accounts/${stakeAddress}/history`,
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

export async function accountsHistoryAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_history_content']> {
  return paginateMethod(
    pagination => this.accountsHistory(stakeAddress, pagination),
    allMethodOptions,
  );
}

export async function accountsWithdrawals(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_withdrawal_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_withdrawal_content']>(
      `accounts/${stakeAddress}/withdrawals`,
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

export async function accountsWithdrawalsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_withdrawal_content']> {
  return paginateMethod(
    pagination => this.accountsWithdrawals(stakeAddress, pagination),
    allMethodOptions,
  );
}

export async function accountsMirs(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_mir_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_mir_content']>(
      `accounts/${stakeAddress}/mirs`,
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

export async function accountsMirsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_mir_content']> {
  return paginateMethod(
    pagination => this.accountsMirs(stakeAddress, pagination),
    allMethodOptions,
  );
}

export async function accountsDelegations(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_delegation_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_delegation_content']>(
      `accounts/${stakeAddress}/delegations`,
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

export async function accountsDelegationsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_delegation_content']> {
  return paginateMethod(
    pagination => this.accountsDelegations(stakeAddress, pagination),
    allMethodOptions,
  );
}

export async function accountsRegistrations(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_registration_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_registration_content']>(
      `accounts/${stakeAddress}/registrations`,
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

export async function accountsRegistrationsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_registration_content']> {
  return paginateMethod(
    pagination => this.accountsRegistrations(stakeAddress, pagination),
    allMethodOptions,
  );
}

export async function accountsAddresses(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_addresses_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_addresses_content']>(
      `accounts/${stakeAddress}/addresses`,
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

export async function accountsAddressesAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_addresses_content']> {
  return paginateMethod(
    pagination => this.accountsAddresses(stakeAddress, pagination),
    allMethodOptions,
  );
}

export async function accountsAddressesAssets(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['account_addresses_assets']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_addresses_assets']>(
      `accounts/${stakeAddress}/addresses/assets`,
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

export async function accountsAddressesAssetsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['account_addresses_assets']> {
  return paginateMethod(
    pagination => this.accountsAddressesAssets(stakeAddress, pagination),
    allMethodOptions,
  );
}
