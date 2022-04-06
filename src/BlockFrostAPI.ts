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
import { getLimiter } from './utils/limiter';
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

    if (this.options.isTestnet) {
      apiBase = API_URLS.testnet;
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

  /**
   * accounts - Obtain information about a specific stake account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about a specific stake account.
   *
   */
  accounts = accounts;

  /**
   * accountsDelegations - Obtain information about the delegation of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the delegation of a specific account.
   *
   */
  accountsDelegations = accountsDelegations;

  /**
   * accountsDelegationsAll - Obtain information about all delegations of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the delegation of a specific account.
   *
   */
  accountsDelegationsAll = accountsDelegationsAll;

  /**
   * accountsRegistrations - Obtain information about the registrations and deregistrations of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the registrations and deregistrations of a specific account.
   *
   */
  accountsRegistrations = accountsRegistrations;

  /**
   * accountsRegistrationsAll - Obtain information about all registrations and deregistrations of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the registrations and deregistrations of a specific account.
   *
   */
  accountsRegistrationsAll = accountsRegistrationsAll;

  /**
   * accountsRewards - Obtain information about the history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsRewards = accountsRewards;

  /**
   * accountsRewardsAll - Obtain information about whole history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsRewardsAll = accountsRewardsAll;

  /**
   * accountsHistory - Obtain information about the history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsHistory = accountsHistory;

  /**
   * accountsHistoryAll - Obtain information about whole history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsHistoryAll = accountsHistoryAll;

  /**
   * accountsWithdrawals - Obtain information about the withdrawals of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the withdrawals of a specific account.
   *
   */
  accountsWithdrawals = accountsWithdrawals;

  /**
   * accountsWithdrawalsAll - Obtain information about all withdrawals of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the withdrawals of a specific account.
   *
   */
  accountsWithdrawalsAll = accountsWithdrawalsAll;

  /**
   * accountsMirs - Obtain information about the MIRs of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the MIRs of a specific account.
   *
   */
  accountsMirs = accountsMirs;

  /**
   * accountsMirsAll - Obtain information about all MIRs of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the MIRs of a specific account.
   *
   */
  accountsMirsAll = accountsMirsAll;

  /**
   * accountsAddresses - Obtain information about the addresses of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the addresses of a specific account.
   *
   */
  accountsAddresses = accountsAddresses;

  /**
   * accountsAddressesAll - Obtain information about all addresses of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the addresses of a specific account.
   *
   */
  accountsAddressesAll = accountsAddressesAll;

  /**
   * accountsAddressesAssets - Obtain information about assets associated with addresses of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Assets associated with the account addresses
   *
   */
  accountsAddressesAssets = accountsAddressesAssets;

  /**
   * accountsAddressesAssets - Obtain information about assets associated with addresses of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Assets associated with the account addresses
   *
   */
  accountsAddressesAssetsAll = accountsAddressesAssetsAll;

  /**
   * accountsAddressesTotal - Obtain summed details aboutof all addresses associated with a given account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Assets associated with the account addresses
   *
   */
  accountsAddressesTotal = accountsAddressesTotal;

  /**
   * assets - List of assets.
   *
   * @returns List of assets.
   *
   */
  assets = assets;

  /**
   * assetsById - Information about a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns Information about a specific asset.
   *
   */
  assetsById = assetsById;

  /**
   * assetsHistory - History of a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns History of a specific asset.
   *
   */
  assetsHistory = assetsHistory;

  /**
   * assetsHistoryAll - Whole history of a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns History of a specific asset.
   *
   */
  assetsHistoryAll = assetsHistoryAll;

  /**
   * assetsTransactions - List of a specific asset transactions.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns List of a specific asset transactions.
   *
   */
  assetsTransactions = assetsTransactions;

  /**
   * assetsAddresses - List of a addresses containing a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns List of a addresses containing a specific asset.
   *
   */
  assetsAddresses = assetsAddresses;

  /**
   * assetsPolicyById - List of asset minted under a specific policy.
   *
   * @param policyId - Specific policy_id
   * @returns List of asset minted under a specific policy.
   *
   */
  assetsPolicyById = assetsPolicyById;

  /**
   * assetsPolicyByIdAll - List of all assets minted under a specific policy.
   *
   * @param policyId - Specific policy_id
   * @returns List of asset minted under a specific policy.
   *
   */
  assetsPolicyByIdAll = assetsPolicyByIdAll;

  /**
   * addresses
   *
   * @param address
   * @returns xxx
   *
   */
  addresses = addresses;

  /**
   * addressesTotal
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTotal = addressesTotal;

  /**
   * addressesExtended
   *
   * @param address
   * @returns xxx
   *
   */
  addressesExtended = addressesExtended;

  /**
   * addressesTransactions
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTransactions = addressesTransactions;

  /**
   * addressesTransactionsAll
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTransactionsAll = addressesTransactionsAll;

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  addressesUtxos = addressesUtxos;

  /**
   * addressesUtxosAll
   *
   * @param address
   * @returns xxx
   *
   */
  addressesUtxosAll = addressesUtxosAll;
  
  /**
   * addressesUtxosAsset
   *
   * @param address
   * @returns xxx
   *
   */
  addressesUtxosAsset = addressesUtxosAsset;

  /**
  * addressesUtxosAssetAll
  *
  * @param address
  * @returns xxx
  *
  */
  addressesUtxosAssetAll = addressesUtxosAssetAll;

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  blocks = blocks;

  /**
   * blocksLatest
   *
   * @returns xxx
   *
   */
  blocksLatest = blocksLatest;
  blocksLatestTxs = blocksLatestTxs;
  blocksLatestTxsAll = blocksLatestTxsAll;

  /**
   * blocksNext
   *
   * @param address
   * @returns xxx
   *
   */
  blocksNext = blocksNext;

  /**
   * blockPrevious
   *
   * @param address
   * @returns xxx
   *
   */
  blocksPrevious = blocksPrevious;

  /**
   * addressesUtxos
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  blocksTxs = blocksTxs;

  /**
   * blocksTxsAll
   *
   * @param blocksTxsAll
   * @returns xxx
   *
   */
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
