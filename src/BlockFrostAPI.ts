/* eslint-disable tsdoc/syntax */
import { API_URLS } from './config';
import { Got } from 'got';
import Bottleneck from 'bottleneck';

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
  addressesUtxosAsset,
  addressesUtxosAssetAll,
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
  epochsLatestParameters,
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

import {
  mempool,
  mempoolAll,
  mempoolTx,
  mempoolByAddress,
  mempoolByAddressAll,
} from './endpoints/api/mempool';

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
  scriptsDatumCbor,
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
import {
  utilsTxsEvaluate,
  utilsTxsEvaluateUtxos,
} from './endpoints/api/utils/txs';

import { Options, ValidatedOptions } from './types';
import { validateOptions } from './utils';
import { getInstance } from './utils/got';
import { getLimiter } from './utils/limiter';
// must be require, import would include package.json to the output dir together with "src" dir breaking dir hierarchy
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostAPI {
  apiUrl: string;
  /** @ignore */
  projectId?: string;
  /** @ignore */
  userAgent?: string;
  /** @ignore */
  options: ValidatedOptions;
  /** @ignore */
  instance: Got;
  /** @ignore */
  rateLimiter: Bottleneck | undefined;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    let apiBase = API_URLS.mainnet;

    if (this.options.network) {
      if (this.options.network in API_URLS) {
        apiBase = API_URLS[this.options.network];
      } else {
        throw Error(
          'Invalid network option. Valid options: mainnet, testnet, preview, preprod, sanchonet.',
        );
      }
    }

    this.apiUrl =
      this.options?.customBackend || `${apiBase}/v${this.options.version}`;

    this.projectId = this.options.projectId;

    this.userAgent =
      options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.rateLimiter = this.options.rateLimiter
      ? getLimiter(this.options.rateLimiter)
      : undefined;

    this.instance = getInstance(
      this.apiUrl,
      this.options,
      this.userAgent,
      this.rateLimiter,
    );
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
  addressesUtxosAsset = addressesUtxosAsset;
  addressesUtxosAssetAll = addressesUtxosAssetAll;

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
  epochsLatestParameters = epochsLatestParameters;
  epochsPrevious = epochsPrevious;
  epochsStakes = epochsStakes;
  epochsStakesAll = epochsStakesAll;
  epochsStakesByPoolId = epochsStakesByPoolId;
  epochsStakesByPoolIdAll = epochsStakesByPoolIdAll;

  health = health;
  healthClock = healthClock;
  genesis = genesis;

  mempool = mempool;
  mempoolAll = mempoolAll;
  mempoolTx = mempoolTx;
  metadataTxsLabel = metadataTxsLabel;
  metadataTxsLabelCbor = metadataTxsLabelCbor;
  metadataTxsLabels = metadataTxsLabels;
  mempoolByAddress = mempoolByAddress;
  mempoolByAddressAll = mempoolByAddressAll;

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
  scriptsDatumCbor = scriptsDatumCbor;
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

  utilsTxsEvaluate = utilsTxsEvaluate;
  utilsTxsEvaluateUtxos = utilsTxsEvaluateUtxos;
}

export { BlockFrostAPI };
