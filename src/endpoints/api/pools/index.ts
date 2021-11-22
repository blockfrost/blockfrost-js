import { getPaginationOptions, paginateMethod } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { handleError } from '../../../utils/errors';

export async function pools(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_list']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_list']>(`pools`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsAll(
  this: BlockFrostAPI,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['pool_list']> {
  return paginateMethod(pagination => this.pools(pagination), allMethodOptions);
}

export async function poolsRetired(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_list_retire']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_list_retire']>(`pools/retired`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsRetiring(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_list_retire']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_list_retire']>(`pools/retiring`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsById(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool']>(`pools/${poolId}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdHistory(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_history']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_history']>(
      `pools/${poolId}/history`,
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolMetadata(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_metadata']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_metadata']>(
      `pools/${poolId}/metadata`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdRelays(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_relays']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_relays']>(
      `pools/${poolId}/relays`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdDelegators(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_delegators']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_delegators']>(
      `pools/${poolId}/delegators`,
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdBlocks(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_blocks']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_blocks']>(
      `pools/${poolId}/blocks`,
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function poolsByIdUpdates(
  this: BlockFrostAPI,
  poolId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['pool_updates']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['pool_updates']>(
      `pools/${poolId}/updates`,
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}
