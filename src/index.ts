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
import * as Responses from 'types/Responses';
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
   * Accounts
   *
   * @param stakeAddress
   * @returns
   *
   */
  accounts = (stakeAddress: string): Responses.Accounts =>
    accounts.accounts(this.apiUrl, this.projectId, stakeAddress);

  /**
   * accountsDelegations
   *
   * @param stakeAddress
   * @returns xxx
   *
   */
  accountsDelegations = (stakeAddress: string): Responses.AccountsDelegations =>
    accounts.accountsDelegations(this.apiUrl, this.projectId, stakeAddress);

  /**
   * accountsRegistrations
   *
   * @param stakeAddress
   * @returns xxx
   *
   */
  accountsRegistrations: Responses.AccountsRegistrations = (
    stakeAddress: string,
  ) =>
    accounts.accountsRegistrations(this.apiUrl, this.projectId, stakeAddress);

  /**
   * accountsRewards
   *
   * @param stakeAddress
   * @returns xxx
   *
   */
  accountsRewards: Responses.AccountsRewards = (stakeAddress: string) =>
    accounts.accountsRewards(this.apiUrl, this.projectId, stakeAddress);

  /**
   * addresses
   *
   * @param address
   * @returns xxx
   *
   */
  addresses = (address: string) =>
    addresses.addresses(this.apiUrl, this.projectId, address);

  /**
   * addressesTotal
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTotal = (address: string) =>
    addresses.addressesTotal(this.apiUrl, this.projectId, address);

  /**
   * addressesTxs
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTxs = (address: string) =>
    addresses.addressesTxs(this.apiUrl, this.projectId, address);

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  addressesUtxos = (address: string) =>
    addresses.addressesUtxos(this.apiUrl, this.projectId, address);

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  blocks = (hashOrNumber: HashOrNumber) =>
    blocks.blocks(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * blocksLatest
   *
   * @returns xxx
   *
   */
  blocksLatest = () => blocks.blocksLatest(this.apiUrl, this.projectId);

  /**
   * blocksNext
   *
   * @param address
   * @returns xxx
   *
   */
  blocksNext = (address: HashOrNumber) =>
    blocks.blocksNext(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * blockPrevious
   *
   * @param address
   * @returns xxx
   *
   */
  blockPrevious = (address: HashOrNumber) =>
    blocks.blocksPrevious(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * addressesUtxos
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  blocksTxs = (hashOrNumber: HashOrNumber) =>
    blocks.blocksTxs(this.apiUrl, this.projectId, hashOrNumber);

  /**
   * epochs
   *
   * @param number
   * @returns xxx
   *
   */
  epochs = (number: number) =>
    epochs.epochs(this.apiUrl, this.projectId, number);

  /**
   * epochsBlocks
   *
   * @param number
   * @returns xxx
   *
   */
  epochsBlocks = (number: number) =>
    epochs.epochsBlocks(this.apiUrl, this.projectId, number);

  /**
   * epochsBlocksByPoolId
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  epochsBlocksByPoolId = (number: number, poolId: string) =>
    epochs.epochsBlocksByPoolId(this.apiUrl, this.projectId, number, poolId);

  /**
   * epochsLatest
   *
   * @returns xxx
   *
   */
  epochsLatest = () => epochs.epochsLatest(this.apiUrl, this.projectId);

  /**
   * epochsNext
   *
   * @param number
   * @returns xxx
   *
   */
  epochsNext = (number: number) =>
    epochs.epochsNext(this.apiUrl, this.projectId, number);

  /**
   * epochsParameters
   *
   * @param number
   * @returns xxx
   *
   */
  epochsParameters = (number: number) =>
    epochs.epochsParameters(this.apiUrl, this.projectId, number);

  /**
   * epochsPrevious
   *
   * @param number
   * @returns xxx
   *
   */
  epochsPrevious = (number: number) =>
    epochs.epochsPrevious(this.apiUrl, this.projectId, number);

  /**
   * epochsStakes
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakes = (number: number) =>
    epochs.epochsStakes(this.apiUrl, this.projectId, number);

  /**
   * epochsStakesByPoolId
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakesByPoolId = (number: number, poolId: string) =>
    epochs.epochsStakesByPoolId(this.apiUrl, this.projectId, number, poolId);

  /**
   * health
   *
   * @returns xxx
   *
   */
  health = () => health.health(this.apiUrl, this.projectId);

  /**
   * healthClock
   *
   * @returns xxx
   *
   */
  healthClock = () => health.healthClock(this.apiUrl, this.projectId);

  /**
   * ledger
   *
   * @returns xxx
   *
   */
  ledger = () => ledger.ledger(this.apiUrl, this.projectId);

  /**
   * metadataTxsLabel
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabel = (label: string) =>
    metadata.metadataTxsLabel(this.apiUrl, this.projectId, label);

  /**
   * metadataTxsLabelCbor
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabelCbor = (label: string) =>
    metadata.metadataTxsLabelCbor(this.apiUrl, this.projectId, label);

  /**
   * metadataTxsLabels
   *
   * @returns xxx
   *
   */
  metadataTxsLabels = () =>
    metadata.metadataTxsLabels(this.apiUrl, this.projectId);

  /**
   * metrics
   *
   * @returns xxx
   *
   */
  metrics = () => metrics.metrics(this.apiUrl, this.projectId);

  /**
   * metricsEndpoints
   *
   * @returns xxx
   *
   */
  metricsEndpoints = () =>
    metrics.metricsEndpoints(this.apiUrl, this.projectId);

  /**
   * pools
   *
   * @returns xxx
   *
   */
  pools = () => pools.pools(this.apiUrl, this.projectId);

  /**
   * poolMetadata
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolMetadata = (poolId: string) =>
    pools.poolMetadata(this.apiUrl, this.projectId, poolId);

  /**
   * poolsById
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsById = (poolId: string) =>
    pools.poolsById(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdBlocks
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdBlocks = (poolId: string) =>
    pools.poolsByIdBlocks(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdDelegators
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdDelegators = (poolId: string) =>
    pools.poolsByIdDelegators(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdHistory
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdHistory = (poolId: string) =>
    pools.poolsByIdHistory(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdRelays
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdRelays = (poolId: string) =>
    pools.poolsByIdRelays(this.apiUrl, this.projectId, poolId);

  /**
   * poolsByIdUpdates
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdUpdates = (poolId: string) =>
    pools.poolsByIdUpdates(this.apiUrl, this.projectId, poolId);

  /**
   * poolsRetired
   *
   * @returns xxx
   *
   */
  poolsRetired = () => pools.poolsRetired(this.apiUrl, this.projectId);

  /**
   * poolsRetiring
   *
   * @returns xxx
   *
   */
  poolsRetiring = () => pools.poolsRetiring(this.apiUrl, this.projectId);

  /**
   * info
   *
   * @returns xxx
   *
   */
  info = () => root.version(this.apiUrl, this.projectId);

  /**
   * txs
   *
   * @param hash
   * @returns xxx
   *
   */
  txs = (hash: string) => txs.txs(this.apiUrl, this.projectId, hash);

  /**
   * txsMetadataCbor
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMetadataCbor = (hash: string) =>
    txs.txsMetadataCbor(this.apiUrl, this.projectId, hash);

  /**
   * txsDelegations
   *
   * @param hash
   * @returns xxx
   *
   */
  txsDelegations = (hash: string) =>
    txs.txsDelegations(this.apiUrl, this.projectId, hash);

  /**
   * txsPoolRetires
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolRetires = (hash: string) =>
    txs.txsPoolRetires(this.apiUrl, this.projectId, hash);

  /**
   * txsPoolUpdates
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolUpdates = (hash: string) =>
    txs.txsPoolUpdates(this.apiUrl, this.projectId, hash);

  /**
   * txsStakes
   *
   * @param hash
   * @returns xxx
   *
   */
  txsStakes = (hash: string) =>
    txs.txsStakes(this.apiUrl, this.projectId, hash);

  /**
   * txsUtxos
   *
   * @param hash
   * @returns xxx
   *
   */
  txsUtxos = (hash: string) => txs.txsUtxos(this.apiUrl, this.projectId, hash);

  /**
   * txsWithdrawals
   *
   * @param hash
   * @returns xxx
   *
   */
  txsWithdrawals = (hash: string) =>
    txs.txsWithdrawals(this.apiUrl, this.projectId, hash);

  /**
   * txxMetadata
   *
   * @param hash
   * @returns xxx
   *
   */
  txxMetadata = (hash: string) =>
    txs.txxMetadata(this.apiUrl, this.projectId, hash);
}

async function run() {
  const API = new BlockFrostAPI({
    projectId: 's',
  });

  try {
    const res1 = await API.info();
    console.log(res1);
  } catch (err) {
    console.log('error', err);
  }
}

run();
export default BlockFrostAPI;
