import { DEFAULT_PAGINATION_PAGE_ITEMS_COUNT } from '../../../config';
import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { components } from '../../../types/OpenApi';
import {
  getPaginationOptions,
  handleError,
  getAllMethodOptions,
} from '../../../utils';

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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_reward_content'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsRewards(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );

    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_history_content'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsHistory(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_withdrawal_content'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsWithdrawals(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_mir_content'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsMirs(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const options = getAllMethodOptions(allMethodOptions);
  const res: components['schemas']['account_delegation_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsDelegations(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_registration_content'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsRegistrations(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_addresses_content'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsAddresses(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
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
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_addresses_assets'] = [];
  const options = getAllMethodOptions(allMethodOptions);

  const getPromiseBundle = () => {
    const promises = [...Array(options.batchSize).keys()].map(i =>
      this.accountsAddressesAssets(stakeAddress, {
        page: page + i,
        count,
        order: options.order,
      }),
    );
    page += options.batchSize;
    return promises;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const promiseBundle = getPromiseBundle();
    const pages = await Promise.all(promiseBundle);
    for (const page of pages) {
      res.push(...page);
      if (page.length < DEFAULT_PAGINATION_PAGE_ITEMS_COUNT) {
        return res;
      }
    }
  }
}
