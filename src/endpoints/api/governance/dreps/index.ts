import { getPaginationOptions, paginateMethod } from '../../../../utils';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../../types';
import { handleError } from '../../../../utils/errors';

/**
 * Obtains list of Delegate Representatives (DReps).
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps | API docs for Delegate Representatives (DReps)}
 *
 * @param pagination - Optional, Pagination options
 * @returns List of registered stake pools.
 *
 */
export async function dreps(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['dreps']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['dreps']>(
      `governance/dreps`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains information of a specific DRep.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D | API docs for Stake Pool}
 *
 * @param drepId - DRep ID
 * @returns Information of a specific DRep
 *
 */
export async function drepsById(
  this: BlockFrostAPI,
  drepId: string,
): Promise<components['schemas']['drep']> {
  try {
    const res = await this.instance<components['schemas']['drep']>(
      `governance/dreps/${drepId}`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains DRep metadata.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D/metadata | API docs for DRep Metadata}
 *
 * @param drepId - DRep ID
 * @returns DRep Metadata
 *
 */
export async function drepsByIdMetadata(
  this: BlockFrostAPI,
  drepId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['drep_metadata']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['drep_metadata']>(
      `governance/dreps/${drepId}/metadata`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains current DRep delegators.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D/delegators | API docs for DRep Delegators}
 *
 * @param drepId - DRep ID
 * @returns Current DRep delegators
 *
 */
export async function drepsByIdDelegators(
  this: BlockFrostAPI,
  drepId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['drep_delegators']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['drep_delegators']>(
      `governance/dreps/${drepId}/delegators`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains current DRep delegators.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D/delegators | API docs for DRep Delegators}
 * @remarks
 * Variant of `drepsByIdDelegators` method for fetching all pages with built-in requests batching
 *
 * @param drepId - DRep ID
 * @param allMethodOptions - Optional, Options for request batching
 * @returns Current DRep delegators
 *
 */
export async function drepsByIdDelegatorsAll(
  this: BlockFrostAPI,
  drepId: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['drep_delegators']> {
  return paginateMethod(
    pagination => this.drepsByIdDelegators(drepId, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains List of certificate updates to the DRep.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D/updates | API docs for DRep Updates}
 *
 * @param drepId - DRep ID
 * @returns List of certificate updates to the DRep
 *
 */
export async function drepsByIdUpdates(
  this: BlockFrostAPI,
  drepId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['drep_updates']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['drep_updates']>(
      `governance/dreps/${drepId}/updates`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains List of certificate updates to the DRep.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D/updates | API docs for History of DRep updates}
 * @remarks
 * Variant of `drepsByIdUpdates` method for fetching all pages with built-in requests batching
 *
 * @param drepId - DRep ID
 * @param allMethodOptions - Optional, Options for request batching
 * @returns List of certificate updates to the DRep
 *
 */
export async function drepsByIdUpdatesAll(
  this: BlockFrostAPI,
  drepId: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['drep_updates']> {
  return paginateMethod(
    pagination => this.drepsByIdUpdates(drepId, pagination),
    allMethodOptions,
  );
}

/**
 * Obtains History of DRep votes.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D/votes | API docs for History of DRep votes}
 *
 * @param drepId - DRep ID
 * @returns History of DRep votes
 *
 */
export async function drepsByIdVotes(
  this: BlockFrostAPI,
  drepId: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['drep_votes']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['drep_votes']>(
      `governance/dreps/${drepId}/votes`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains History of DRep votes.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps/%7Bdrep_id%7D/votes | API docs for History of DRep votes}
 * @remarks
 * Variant of `drepsByIdVotes` method for fetching all pages with built-in requests batching
 *
 * @param drepId - DRep ID
 * @param allMethodOptions - Optional, Options for request batching
 * @returns History of DRep votes
 *
 */
export async function drepsByIdVotesAll(
  this: BlockFrostAPI,
  drepId: string,
  allMethodOptions?: AllMethodOptions,
): Promise<components['schemas']['drep_votes']> {
  return paginateMethod(
    pagination => this.drepsByIdVotes(drepId, pagination),
    allMethodOptions,
  );
}
