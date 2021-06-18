import { API_URLS } from './config';
import { components } from './types/OpenApi';
import dotenv from 'dotenv';
import axios from 'axios';
import axiosRetry from 'axios-retry';

dotenv.config();

import {
  accounts,
  accountsDelegations,
  accountsRegistrations,
  accountsRewards,
  accountsHistory,
  accountsAddresses,
} from './endpoints/accounts';

import {
  addresses,
  addressesTotal,
  addressesTxs,
  addressesTransactions,
  addressesTxsAll,
  addressesTransactionsAll,
  addressesUtxos,
  addressesUtxosAll,
} from './endpoints/addresses';

import {
  assets,
  assetsById,
  assetsHistory,
  assetsTxs,
  assetsTransactions,
  assetsAddresses,
  assetsPolicyById,
} from './endpoints/assets';

import {
  blocks,
  blocksLatest,
  blocksNext,
  blocksPrevious,
  blocksTxs,
  blocksTxsAll,
} from './endpoints/blocks';

import {
  epochs,
  epochsBlocks,
  epochsBlocksByPoolId,
  epochsLatest,
  epochsNext,
  epochsParameters,
  epochsPrevious,
  epochsStakes,
  epochsStakesByPoolId,
} from './endpoints/epochs';

import {
  pools,
  poolMetadata,
  poolsById,
  poolsByIdBlocks,
  poolsByIdDelegators,
  poolsByIdHistory,
  poolsByIdRelays,
  poolsByIdUpdates,
  poolsRetired,
  poolsRetiring,
} from './endpoints/pools';

import { ledger } from './endpoints/ledger';
import { root } from './endpoints/root';
import {
  metadataTxsLabel,
  metadataTxsLabelCbor,
  metadataTxsLabels,
} from './endpoints/metadata';

import { health, healthClock } from './endpoints/health';
import { metrics, metricsEndpoints } from './endpoints/metrics';
import {
  txs,
  txsDelegations,
  txsMetadataCbor,
  txsPoolRetires,
  txsPoolUpdates,
  txsStakes,
  txsUtxos,
  txsWithdrawals,
  txsMetadata,
  txSubmit,
} from './endpoints/txs';

import { Options } from './types';
import join from 'url-join';
import { validateOptions } from './utils';

class BlockFrostAPI {
  apiUrl: string;
  projectId?: string;
  userAgent?: string;

  constructor(options?: Options) {
    const opts = validateOptions(options);
    const apiBase = opts.isTestnet ? API_URLS.testnet : API_URLS.mainnet;
    this.apiUrl = options?.customBackend || join(apiBase, `v${opts.version}`);
    this.projectId = opts.projectId;
    this.userAgent = options?.userAgent;

    if (opts.retry429) {
      axiosRetry(axios, {
        retries: 20,
        retryDelay: axiosRetry.exponentialDelay,
        retryCondition: err => {
          return err.response?.status === 429;
        },
      });
    }
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
   * accountsRegistrations - Obtain information about the registrations and deregistrations of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the registrations and deregistrations of a specific account.
   *
   */
  accountsRegistrations = accountsRegistrations;

  /**
   * accountsRewards - Obtain information about the history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsRewards = accountsRewards;

  /**
   * accountsHistory - Obtain information about the history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsHistory = accountsHistory;

  /**
   * accountsAddresses - Obtain information about the addresses of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the addresses of a specific account.
   *
   */
  accountsAddresses = accountsAddresses;

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
   * assetsTxs - List of a specific asset transactions.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns List of a specific asset transactions.
   *
   */
  assetsTxs = assetsTxs;

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
   * addressesTxs
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTxs = addressesTxs;

  /**
   * addressesTxsAll
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTxsAll = addressesTxsAll;

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
   * epochsBlocksByPoolId
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  epochsBlocksByPoolId = epochsBlocksByPoolId;

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
   * epochsStakesByPoolId
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakesByPoolId = epochsStakesByPoolId;

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
  ledger = ledger;

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
   * pools
   *
   * @returns xxx
   *
   */
  pools = pools;

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

  /**
   * root
   *
   * @returns xxx
   *
   */
  root = root;

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
   * txsMetadata
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMetadata = txsMetadata;

  /**
   * txSubmit
   *
   * @param hash
   * @returns xxx
   *
   */
  txSubmit = txSubmit;
}

type Responses = components['schemas'];

export { BlockFrostAPI };
export type { Responses };
