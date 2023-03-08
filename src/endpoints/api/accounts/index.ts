import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { getPaginationOptions, paginateMethod } from '../../../utils';
import { handleError } from '../../../utils/errors';

/**
 * Obtains information about a specific stake account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D/get | API docs for Specific account address}
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
 * Obtains information about the reward history of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1rewards/get | API docs for Account reward history}
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about the whole reward history of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1rewards/get | API docs for Account reward history}
 * @remarks
 * Variant of `accountsRewards` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
 * @returns Information about the reward history of a specific account.
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
 * Obtains information about the history of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1history/get | API docs for Account history}
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about the whole history of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1history/get | API docs for Account history}
 * @remarks
 * Variant of `accountsHistory` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
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
 * Obtains information about the withdrawals of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1withdrawals/get | API docs for Account withdrawal history}
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about all withdrawals of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1withdrawals/get | API docs for Account withdrawal history}
 * @remarks
 * Variant of `accountsWithdrawals` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
 * @returns Information about all withdrawals of a specific account.
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
 * Obtains information about the MIRs of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1mirs/get | API docs for Account MIR history}
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about the MIRs of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1mirs/get | API docs for Account MIR history}
 * @remarks
 * Variant of `accountsMirs` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
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
 * Obtains information about the delegation of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1delegations/get | API docs for Account delegation history}
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about all delegations of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1delegations/get | API docs for Account delegation history}
 * @remarks
 * Variant of `accountsDelegations` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
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
 * Obtains information about the registrations and deregistrations of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1registrations/get | API docs for Account registration history}
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about the registrations and deregistrations of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1registrations/get | API docs for Account registration history}
 * @remarks
 * Variant of `accountsRegistrations` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
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
 * Obtains information about the addresses of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses/get | API docs for Account associated addresses}
 * @remarks
 * Be careful, as an account could be part of a mangled address and does not necessarily mean
 * the addresses are owned by user as the account.
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about all addresses of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses/get | API docs for Account associated addresses}
 * @remarks
 * Be careful, as an account could be part of a mangled address and does not necessarily mean
 * the addresses are owned by user as the account.
 * @remarks
 * Variant of `accountsAddresses` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
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
 * Obtains information about assets associated with addresses of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses~1assets/get | API docs for Assets associated with the account addresses}
 *
 * @param stakeAddress - Bech32 stake address
 * @param [pagination] - Pagination options
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
 * Obtains information about all assets associated with addresses of a specific account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses~1assets/get | API docs for Assets associated with the account addresses}
 * @remarks
 * Variant of `accountsAddressesAssets` method for fetching all pages with built-in requests batching
 *
 * @param stakeAddress - Bech32 stake address
 * @param [allMethodOptions] - Options for request batching
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
 * Obtains summed details about all addresses associated with a given account.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses~1total/get | API docs for Detailed information about account associated addresses}
 *
 * @param stakeAddress - Bech32 stake address
 * @returns Summed details of the addresses associated with a given account
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
