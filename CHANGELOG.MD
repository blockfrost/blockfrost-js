# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.1.0]

### Added

- `deriveAddress` derive Byron addresses
- Rate limiter to match [the limits of Blockfrost API](https://docs.blockfrost.io/#section/Limits). For additional customization, see [options documentation](https://github.com/blockfrost/blockfrost-js#options).

### Changed

- Updated `cardano-serialization-lib` to v10
- Lowered number of retries for failed requests to 3

## [4.0.1]

### Removed

- order pagination option from `epochsNext`, `epochsPrevious`, `blocksNext`, and `blocksPrevious`

## [4.0.0]

### ⚠️ Breaking changes

- `script` → `scriptsByHash`
- `scriptDatum` → `scriptsDatum`
- `scriptRedeemers` → `scriptsRedeemers`
- `scriptJson` → `scriptsJson`
- `scriptCbor` → `scriptsCbor`

### Added

- added exports for util functions `getFingerprint` `deriveAddress`
- `poolsExtended`, `poolsExtendedAll` endpoints
- `blockAddress`, `blockAddresses` for retrieving all addresses that were affected in a block

### Changed

- `deriveAddress` is no longer a method on BlockfrostAPI, but rather a standalone function exported from `@blockfrost/blockfrost-js`

### Fixed

- params in `deriveAddress` and stake address derivation
- incorrect user-agent header

### Removed

- `getAccount` method

## [3.0.3]

### Fixed

- incorrect user-agent header (backported from v4.0.0)

## [3.0.2]

### Added

- testnet option for `getAccount`

## [3.0.1]

3.0.0 was accidentally tagged as beta in npm

## [3.0.0]

### Added

- `http2` option (default false)
- `debug` option (default false) - logs to stdout/stderr all fired request and errors thrown by Got
- derive network from project id
- new helper methods `epochsBlocksAll`, `epochsBlocksByPoolIdAll`, `epochsStakesAll`, `epochsStakesByPoolIdAll` and `poolsAll`
- new methods `addressesExtended` and `accountsAddressesTotal`

### ⚠️ Breaking changes

- Axios → Got
- removed `retryCount`, `retryDelay`, `retry429`
- added `retryOptions` see: https://github.com/sindresorhus/got/blob/main/documentation/7-retry.md#retry

### Changed

- thrown errors (`BlockfrostServerError`, `BlockfrostClientError`) are now subclasses of `Error`
- updated @blockfrost/openapi & regenerated types to match reflect changes in Blockfrost API

### Fixed

- return type of epochsStakesByPoolId and epochsBlocksByPoolId

## [2.0.2]

### Fixed

- `assetsPolicyById` response schema
- ipfs add maxContentLength and maxBodyLength

## [2.0.1]

### Fixed

- `metadataTxsLabels` and `metadataTxsLabel` endpoints types

## [2.0.0]

### ⚠️ Breaking change - Fix

- sort response in `getAccount`

## [1.3.0]

### Added

- alonzo support
- `script`, `scripts`, `scriptJson`, `scriptCbor`, `scriptDatum`, `scriptRedeemers` endpoints
- `blocksLatestTxs`, `blocksLatestTxsAll` endpoints

## [1.2.0]

### Added

- `accountsAddressesAssets` and `accountsAddressesAssetsAll` endpoints

## [1.1.0]

### Added

- `network` endpoint

## [1.0.2]

### Fixed

- `addressesTransactionsAll` empty params

## [1.0.1]

### Fixed

- Methods with `all` empty params

## [1.0.0]

### ⚠️ Breaking change

- Methods with `all` accept object as additional parameters

`{ batchSize: number; order: 'asc' | 'desc' }`

### Added

- asset utils `parseAsset`

## [0.9.4]

### Removed

- dotenv dependency
- deprecated methods addressesTxs and assetsTxs

## [0.9.3]

### Fixed

- ipfs path parameter

## [0.9.2]

### Fixed

- pagination types

## [0.9.1]

### Changed

- "@blockfrost/openapi": "0.1.24",

## [0.9.0]

### ⚠️ Breaking change

- all paginated endpoints now accept pagination object instead of parameters

```

count: number;
page: number;
order: 'asc' | 'desc';

```

### Added

- nutlink address endpoint
- IPFS Blockfrost API

### Fixed

- dependencies

## [0.8.0]

### Added

- nutlink endpoints

## [0.7.1] - 2021-06-30

### Added

- `txSubmit` param as hex

## [0.7.0] - 2021-06-23

### Added

- `retryCount` param
- `retryDelay` param
- axios `requestTimeout` params

## [0.6.0] - 2021-06-22

### Added

- `accountsMirs` and `txsMirs` endpoints = MIR support
- `accountsWithdrawals` endpoint

## [0.5.3] - 2021-06-22

### Fixed

- build

## [0.5.2] - 2021-06-21

### Fixed

- build

## [0.5.1] - 2021-06-21

### Fixed

- addressesTransactions cursor types

## [0.5.0] - 2021-06-19

### Added

- userAgent option

### Changed

- FABULOUS error responses
- openapi 0.1.19
- addressesTransactions endpoint to accept new from and to parameters (cursor)
- changed delay between requests to 1s on 429

## [0.4.1] - 2021-06-07

### Changed

- openapi 0.1.18

## [0.4.0] - 2021-06-06

### Added

- addressesTransactions endpoint
- addressesTransactionsAll endpoint
- assetsTransactions endpoint

## [0.3.1] - 2021-05-26

### Fixed

- addressesTxsAll errors

## [0.3.0] - 2021-05-21

### Added

- blocksTxsAll endpoint

## [0.2.6] - 2021-05-20

### Fixed

- health endpoint response

## [0.2.5] - 2021-05-19

### Changed

- openapi 0.1.15

## [0.2.4] - 2021-05-18

### Fixed

- addressesTxsAll pagination
- addressesUtxosAll pagination

## [0.2.3] - 2021-05-06

### Fixed

- array missing in some `/txs` types, see: https://github.com/blockfrost/openapi/releases/tag/v0.1.13

## [0.2.2] - 2021-05-02

### Fixed

- txSubmit header

## [0.2.1] - 2021-04-29

### Changed

- many properties / required properties, see: https://github.com/blockfrost/openapi/releases/tag/v0.1.12

## [0.2.0] - 2021-04-27

### Added

- addressesTxsAll
- addressesUtxosAll

### Fixed

- txSubmit param

## [0.1.0] - 2021-04-12

### Fixed

- testnet option

### Added

- new methods see: https://github.com/blockfrost/openapi/releases/tag/v0.1.8
- new methods see: https://github.com/blockfrost/openapi/releases/tag/v0.1.9
- missing `/tx/submit`
- missing `/assets`
- pagination to all endpoints (page,count,order)

## [0.0.6] - 2021-03-31

### Fixed

- npm bundle size

## [0.0.5] - 2021-03-31

### Unreleased

## [0.0.4] - 2021-03-31

### Unreleased

## [0.0.3] - 2021-03-31

### Unreleased

## [0.0.2] - 2021-03-31

### Fixed

- customBackend parameter

## [0.0.1] - 2021-03-26

### Added

- Initial commit

```

```
