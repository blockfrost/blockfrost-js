import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { components } from '../../../types/OpenApi';
import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';

/**
 * accounts - Obtain information about a specific stake account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about a specific stake account.
 *
 */
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

/**
 * accountsRewards - Obtain information about the history of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the history of a specific account.
 *
 */
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

/**
 * accountsRewardsAll - Obtain information about whole history of a specific account
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the history of a specific account.
 *
 */
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

/**
 * accountsHistory - Obtain information about the history of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the history of a specific account.
 *
 */
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

/**
 * accountsHistoryAll - Obtain information about whole history of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the history of a specific account.
 *
 */
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

/**
 * accountsWithdrawals - Obtain information about the withdrawals of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the withdrawals of a specific account.
 *
 */
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

/**
 * accountsWithdrawals - Obtain information about the withdrawals of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the withdrawals of a specific account.
 *
 */
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

/**
 * accountsMirs - Obtain information about the MIRs of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the MIRs of a specific account.
 *
 */
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

/**
 * accountsMirsAll - Obtain information about all MIRs of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the MIRs of a specific account.
 *
 */
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

/**
 * accountsDelegations - Obtain information about the delegation of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the delegation of a specific account.
 *
 */
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

/**
 * accountsDelegationsAll - Obtain information about all delegations of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the delegation of a specific account.
 *
 */
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

/**
 * accountsRegistrations - Obtain information about the registrations and deregistrations of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the registrations and deregistrations of a specific account.
 *
 */
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

/**
 * accountsRegistrationsAll - Obtain information about all registrations and deregistrations of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the registrations and deregistrations of a specific account.
 *
 */
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

/**
 * accountsAddresses - Obtain information about the addresses of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the addresses of a specific account.
 *
 */
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

/**
 * accountsAddressesAll - Obtain information about all addresses of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Information about the addresses of a specific account.
 *
 */
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

/**
 * accountsAddressesAssets - Obtain information about assets associated with addresses of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Assets associated with the account addresses
 *
 */
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

/**
 * accountsAddressesAssetsAll - Obtain information about assets associated with addresses of a specific account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Assets associated with the account addresses
 *
 */
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

/**
 * accountsAddressesTotal - Obtain summed details aboutof all addresses associated with a given account.
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Assets associated with the account addresses
 *
 */
export async function accountsAddressesTotal(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_addresses_total']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['account_addresses_total']>(
      `accounts/${stakeAddress}/addresses/total`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => reject(handleError(err)));
  });
}
