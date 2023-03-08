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

import { mempool, mempoolAll, mempoolTx } from './endpoints/api/mempool';

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

import { Options, ValidatedOptions } from './types';
import { validateOptions } from './utils';
import { getInstance } from './utils/got';
import { getLimiter } from './utils/limiter';
// must be require, import would include package.json to the output dir together with "src" dir breaking dir hierarchy
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostAPI {
  apiUrl: string;
  projectId?: string;
  userAgent?: string;
  options: ValidatedOptions;
  instance: Got;
  rateLimiter: Bottleneck | undefined;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    let apiBase = API_URLS.mainnet;

    if (this.options.network) {
      if (this.options.network in API_URLS) {
        apiBase = API_URLS[this.options.network];
      } else {
        throw Error(
          'Invalid network option. Valid options: mainnet, testnet, preview, preprod.',
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

  /**
   * epochs
   *
   * @param number
   * @returns xxx
   *
   */
  epochs = epochs;

  /**
   * epochsBlocks
   *
   * @param number
   * @returns xxx
   *
   */
  epochsBlocks = epochsBlocks;

  /**
   * epochsBlocksAll
   *
   * @param number
   * @returns xxx
   *
   */
  epochsBlocksAll = epochsBlocksAll;

  /**
   * epochsBlocksByPoolId
   *
   * @param number
   * @param poolId
   * @returns xxx
   *
   */
  epochsBlocksByPoolId = epochsBlocksByPoolId;

  /**
   * epochsBlocksByPoolIdAll
   *
   * @param number
   * @param poolId
   * @returns xxx
   *
   */
  epochsBlocksByPoolIdAll = epochsBlocksByPoolIdAll;

  /**
   * epochsLatest
   *
   * @returns xxx
   *
   */
  epochsLatest = epochsLatest;

  /**
   * epochsNext
   *
   * @param number
   * @returns xxx
   *
   */
  epochsNext = epochsNext;

  /**
   * epochsParameters
   *
   * @param number
   * @returns xxx
   *
   */
  epochsParameters = epochsParameters;

  /**
   * epochsLatestParameters
   *
   * @returns xxx
   *
   */
  epochsLatestParameters = epochsLatestParameters;

  /**
   * epochsPrevious
   *
   * @param number
   * @returns xxx
   *
   */
  epochsPrevious = epochsPrevious;

  /**
   * epochsStakes
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakes = epochsStakes;

  /**
   * epochsStakesAll
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakesAll = epochsStakesAll;

  /**
   * epochsStakesByPoolId
   *
   * @param number
   * @param poolId
   * @returns xxx
   *
   */
  epochsStakesByPoolId = epochsStakesByPoolId;

  /**
   * epochsStakesByPoolIdAll
   *
   * @param number
   * @param poolId
   * @returns xxx
   *
   */
  epochsStakesByPoolIdAll = epochsStakesByPoolIdAll;

  /**
   * health
   *
   * @returns xxx
   *
   */
  health = health;

  /**
   * healthClock
   *
   * @returns xxx
   *
   */
  healthClock = healthClock;

  /**
   * ledger
   *
   * @returns xxx
   *
   */
  genesis = genesis;

  mempool = mempool;
  mempoolAll = mempoolAll;
  mempoolTx = mempoolTx;
  /**
   * metadataTxsLabel
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabel = metadataTxsLabel;

  /**
   * metadataTxsLabelCbor
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabelCbor = metadataTxsLabelCbor;

  /**
   * metadataTxsLabels
   *
   * @returns xxx
   *
   */
  metadataTxsLabels = metadataTxsLabels;

  /**
   * metrics
   *
   * @returns xxx
   *
   */
  metrics = metrics;

  /**
   * metricsEndpoints
   *
   * @returns xxx
   *
   */
  metricsEndpoints = metricsEndpoints;

  /**
   * nutlinkAddress
   *
   * @returns xxx
   *
   */
  nutlinkAddress = nutlinkAddress;
  /**

  * nutlinkAddressTicker
   *
   * @returns xxx
   *
   */
  nutlinkAddressTicker = nutlinkAddressTicker;

  /**
   * nutlinkAddressTickers
   *
   * @returns xxx
   *
   */
  nutlinkAddressTickers = nutlinkAddressTickers;

  /**
   * nutlinkAddressTickersAll
   *
   * @returns xxx
   *
   */
  nutlinkAddressTickersAll = nutlinkAddressTickersAll;

  /**
   * nutlinkAddressTickerAll
   *
   * @returns xxx
   *
   */
  nutlinkAddressTickerAll = nutlinkAddressTickerAll;

  /**
   * nutlinkTickers
   *
   * @returns xxx
   *
   */
  nutlinkTickers = nutlinkTickers;

  /**
   * nutlinkTickersAll
   *
   * @returns xxx
   *
   */
  nutlinkTickersAll = nutlinkTickersAll;

  /**
   * pools
   *
   * @returns xxx
   *
   */
  pools = pools;

  /**
   * poolsAll
   *
   * @returns xxx
   *
   */
  poolsAll = poolsAll;

  /**
   * poolMetadata
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolMetadata = poolMetadata;

  /**
   * poolsById
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsById = poolsById;

  /**
   * poolsByIdBlocks
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdBlocks = poolsByIdBlocks;

  /**
   * poolsByIdDelegators
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdDelegators = poolsByIdDelegators;

  /**
   * poolsByIdHistory
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdHistory = poolsByIdHistory;

  /**
   * poolsByIdRelays
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdRelays = poolsByIdRelays;

  /**
   * poolsByIdUpdates
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdUpdates = poolsByIdUpdates;

  /**
   * poolsRetired
   *
   * @returns xxx
   *
   */
  poolsRetired = poolsRetired;

  /**
   * poolsRetiring
   *
   * @returns xxx
   *
   */
  poolsRetiring = poolsRetiring;

  poolsExtended = poolsExtended;

  poolsExtendedAll = poolsExtendedAll;

  /**
   * root
   *
   * @returns xxx
   *
   */
  root = root;

  /**
   * List scripts
   *
   * @returns List of script hashes
   *
   */
  scripts = scripts;

  /**
   * Information about a specific script
   *
   * @returns Information about a specific script
   *
   */
  scriptsByHash = scriptsByHash;

  /**
   *
   */
  scriptsJson = scriptsJson;

  /**
   *
   */
  scriptsCbor = scriptsCbor;

  /**
   *
   */
  scriptsDatum = scriptsDatum;

  /**
   *
   */
  scriptsDatumCbor = scriptsDatumCbor;

  /**
   * List of redeemers of a specific script
   *
   * @returns List the information about redeemers of a specific script
   *
   */
  scriptsRedeemers = scriptsRedeemers;

  /**
   * txs
   *
   * @param hash
   * @returns xxx
   *
   */
  txs = txs;

  /**
   * txsMetadataCbor
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMetadataCbor = txsMetadataCbor;

  /**
   * txsDelegations
   *
   * @param hash
   * @returns xxx
   *
   */
  txsDelegations = txsDelegations;

  /**
   * txsPoolRetires
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolRetires = txsPoolRetires;

  /**
   * txsPoolUpdates
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolUpdates = txsPoolUpdates;

  /**
   * txsStakes
   *
   * @param hash
   * @returns xxx
   *
   */
  txsStakes = txsStakes;

  /**
   * txsUtxos
   *
   * @param hash
   * @returns xxx
   *
   */
  txsUtxos = txsUtxos;

  /**
   * txsWithdrawals
   *
   * @param hash
   * @returns xxx
   *
   */
  txsWithdrawals = txsWithdrawals;

  /**
   * txsMirs
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMirs = txsMirs;

  /**
   * txsMetadata
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMetadata = txsMetadata;

  // XXX:
  txsRedeemers = txsRedeemers;

  /**
   * txSubmit
   *
   * @param hash
   * @returns xxx
   *
   */
  txSubmit = txSubmit;

  /**
   * network
   *
   * @returns Detailed network information.
   *
   */
  network = network;
}

export { BlockFrostAPI };
