import { API_URLS } from './config';
import { Got } from 'got';

import {
  accounts,
  accountsDelegations,
  accountsDelegationsAll,
  accountsRegistrations,
  accountsRegistrationsAll,
  accountsRewards,
  accountsRewardsAll,
  accountsHistory,
  accountsHistoryAll,
  accountsWithdrawals,
  accountsWithdrawalsAll,
  accountsMirs,
  accountsMirsAll,
  accountsAddresses,
  accountsAddressesAll,
  accountsAddressesAssets,
  accountsAddressesTotal,
  accountsAddressesAssetsAll,
} from './endpoints/api/accounts';

import {
  addresses,
  addressesTotal,
  addressesExtended,
  addressesTransactions,
  addressesTransactionsAll,
  addressesUtxos,
  addressesUtxosAll,
} from './endpoints/api/addresses';

import {
  assets,
  assetsById,
  assetsHistory,
  assetsHistoryAll,
  assetsTransactions,
  assetsAddresses,
  assetsPolicyById,
  assetsPolicyByIdAll,
} from './endpoints/api/assets';

import {
  blocks,
  blocksLatest,
  blocksLatestTxs,
  blocksLatestTxsAll,
  blocksNext,
  blocksPrevious,
  blocksTxs,
  blocksTxsAll,
  blocksAddresses,
  blocksAddressesAll,
} from './endpoints/api/blocks';

import {
  epochs,
  epochsBlocks,
  epochsBlocksAll,
  epochsBlocksByPoolId,
  epochsBlocksByPoolIdAll,
  epochsLatest,
  epochsNext,
  epochsParameters,
  epochsPrevious,
  epochsStakes,
  epochsStakesAll,
  epochsStakesByPoolId,
  epochsStakesByPoolIdAll,
} from './endpoints/api/epochs';

import {
  pools,
  poolsAll,
  poolMetadata,
  poolsById,
  poolsByIdBlocks,
  poolsByIdDelegators,
  poolsByIdHistory,
  poolsByIdRelays,
  poolsByIdUpdates,
  poolsRetired,
  poolsRetiring,
  poolsExtended,
  poolsExtendedAll,
} from './endpoints/api/pools';

import { genesis } from './endpoints/api/ledger';
import { root } from './endpoints/api/root';
import {
  metadataTxsLabel,
  metadataTxsLabelCbor,
  metadataTxsLabels,
} from './endpoints/api/metadata';

import { health, healthClock } from './endpoints/api/health';
import { metrics, metricsEndpoints } from './endpoints/api/metrics';
import {
  txs,
  txsDelegations,
  txsMetadataCbor,
  txsPoolRetires,
  txsPoolUpdates,
  txsStakes,
  txsUtxos,
  txsWithdrawals,
  txsMirs,
  txsMetadata,
  txsRedeemers,
  txSubmit,
} from './endpoints/api/txs';
import {
  scripts,
  scriptsByHash,
  scriptsDatum,
  scriptsRedeemers,
  scriptsJson,
  scriptsCbor,
} from './endpoints/api/scripts';
import {
  nutlinkAddress,
  nutlinkAddressTicker,
  nutlinkAddressTickers,
  nutlinkAddressTickersAll,
  nutlinkAddressTickerAll,
  nutlinkTickers,
  nutlinkTickersAll,
} from './endpoints/api/nutlink';

import { network } from './endpoints/api/network';

import { Options, ValidatedOptions } from './types';
import { validateOptions } from './utils';
import { getInstance } from './utils/got';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostAPI {
  apiUrl: string;
  projectId?: string;
  userAgent?: string;
  options: ValidatedOptions;
  instance: Got;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    let apiBase = API_URLS.mainnet;

    if (this.options.isTestnet) {
      apiBase = API_URLS.testnet;
    }

    this.apiUrl =
      this.options?.customBackend || `${apiBase}/v${this.options.version}`;

    this.projectId = this.options.projectId;

    this.userAgent =
      options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.instance = getInstance(this.apiUrl, this.options, this.userAgent);
  }

  accounts = accounts;
  accountsDelegations = accountsDelegations;
  accountsDelegationsAll = accountsDelegationsAll;
  accountsRegistrations = accountsRegistrations;
  accountsRegistrationsAll = accountsRegistrationsAll;
  accountsRewards = accountsRewards;
  accountsRewardsAll = accountsRewardsAll;
  accountsHistory = accountsHistory;
  accountsHistoryAll = accountsHistoryAll;
  accountsWithdrawals = accountsWithdrawals;
  accountsWithdrawalsAll = accountsWithdrawalsAll;
  accountsMirs = accountsMirs;
  accountsMirsAll = accountsMirsAll;
  accountsAddresses = accountsAddresses;
  accountsAddressesAll = accountsAddressesAll;
  accountsAddressesAssets = accountsAddressesAssets;
  accountsAddressesAssetsAll = accountsAddressesAssetsAll;
  accountsAddressesTotal = accountsAddressesTotal;

  assets = assets;
  assetsById = assetsById;
  assetsHistory = assetsHistory;
  assetsHistoryAll = assetsHistoryAll;
  assetsTransactions = assetsTransactions;
  assetsAddresses = assetsAddresses;
  assetsPolicyById = assetsPolicyById;
  assetsPolicyByIdAll = assetsPolicyByIdAll;

  addresses = addresses;
  addressesTotal = addressesTotal;
  addressesExtended = addressesExtended;
  addressesTransactions = addressesTransactions;
  addressesTransactionsAll = addressesTransactionsAll;
  addressesUtxos = addressesUtxos;
  addressesUtxosAll = addressesUtxosAll;

  blocks = blocks;
  blocksLatest = blocksLatest;
  blocksLatestTxs = blocksLatestTxs;
  blocksLatestTxsAll = blocksLatestTxsAll;
  blocksNext = blocksNext;
  blocksPrevious = blocksPrevious;
  blocksTxs = blocksTxs;
  blocksTxsAll = blocksTxsAll;
  blocksAddresses = blocksAddresses;
  blocksAddressesAll = blocksAddressesAll;

  epochs = epochs;
  epochsBlocks = epochsBlocks;
  epochsBlocksAll = epochsBlocksAll;
  epochsBlocksByPoolId = epochsBlocksByPoolId;
  epochsBlocksByPoolIdAll = epochsBlocksByPoolIdAll;
  epochsLatest = epochsLatest;
  epochsNext = epochsNext;
  epochsParameters = epochsParameters;
  epochsPrevious = epochsPrevious;
  epochsStakes = epochsStakes;
  epochsStakesAll = epochsStakesAll;
  epochsStakesByPoolId = epochsStakesByPoolId;
  epochsStakesByPoolIdAll = epochsStakesByPoolIdAll;

  health = health;
  healthClock = healthClock;

  genesis = genesis;

  metadataTxsLabel = metadataTxsLabel;
  metadataTxsLabelCbor = metadataTxsLabelCbor;
  metadataTxsLabels = metadataTxsLabels;
  metrics = metrics;
  metricsEndpoints = metricsEndpoints;

  nutlinkAddress = nutlinkAddress;
  nutlinkAddressTicker = nutlinkAddressTicker;
  nutlinkAddressTickers = nutlinkAddressTickers;
  nutlinkAddressTickersAll = nutlinkAddressTickersAll;
  nutlinkAddressTickerAll = nutlinkAddressTickerAll;
  nutlinkTickers = nutlinkTickers;
  nutlinkTickersAll = nutlinkTickersAll;

  pools = pools;
  poolsAll = poolsAll;
  poolMetadata = poolMetadata;
  poolsById = poolsById;
  poolsByIdBlocks = poolsByIdBlocks;
  poolsByIdDelegators = poolsByIdDelegators;
  poolsByIdHistory = poolsByIdHistory;
  poolsByIdRelays = poolsByIdRelays;
  poolsByIdUpdates = poolsByIdUpdates;
  poolsRetired = poolsRetired;
  poolsRetiring = poolsRetiring;
  poolsExtended = poolsExtended;
  poolsExtendedAll = poolsExtendedAll;

  root = root;

  scripts = scripts;
  scriptsByHash = scriptsByHash;
  scriptsJson = scriptsJson;
  scriptsCbor = scriptsCbor;
  scriptsDatum = scriptsDatum;
  scriptsRedeemers = scriptsRedeemers;

  txs = txs;
  txsMetadataCbor = txsMetadataCbor;
  txsDelegations = txsDelegations;
  txsPoolRetires = txsPoolRetires;
  txsPoolUpdates = txsPoolUpdates;
  txsStakes = txsStakes;
  txsUtxos = txsUtxos;
  txsWithdrawals = txsWithdrawals;
  txsMirs = txsMirs;
  txsMetadata = txsMetadata;
  txsRedeemers = txsRedeemers;

  txSubmit = txSubmit;

  network = network;
}

export { BlockFrostAPI };
