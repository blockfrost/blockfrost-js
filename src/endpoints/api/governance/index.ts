import { getPaginationOptions, paginateMethod } from '../../../utils';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../types';
import { handleError } from '../../../utils/errors';

export class GovernanceAPI {
  blockfrostAPI: BlockFrostAPI;

  constructor(blockfrostAPI: BlockFrostAPI) {
    this.blockfrostAPI = blockfrostAPI;
  }

  /**
   * Obtains list of Delegate Representatives (DReps).
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/dreps | API docs for Delegate Representatives (DReps)}
   *
   * @param pagination - Optional, Pagination options
   * @returns List of registered stake pools.
   *
   */
  async dreps(
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['dreps']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['dreps']
      >(`governance/dreps`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
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
  async drepsById(drepId: string): Promise<components['schemas']['drep']> {
    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['drep']
      >(`governance/dreps/${drepId}`);
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
  async drepsByIdMetadata(
    drepId: string,
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['drep_metadata']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['drep_metadata']
      >(`governance/dreps/${drepId}/metadata`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
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
  async drepsByIdDelegators(
    drepId: string,
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['drep_delegators']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['drep_delegators']
      >(`governance/dreps/${drepId}/delegators`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
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
  async drepsByIdDelegatorsAll(
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
  async drepsByIdUpdates(
    drepId: string,
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['drep_updates']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['drep_updates']
      >(`governance/dreps/${drepId}/updates`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
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
  async drepsByIdUpdatesAll(
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
  async drepsByIdVotes(
    drepId: string,
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['drep_votes']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['drep_votes']
      >(`governance/dreps/${drepId}/votes`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
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
  async drepsByIdVotesAll(
    drepId: string,
    allMethodOptions?: AllMethodOptions,
  ): Promise<components['schemas']['drep_votes']> {
    return paginateMethod(
      pagination => this.drepsByIdVotes(drepId, pagination),
      allMethodOptions,
    );
  }
  /**
   * Obtains list of proposals.
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals | API docs for Proposals}
   *
   * @param pagination - Optional, Pagination options
   * @returns List of proposals
   *
   */
  async proposals(
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['proposals']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['proposals']
      >(`governance/proposals`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
      return res.body;
    } catch (error) {
      throw handleError(error);
    }
  }

  /**
   * Obtains a specific Proposal
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D | API docs for Specific Proposal}
   *
   * @param txHash - Transaction Hash
   * @param cert_index - Index of the certificate within the proposal transaction.
   * @returns Proposal information
   *
   */
  async proposal(
    txHash: string,
    certIndex: number,
  ): Promise<components['schemas']['proposal']> {
    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['proposal']
      >(`governance/proposals/${txHash}/${certIndex}`);
      return res.body;
    } catch (error) {
      throw handleError(error);
    }
  }

  /**
   * Obtains a parameters of specific proposal
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/parameters | API docs for Specific Proposal parameters}
   *
   * @param txHash - Transaction Hash
   * @param cert_index - Index of the certificate within the proposal transaction.
   * @returns Parameters proposal details.
   *
   */
  async proposalParameters(
    txHash: string,
    certIndex: number,
  ): Promise<components['schemas']['proposal_parameters']> {
    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['proposal_parameters']
      >(`governance/proposals/${txHash}/${certIndex}/parameters`);
      return res.body;
    } catch (error) {
      throw handleError(error);
    }
  }

  /**
   * Obtains Specific withdrawals proposal
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/withdrawals | API docs for Specific withdrawals proposal}
   *
   * @param txHash - Transaction Hash
   * @param cert_index - Index of the certificate within the proposal transaction.
   * @returns Parameters withdrawals details.
   *
   */
  async proposalWithdrawals(
    txHash: string,
    certIndex: number,
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['proposal_withdrawals']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['proposal_withdrawals']
      >(`governance/proposals/${txHash}/${certIndex}/withdrawals`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
      return res.body;
    } catch (error) {
      throw handleError(error);
    }
  }

  /**
   * Obtains Specific withdrawals proposal
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/withdrawals | API docs for Specific withdrawals proposal}
   * @remarks
   * Variant of `proposalWithdrawals` method for fetching all pages with built-in requests batching
   *
   * @param txHash - Transaction Hash
   * @param cert_index - Index of the certificate within the proposal transaction.
   * @param allMethodOptions - Optional, Options for request batching
   * @returns Parameters withdrawals details.
   *
   */
  async proposalWithdrawalsAll(
    txHash: string,
    certIndex: number,
    allMethodOptions?: AllMethodOptions,
  ): Promise<components['schemas']['proposal_withdrawals']> {
    return paginateMethod(
      pagination => this.proposalWithdrawals(txHash, certIndex, pagination),
      allMethodOptions,
    );
  }

  /**
   * Obtains History of Proposal votes.
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/votes | API docs for Proposal votes}
   *
   * @param txHash - Transaction Hash
   * @param cert_index - Index of the certificate within the proposal transaction.
   * @returns History of Proposal votes.
   *
   */
  async proposalVotes(
    txHash: string,
    certIndex: number,
    pagination?: PaginationOptions,
  ): Promise<components['schemas']['proposal_votes']> {
    const paginationOptions = getPaginationOptions(pagination);

    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['proposal_votes']
      >(`governance/proposals/${txHash}/${certIndex}/votes`, {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      });
      return res.body;
    } catch (error) {
      throw handleError(error);
    }
  }

  /**
   * Obtains History of Proposal votes.
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/votes | API docs for Proposal votes}
   * @remarks
   * Variant of `proposalVotes` method for fetching all pages with built-in requests batching
   *
   * @param txHash - Transaction Hash
   * @param cert_index - Index of the certificate within the proposal transaction.
   * @param allMethodOptions - Optional, Options for request batching
   * @returns History of DRep votes
   *
   */
  async proposalVotesAll(
    txHash: string,
    certIndex: number,
    allMethodOptions?: AllMethodOptions,
  ): Promise<components['schemas']['proposal_votes']> {
    return paginateMethod(
      pagination => this.proposalVotes(txHash, certIndex, pagination),
      allMethodOptions,
    );
  }

  /**
   * Obtains Proposal metadata information.
   * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/metadata | API docs for Proposal metadata}
   *
   * @param txHash - Transaction Hash
   * @param cert_index - Index of the certificate within the proposal transaction.
   * @returns Proposal metadata information
   *
   */
  async proposalMetadata(
    txHash: string,
    certIndex: number,
  ): Promise<components['schemas']['proposal_metadata']> {
    try {
      const res = await this.blockfrostAPI.instance<
        components['schemas']['proposal_metadata']
      >(`governance/proposals/${txHash}/${certIndex}/metadata`);
      return res.body;
    } catch (error) {
      throw handleError(error);
    }
  }
}
