import { handleError, getPaginationOptions } from '../../utils';
import { components } from '../../types/OpenApi';
import { PaginationOptions } from '../../types';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function accounts(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/accounts/${stakeAddress}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRewards(
  this: BlockFrostAPI,
  stakeAddress: string,
  pagination: PaginationOptions,
): Promise<components['schemas']['account_reward_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/accounts/${stakeAddress}/rewards`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRewardsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['account_reward_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_reward_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.accountsRewards(stakeAddress, {
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
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
  pagination: PaginationOptions,
): Promise<components['schemas']['account_history_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/accounts/${stakeAddress}/history`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsHistoryAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['account_history_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_history_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.accountsHistory(stakeAddress, {
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
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
  pagination: PaginationOptions,
): Promise<components['schemas']['account_withdrawal_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/accounts/${stakeAddress}/withdrawals`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsWithdrawalsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['account_withdrawal_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_withdrawal_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.accountsWithdrawals(stakeAddress, {
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
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
  pagination: PaginationOptions,
): Promise<components['schemas']['account_mir_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/accounts/${stakeAddress}/mirs`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsMirsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['account_mir_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_mir_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.accountsMirs(stakeAddress, {
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
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
  pagination: PaginationOptions,
): Promise<components['schemas']['account_delegation_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/accounts/${stakeAddress}/delegations`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsDelegationsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['account_delegation_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_delegation_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.accountsDelegations(stakeAddress, {
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
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
  pagination: PaginationOptions,
): Promise<components['schemas']['account_registration_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(
      `${this.apiUrl}/accounts/${stakeAddress}/registrations`,
      {
        params: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRegistrationsAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['account_registration_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_registration_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.accountsRegistrations(stakeAddress, {
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
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
  pagination: PaginationOptions,
): Promise<components['schemas']['account_addresses_content']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/accounts/${stakeAddress}/addresses`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsAddressesAll(
  this: BlockFrostAPI,
  stakeAddress: string,
  order = DEFAULT_ORDER,
  batchSize = 10,
): Promise<components['schemas']['account_addresses_content']> {
  let page = 1;
  const count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT;
  const res: components['schemas']['account_addresses_content'] = [];

  const getPromiseBundle = () => {
    const promises = [...Array(batchSize).keys()].map(i =>
      this.accountsAddresses(stakeAddress, {
        page: page + i,
        count,
        order,
      }),
    );
    page += batchSize;
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
