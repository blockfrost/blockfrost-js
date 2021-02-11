import * as blocks from 'endpoints/blocks';
import * as accounts from 'endpoints/accounts';
import * as addresses from 'endpoints/addresses';
import * as epochs from 'endpoints/epochs';
import * as health from 'endpoints/health';
import * as ledger from 'endpoints/ledger';
import * as metadata from 'endpoints/metadata';
import * as metrics from 'endpoints/metrics';
import * as pools from 'endpoints/pools';
import * as root from 'endpoints/root';
import * as txs from 'endpoints/txs';

import { validateOptions } from 'utils';
import { API_URLS } from 'config';
import join from 'url-join';
import { Options, HashOrNumber } from 'types';

class BlockFrostAPI {
  apiUrl: string;
  projectId: string;

  constructor(options?: Options) {
    const opts = validateOptions(options);
    const apiBase = opts.isTestnet ? API_URLS.testnet : API_URLS.mainnet;
    this.apiUrl = join(apiBase, `v${opts.version}`);
    this.projectId = opts.projectId;
  }

  accounts = (stakeAddress: string) => accounts.accounts(this.apiUrl, this.projectId, stakeAddress);
  accountsDelegations = (stakeAddress: string) =>
    accounts.accountsDelegations(this.apiUrl, this.projectId, stakeAddress);
  accountsRegistrations = (stakeAddress: string) =>
    accounts.accountsRegistrations(this.apiUrl, this.projectId, stakeAddress);
  accountsRewards = (stakeAddress: string) => accounts.accountsRewards(this.apiUrl, this.projectId, stakeAddress);
  addresses = (address: string) => addresses.addresses(this.apiUrl, this.projectId, address);
  addressesTotal = (address: string) => addresses.addressesTotal(this.apiUrl, this.projectId, address);
  addressesTxs = (address: string) => addresses.addressesTxs(this.apiUrl, this.projectId, address);
  addressesUtxos = (address: string) => addresses.addressesUtxos(this.apiUrl, this.projectId, address);
  blocks = (hashOrNumber: HashOrNumber) => blocks.blocks(this.apiUrl, this.projectId, hashOrNumber);
  blocksLatest = () => blocks.blocksLatest(this.apiUrl, this.projectId);
  blocksNext = (hashOrNumber: HashOrNumber) => blocks.blocksNext(this.apiUrl, this.projectId, hashOrNumber);
  blockPrevious = (hashOrNumber: HashOrNumber) => blocks.blocksPrevious(this.apiUrl, this.projectId, hashOrNumber);
  blocksTxs = (hashOrNumber: HashOrNumber) => blocks.blocksTxs(this.apiUrl, this.projectId, hashOrNumber);
  epochs = (number: number) => epochs.epochs(this.apiUrl, this.projectId, number);
  epochsBlocks = (number: number) => epochs.epochsBlocks(this.apiUrl, this.projectId, number);
  epochsBlocksByPoolId = (number: number, poolId: string) =>
    epochs.epochsBlocksByPoolId(this.apiUrl, this.projectId, number, poolId);
  epochsLatest = () => epochs.epochsLatest(this.apiUrl, this.projectId);
  epochsNext = (number: number) => epochs.epochsNext(this.apiUrl, this.projectId, number);
  epochsParameters = (number: number) => epochs.epochsParameters(this.apiUrl, this.projectId, number);
  epochsPrevious = (number: number) => epochs.epochsPrevious(this.apiUrl, this.projectId, number);
  epochsStakes = (number: number) => epochs.epochsStakes(this.apiUrl, this.projectId, number);
  epochsStakesByPoolId = (number: number, poolId: string) =>
    epochs.epochsStakesByPoolId(this.apiUrl, this.projectId, number, poolId);
  health = () => health.health(this.apiUrl, this.projectId);
  healthClock = () => health.healthClock(this.apiUrl, this.projectId);
  ledger = () => ledger.ledger(this.apiUrl, this.projectId);
  metadataTxsLabel = (label: string) => metadata.metadataTxsLabel(this.apiUrl, this.projectId, label);
  metadataTxsLabelCbor = (label: string) => metadata.metadataTxsLabelCbor(this.apiUrl, this.projectId, label);
  metadataTxsLabels = () => metadata.metadataTxsLabels(this.apiUrl, this.projectId);
  metrics = () => metrics.metrics(this.apiUrl, this.projectId);
  metricsEndpoints = () => metrics.metricsEndpoints(this.apiUrl, this.projectId);
  pools = () => pools.pools(this.apiUrl, this.projectId);
  poolMetadata = (poolId: string) => pools.poolMetadata(this.apiUrl, this.projectId, poolId);
  poolsById = (poolId: string) => pools.poolsById(this.apiUrl, this.projectId, poolId);
  poolsByIdBlocks = (poolId: string) => pools.poolsByIdBlocks(this.apiUrl, this.projectId, poolId);
  poolsByIdDelegators = (poolId: string) => pools.poolsByIdDelegators(this.apiUrl, this.projectId, poolId);
  poolsByIdHistory = (poolId: string) => pools.poolsByIdHistory(this.apiUrl, this.projectId, poolId);
  poolsByIdRelays = (poolId: string) => pools.poolsByIdRelays(this.apiUrl, this.projectId, poolId);
  poolsByIdUpdates = (poolId: string) => pools.poolsByIdUpdates(this.apiUrl, this.projectId, poolId);
  poolsRetired = () => pools.poolsRetired(this.apiUrl, this.projectId);
  poolsRetiring = () => pools.poolsRetiring(this.apiUrl, this.projectId);
  info = () => root.version(this.apiUrl, this.projectId);
  txs = (hash: string) => txs.txs(this.apiUrl, this.projectId, hash);
  txsMetadataCbor = (hash: string) => txs.txsMetadataCbor(this.apiUrl, this.projectId, hash);
  txsDelegations = (hash: string) => txs.txsDelegations(this.apiUrl, this.projectId, hash);
  txsPoolRetires = (hash: string) => txs.txsPoolRetires(this.apiUrl, this.projectId, hash);
  txsPoolUpdates = (hash: string) => txs.txsPoolUpdates(this.apiUrl, this.projectId, hash);
  txsStakes = (hash: string) => txs.txsStakes(this.apiUrl, this.projectId, hash);
  txsUtxos = (hash: string) => txs.txsUtxos(this.apiUrl, this.projectId, hash);
  txsWithdrawals = (hash: string) => txs.txsWithdrawals(this.apiUrl, this.projectId, hash);
  txxMetadata = (hash: string) => txs.txxMetadata(this.apiUrl, this.projectId, hash);
}

async function run() {
  const API = new BlockFrostAPI({
    projectId: 'jOhDckOVcwx1UrlUCl9iAcHWem2pzZgI',
  });

  try {
    const res1 = await API.info();
    console.log(res1);
  } catch (err) {
    console.log('error', err);
  }
}

run();
