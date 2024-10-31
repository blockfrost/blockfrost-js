import { getPaginationOptions, paginateMethod } from '../../../../utils';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../../index';
import { AllMethodOptions, PaginationOptions } from '../../../../types';
import { handleError } from '../../../../utils/errors';

/**
 * Obtains list of proposals.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals | API docs for Proposals}
 *
 * @param pagination - Optional, Pagination options
 * @returns List of proposals
 *
 */
export async function proposals(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['proposals']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['proposals']>(
      `governance/proposals`,
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
 * Obtains a specific Proposal
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D | API docs for Specific Proposal}
 *
 * @param txHash - Transaction Hash
 * @param cert_index - Index of the certificate within the proposal transaction.
 * @returns Proposal information
 *
 */
export async function proposal(
  this: BlockFrostAPI,
  txHash: string,
  certIndex: number,
): Promise<components['schemas']['proposal']> {
  try {
    const res = await this.instance<components['schemas']['proposal']>(
      `governance/proposals/${txHash}/${certIndex}`,
    );
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
export async function proposalParameters(
  this: BlockFrostAPI,
  txHash: string,
  certIndex: number,
): Promise<components['schemas']['proposal_parameters']> {
  try {
    const res = await this.instance<
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
export async function proposalWithdrawals(
  this: BlockFrostAPI,
  txHash: string,
  certIndex: number,
  pagination?: PaginationOptions,
): Promise<components['schemas']['proposal_withdrawals']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<
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
export async function proposalWithdrawalsAll(
  this: BlockFrostAPI,
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
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/votes | API docs for Proposal votes​}
 *
 * @param txHash - Transaction Hash
 * @param cert_index - Index of the certificate within the proposal transaction.
 * @returns History of Proposal votes.
 *
 */
export async function proposalVotes(
  this: BlockFrostAPI,
  txHash: string,
  certIndex: number,
  pagination?: PaginationOptions,
): Promise<components['schemas']['proposal_votes']> {
  const paginationOptions = getPaginationOptions(pagination);

  try {
    const res = await this.instance<components['schemas']['proposal_votes']>(
      `governance/proposals/${txHash}/${certIndex}/votes`,
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
 * Obtains History of Proposal votes.
 * @see {@link https://docs.blockfrost.io/#tag/cardano--governance/GET/governance/proposals/%tx_hash%7D/%cert_index%7D/votes | API docs for Proposal votes​}
 * @remarks
 * Variant of `proposalVotes` method for fetching all pages with built-in requests batching
 *
 * @param txHash - Transaction Hash
 * @param cert_index - Index of the certificate within the proposal transaction.
 * @param allMethodOptions - Optional, Options for request batching
 * @returns History of DRep votes
 *
 */
export async function proposalVotesAll(
  this: BlockFrostAPI,
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
export async function proposalMetadata(
  this: BlockFrostAPI,
  txHash: string,
  certIndex: number,
): Promise<components['schemas']['proposal_metadata']> {
  try {
    const res = await this.instance<components['schemas']['proposal_metadata']>(
      `governance/proposals/${txHash}/${certIndex}/metadata`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}
