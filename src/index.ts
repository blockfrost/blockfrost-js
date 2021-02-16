import { API_URLS } from 'config';
import {
  accounts,
  addresses,
  blocks,
  epochs,
  health,
  ledger,
  metadata,
  metrics,
  pools,
  root,
  txs,
} from 'endpoints';
import { HashOrNumber, Options } from 'types';
import { components } from 'types/OpenApi';
import join from 'url-join';
import { validateOptions } from 'utils';

class BlockFrostAPI {
  apiUrl: string;
  projectId: string;

  constructor(options?: Options) {
    const opts = validateOptions(options);
    const apiBase = opts.isTestnet ? API_URLS.testnet : API_URLS.mainnet;
    this.apiUrl = join(apiBase, `v${opts.version}`);
    this.projectId = opts.projectId;
  }

  /**
   * accounts - Obtain information about a specific stake account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns  Information about a specific stake account.
   *
   */
  accounts = async (
    stakeAddress: string,
  ): Promise<components['schemas']['account_content']> =>
    await accounts.accounts(this.apiUrl, this.projectId, stakeAddress);

  /**
   * accountsDelegations - Account's delegation history
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the delegation of a specific account.
   *
   */
  accountsDelegations = async (
    stakeAddress: string,
  ): Promise<components['schemas']['account_delegation_content']> =>
    await accounts.accountsDelegations(
      this.apiUrl,
      this.projectId,
      stakeAddress,
    );

  /**
   * accountsRegistrations
   *
   * @param stakeAddress
   * @returns xxx
   *
   */
  accountsRegistrations = async (
    stakeAddress: string,
  ): Promise<components['schemas']['account_registration_content']> =>
    await accounts.accountsRegistrations(
      this.apiUrl,
      this.projectId,
      stakeAddress,
    );

  /**
   * accountsRewards
   *
   * @param stakeAddress
   * @returns xxx
   *
   */
  accountsRewards = async (
    stakeAddress: string,
  ): Promise<components['schemas']['account_reward_content']> =>
    await accounts.accountsRewards(this.apiUrl, this.projectId, stakeAddress);

  /**
   * addresses
   *
   * @param address
   * @returns xxx
   *
   */
  addresses = async (
    address: string,
  ): Promise<components['schemas']['address_content']> =>
    await addresses.addresses(this.apiUrl, this.projectId, address);

  /**
   * addressesTotal
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTotal = async (
    address: string,
  ): Promise<components['schemas']['address_content_total']> =>
    await addresses.addressesTotal(this.apiUrl, this.projectId, address);

  /**
   * addressesTxs
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTxs = async (
    address: string,
  ): Promise<components['schemas']['address_txs_content']> =>
    await addresses.addressesTxs(this.apiUrl, this.projectId, address);

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  addressesUtxos = async (
    address: string,
  ): Promise<components['schemas']['address_utxo_content']> =>
    await addresses.addressesUtxos(this.apiUrl, this.projectId, address);

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  blocks = async (
    hashOrNumber: HashOrNumber,
  ): Promise<components['schemas']['block_content']> =>
    await blocks.blocks(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * blocksLatest
   *
   * @returns xxx
   *
   */
  blocksLatest = async (): Promise<components['schemas']['block_content']> =>
    await blocks.blocksLatest(this.apiUrl, this.projectId);

  /**
   * blocksNext
   *
   * @param address
   * @returns xxx
   *
   */
  blocksNext = async (
    hashOrNumber: HashOrNumber,
  ): Promise<components['schemas']['block_content_array']> =>
    await blocks.blocksNext(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * blockPrevious
   *
   * @param address
   * @returns xxx
   *
   */
  blocksPrevious = async (
    hashOrNumber: HashOrNumber,
  ): Promise<components['schemas']['block_content_array']> =>
    await blocks.blocksPrevious(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * addressesUtxos
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  blocksTxs = async (
    hashOrNumber: HashOrNumber,
  ): Promise<components['schemas']['block_content_txs']> =>
    await blocks.blocksTxs(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * epochs
   *
   * @param number
   * @returns xxx
   *
   */
  epochs = async (
    number: number,
  ): Promise<components['schemas']['epoch_content']> =>
    await epochs.epochs(this.apiUrl, this.projectId, number);

  /**
   * epochsBlocks
   *
   * @param number
   * @returns xxx
   *
   */
  epochsBlocks = async (
    number: number,
  ): Promise<components['schemas']['epoch_block_content']> =>
    await epochs.epochsBlocks(this.apiUrl, this.projectId, number);

  /**
   * epochsBlocksByPoolId
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  epochsBlocksByPoolId = async (
    number: number,
    poolId: string,
  ): Promise<components['schemas']['epoch_block_content']> =>
    await epochs.epochsBlocksByPoolId(
      this.apiUrl,
      this.projectId,
      number,
      poolId,
    );

  /**
   * epochsLatest
   *
   * @returns xxx
   *
   */
  epochsLatest = async (): Promise<components['schemas']['epoch_content']> =>
    await epochs.epochsLatest(this.apiUrl, this.projectId);

  /**
   * epochsNext
   *
   * @param number
   * @returns xxx
   *
   */
  epochsNext = async (
    number: number,
  ): Promise<components['schemas']['epoch_content_array']> =>
    await epochs.epochsNext(this.apiUrl, this.projectId, number);

  /**
   * epochsParameters
   *
   * @param number
   * @returns xxx
   *
   */
  epochsParameters = async (
    number: number,
  ): Promise<components['schemas']['epoch_param_content']> =>
    await epochs.epochsParameters(this.apiUrl, this.projectId, number);

  /**
   * epochsPrevious
   *
   * @param number
   * @returns xxx
   *
   */
  epochsPrevious = async (
    number: number,
  ): Promise<components['schemas']['epoch_content_array']> =>
    await epochs.epochsPrevious(this.apiUrl, this.projectId, number);

  /**
   * epochsStakes
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakes = async (
    number: number,
  ): Promise<components['schemas']['epoch_stake_content']> =>
    await epochs.epochsStakes(this.apiUrl, this.projectId, number);

  /**
   * epochsStakesByPoolId
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakesByPoolId = async (
    number: number,
    poolId: string,
  ): Promise<components['schemas']['epoch_stake_pool_content']> =>
    await epochs.epochsStakesByPoolId(
      this.apiUrl,
      this.projectId,
      number,
      poolId,
    );

  /**
   * health
   *
   * @returns xxx
   *
   */
  health = async (): Promise<{ isHealthy: boolean }> =>
    await health.health(this.apiUrl, this.projectId);

  /**
   * healthClock
   *
   * @returns xxx
   *
   */
  healthClock = async (): Promise<{ server_time: number }> =>
    health.healthClock(this.apiUrl, this.projectId);

  /**
   * ledger
   *
   * @returns xxx
   *
   */
  ledger = async (): Promise<components['schemas']['genesis_content']> =>
    await ledger.ledger(this.apiUrl, this.projectId);

  /**
   * metadataTxsLabel
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabel = async (
    label: string,
  ): Promise<components['schemas']['tx_metadata_labels']> =>
    await metadata.metadataTxsLabel(this.apiUrl, this.projectId, label);

  /**
   * metadataTxsLabelCbor
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabelCbor = async (
    label: string,
  ): Promise<components['schemas']['tx_metadata_label_cbor']> =>
    await metadata.metadataTxsLabelCbor(this.apiUrl, this.projectId, label);

  /**
   * metadataTxsLabels
   *
   * @returns xxx
   *
   */
  metadataTxsLabels = async (): Promise<
    components['schemas']['tx_metadata_label_json']
  > => await metadata.metadataTxsLabels(this.apiUrl, this.projectId);

  /**
   * metrics
   *
   * @returns xxx
   *
   */
  metrics = async (): Promise<components['schemas']['metrics']> =>
    await metrics.metrics(this.apiUrl, this.projectId);

  /**
   * metricsEndpoints
   *
   * @returns xxx
   *
   */
  metricsEndpoints = async (): Promise<components['schemas']['metrics']> =>
    await metrics.metricsEndpoints(this.apiUrl, this.projectId);

  /**
   * pools
   *
   * @returns xxx
   *
   */
  pools = async (): Promise<components['schemas']['metrics_endpoints']> =>
    await pools.pools(this.apiUrl, this.projectId);

  /**
   * poolMetadata
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolMetadata = async (
    poolId: string,
  ): Promise<components['schemas']['pool_metadata']> =>
    await pools.poolMetadata(this.apiUrl, this.projectId, poolId);

  /**
   * poolsById
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsById = async (poolId: string): Promise<components['schemas']['pool']> =>
    pools.poolsById(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdBlocks
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdBlocks = async (
    poolId: string,
  ): Promise<components['schemas']['pool_blocks']> =>
    await pools.poolsByIdBlocks(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdDelegators
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdDelegators = async (
    poolId: string,
  ): Promise<components['schemas']['pool_delegators']> =>
    await pools.poolsByIdDelegators(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdHistory
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdHistory = async (
    poolId: string,
  ): Promise<components['schemas']['pool_history']> =>
    await pools.poolsByIdHistory(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdRelays
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdRelays = async (
    poolId: string,
  ): Promise<components['schemas']['pool_relays']> =>
    await pools.poolsByIdRelays(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdUpdates
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdUpdates = async (
    poolId: string,
  ): Promise<components['schemas']['pool_updates']> =>
    await pools.poolsByIdUpdates(this.apiUrl, this.projectId, poolId);

  /**
   * poolsRetired
   *
   * @returns xxx
   *
   */
  poolsRetired = async (): Promise<components['schemas']['pool_list_retire']> =>
    await pools.poolsRetired(this.apiUrl, this.projectId);

  /**
   * poolsRetiring
   *
   * @returns xxx
   *
   */
  poolsRetiring = async (): Promise<
    components['schemas']['pool_list_retire']
  > => await pools.poolsRetiring(this.apiUrl, this.projectId);

  /**
   * info
   *
   * @returns xxx
   *
   */
  info = async (): Promise<{ url: string; version: number }> =>
    await root.version(this.apiUrl, this.projectId);

  /**
   * txs
   *
   * @param hash
   * @returns xxx
   *
   */
  txs = async (hash: string): Promise<components['schemas']['tx_content']> =>
    await txs.txs(this.apiUrl, this.projectId, hash);

  /**
   * txsMetadataCbor
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMetadataCbor = async (
    hash: string,
  ): Promise<components['schemas']['tx_content_metadata_cbor']> =>
    await txs.txsMetadataCbor(this.apiUrl, this.projectId, hash);

  /**
   * txsDelegations
   *
   * @param hash
   * @returns xxx
   *
   */
  txsDelegations = async (
    hash: string,
  ): Promise<components['schemas']['tx_content_delegations']> =>
    await txs.txsDelegations(this.apiUrl, this.projectId, hash);

  /**
   * txsPoolRetires
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolRetires = async (
    hash: string,
  ): Promise<components['schemas']['tx_content_pool_retires']> =>
    txs.txsPoolRetires(this.apiUrl, this.projectId, hash);

  /**
   * txsPoolUpdates
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolUpdates = async (
    hash: string,
  ): Promise<components['schemas']['tx_content_pool_certs']> =>
    await txs.txsPoolUpdates(this.apiUrl, this.projectId, hash);

  /**
   * txsStakes
   *
   * @param hash
   * @returns xxx
   *
   */
  txsStakes = async (
    hash: string,
  ): Promise<components['schemas']['tx_content_stake_addr']> =>
    await txs.txsStakes(this.apiUrl, this.projectId, hash);

  /**
   * txsUtxos
   *
   * @param hash
   * @returns xxx
   *
   */
  txsUtxos = async (
    hash: string,
  ): Promise<components['schemas']['tx_content_utxo']> =>
    await txs.txsUtxos(this.apiUrl, this.projectId, hash);

  /**
   * txsWithdrawals
   *
   * @param hash
   * @returns xxx
   *
   */
  txsWithdrawals = async (
    hash: string,
  ): Promise<components['schemas']['tx_content_withdrawals']> =>
    await txs.txsWithdrawals(this.apiUrl, this.projectId, hash);

  /**
   * txxMetadata
   *
   * @param hash
   * @returns xxx
   *
   */
  txxMetadata = async (
    hash: string,
  ): Promise<components['schemas']['tx_metadata_label_json']> =>
    await txs.txxMetadata(this.apiUrl, this.projectId, hash);
}

async function run() {
  const API = new BlockFrostAPI({
    projectId: 'jOhDckOVcwx1UrlUCl9iAcHWem2pzZgI',
  });

  try {
    const res1 = await API.accounts(
      'stake1u8j7wk5c4tqk00yuz7rrh2jan4jshmwl2eqx8pzklmjqprsuqc7ls',
    );
    console.log(res1);
  } catch (err) {
    console.log('error', err);
  }
}

run();
export default BlockFrostAPI;
