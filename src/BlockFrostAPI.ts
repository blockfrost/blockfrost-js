import { Got } from 'got';

import { API_URLS } from './config';
import {
  accounts,
  accountsAddresses,
  accountsAddressesAll,
  accountsAddressesAssets,
  accountsAddressesAssetsAll,
  accountsAddressesTotal,
  accountsDelegations,
  accountsDelegationsAll,
  accountsHistory,
  accountsHistoryAll,
  accountsMirs,
  accountsMirsAll,
  accountsRegistrations,
  accountsRegistrationsAll,
  accountsRewards,
  accountsRewardsAll,
  accountsWithdrawals,
  accountsWithdrawalsAll,
} from './endpoints/api/accounts';
import {
  addresses,
  addressesExtended,
  addressesTotal,
  addressesTransactions,
  addressesTransactionsAll,
  addressesUtxos,
  addressesUtxosAll,
} from './endpoints/api/addresses';
import {
  assets,
  assetsAddresses,
  assetsById,
  assetsHistory,
  assetsHistoryAll,
  assetsPolicyById,
  assetsPolicyByIdAll,
  assetsTransactions,
} from './endpoints/api/assets';
import {
  blocks,
  blocksAddresses,
  blocksAddressesAll,
  blocksLatest,
  blocksLatestTxs,
  blocksLatestTxsAll,
  blocksNext,
  blocksPrevious,
  blocksTxs,
  blocksTxsAll,
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
import { health, healthClock } from './endpoints/api/health';
import { genesis } from './endpoints/api/ledger';
import {
  metadataTxsLabel,
  metadataTxsLabelCbor,
  metadataTxsLabels,
} from './endpoints/api/metadata';
import { metrics, metricsEndpoints } from './endpoints/api/metrics';
import { network } from './endpoints/api/network';
import {
  nutlinkAddress,
  nutlinkAddressTicker,
  nutlinkAddressTickerAll,
  nutlinkAddressTickers,
  nutlinkAddressTickersAll,
  nutlinkTickers,
  nutlinkTickersAll,
} from './endpoints/api/nutlink';
import {
  poolMetadata,
  pools,
  poolsAll,
  poolsById,
  poolsByIdBlocks,
  poolsByIdDelegators,
  poolsByIdHistory,
  poolsByIdRelays,
  poolsByIdUpdates,
  poolsExtended,
  poolsExtendedAll,
  poolsRetired,
  poolsRetiring,
} from './endpoints/api/pools';
import { root } from './endpoints/api/root';
import {
  scripts,
  scriptsByHash,
  scriptsCbor,
  scriptsDatum,
  scriptsJson,
  scriptsRedeemers,
} from './endpoints/api/scripts';
import {
  txs,
  txsDelegations,
  txsMetadata,
  txsMetadataCbor,
  txsMirs,
  txsPoolRetires,
  txsPoolUpdates,
  txsRedeemers,
  txsStakes,
  txSubmit,
  txsUtxos,
  txsWithdrawals,
} from './endpoints/api/txs';
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
