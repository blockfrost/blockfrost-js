[@blockfrost/blockfrost-js](../README.md) / [Exports](../modules.md) / BlockFrostAPI

# Class: BlockFrostAPI

## Table of contents

### Constructors

- [constructor](BlockFrostAPI.md#constructor)

### Properties

- [accounts](BlockFrostAPI.md#accounts)
- [accountsAddresses](BlockFrostAPI.md#accountsaddresses)
- [accountsAddressesAll](BlockFrostAPI.md#accountsaddressesall)
- [accountsAddressesAssets](BlockFrostAPI.md#accountsaddressesassets)
- [accountsAddressesAssetsAll](BlockFrostAPI.md#accountsaddressesassetsall)
- [accountsAddressesTotal](BlockFrostAPI.md#accountsaddressestotal)
- [accountsDelegations](BlockFrostAPI.md#accountsdelegations)
- [accountsDelegationsAll](BlockFrostAPI.md#accountsdelegationsall)
- [accountsHistory](BlockFrostAPI.md#accountshistory)
- [accountsHistoryAll](BlockFrostAPI.md#accountshistoryall)
- [accountsMirs](BlockFrostAPI.md#accountsmirs)
- [accountsMirsAll](BlockFrostAPI.md#accountsmirsall)
- [accountsRegistrations](BlockFrostAPI.md#accountsregistrations)
- [accountsRegistrationsAll](BlockFrostAPI.md#accountsregistrationsall)
- [accountsRewards](BlockFrostAPI.md#accountsrewards)
- [accountsRewardsAll](BlockFrostAPI.md#accountsrewardsall)
- [accountsWithdrawals](BlockFrostAPI.md#accountswithdrawals)
- [accountsWithdrawalsAll](BlockFrostAPI.md#accountswithdrawalsall)
- [addresses](BlockFrostAPI.md#addresses)
- [addressesExtended](BlockFrostAPI.md#addressesextended)
- [addressesTotal](BlockFrostAPI.md#addressestotal)
- [addressesTransactions](BlockFrostAPI.md#addressestransactions)
- [addressesTransactionsAll](BlockFrostAPI.md#addressestransactionsall)
- [addressesUtxos](BlockFrostAPI.md#addressesutxos)
- [addressesUtxosAll](BlockFrostAPI.md#addressesutxosall)
- [addressesUtxosAsset](BlockFrostAPI.md#addressesutxosasset)
- [addressesUtxosAssetAll](BlockFrostAPI.md#addressesutxosassetall)
- [apiUrl](BlockFrostAPI.md#apiurl)
- [assets](BlockFrostAPI.md#assets)
- [assetsAddresses](BlockFrostAPI.md#assetsaddresses)
- [assetsById](BlockFrostAPI.md#assetsbyid)
- [assetsHistory](BlockFrostAPI.md#assetshistory)
- [assetsHistoryAll](BlockFrostAPI.md#assetshistoryall)
- [assetsPolicyById](BlockFrostAPI.md#assetspolicybyid)
- [assetsPolicyByIdAll](BlockFrostAPI.md#assetspolicybyidall)
- [assetsTransactions](BlockFrostAPI.md#assetstransactions)
- [blocks](BlockFrostAPI.md#blocks)
- [blocksAddresses](BlockFrostAPI.md#blocksaddresses)
- [blocksAddressesAll](BlockFrostAPI.md#blocksaddressesall)
- [blocksLatest](BlockFrostAPI.md#blockslatest)
- [blocksLatestTxs](BlockFrostAPI.md#blockslatesttxs)
- [blocksLatestTxsAll](BlockFrostAPI.md#blockslatesttxsall)
- [blocksNext](BlockFrostAPI.md#blocksnext)
- [blocksPrevious](BlockFrostAPI.md#blocksprevious)
- [blocksTxs](BlockFrostAPI.md#blockstxs)
- [blocksTxsAll](BlockFrostAPI.md#blockstxsall)
- [epochs](BlockFrostAPI.md#epochs)
- [epochsBlocks](BlockFrostAPI.md#epochsblocks)
- [epochsBlocksAll](BlockFrostAPI.md#epochsblocksall)
- [epochsBlocksByPoolId](BlockFrostAPI.md#epochsblocksbypoolid)
- [epochsBlocksByPoolIdAll](BlockFrostAPI.md#epochsblocksbypoolidall)
- [epochsLatest](BlockFrostAPI.md#epochslatest)
- [epochsLatestParameters](BlockFrostAPI.md#epochslatestparameters)
- [epochsNext](BlockFrostAPI.md#epochsnext)
- [epochsParameters](BlockFrostAPI.md#epochsparameters)
- [epochsPrevious](BlockFrostAPI.md#epochsprevious)
- [epochsStakes](BlockFrostAPI.md#epochsstakes)
- [epochsStakesAll](BlockFrostAPI.md#epochsstakesall)
- [epochsStakesByPoolId](BlockFrostAPI.md#epochsstakesbypoolid)
- [epochsStakesByPoolIdAll](BlockFrostAPI.md#epochsstakesbypoolidall)
- [genesis](BlockFrostAPI.md#genesis)
- [health](BlockFrostAPI.md#health)
- [healthClock](BlockFrostAPI.md#healthclock)
- [mempool](BlockFrostAPI.md#mempool)
- [mempoolAll](BlockFrostAPI.md#mempoolall)
- [mempoolTx](BlockFrostAPI.md#mempooltx)
- [metadataTxsLabel](BlockFrostAPI.md#metadatatxslabel)
- [metadataTxsLabelCbor](BlockFrostAPI.md#metadatatxslabelcbor)
- [metadataTxsLabels](BlockFrostAPI.md#metadatatxslabels)
- [metrics](BlockFrostAPI.md#metrics)
- [metricsEndpoints](BlockFrostAPI.md#metricsendpoints)
- [network](BlockFrostAPI.md#network)
- [nutlinkAddress](BlockFrostAPI.md#nutlinkaddress)
- [nutlinkAddressTicker](BlockFrostAPI.md#nutlinkaddressticker)
- [nutlinkAddressTickerAll](BlockFrostAPI.md#nutlinkaddresstickerall)
- [nutlinkAddressTickers](BlockFrostAPI.md#nutlinkaddresstickers)
- [nutlinkAddressTickersAll](BlockFrostAPI.md#nutlinkaddresstickersall)
- [nutlinkTickers](BlockFrostAPI.md#nutlinktickers)
- [nutlinkTickersAll](BlockFrostAPI.md#nutlinktickersall)
- [poolMetadata](BlockFrostAPI.md#poolmetadata)
- [pools](BlockFrostAPI.md#pools)
- [poolsAll](BlockFrostAPI.md#poolsall)
- [poolsById](BlockFrostAPI.md#poolsbyid)
- [poolsByIdBlocks](BlockFrostAPI.md#poolsbyidblocks)
- [poolsByIdDelegators](BlockFrostAPI.md#poolsbyiddelegators)
- [poolsByIdHistory](BlockFrostAPI.md#poolsbyidhistory)
- [poolsByIdRelays](BlockFrostAPI.md#poolsbyidrelays)
- [poolsByIdUpdates](BlockFrostAPI.md#poolsbyidupdates)
- [poolsExtended](BlockFrostAPI.md#poolsextended)
- [poolsExtendedAll](BlockFrostAPI.md#poolsextendedall)
- [poolsRetired](BlockFrostAPI.md#poolsretired)
- [poolsRetiring](BlockFrostAPI.md#poolsretiring)
- [root](BlockFrostAPI.md#root)
- [scripts](BlockFrostAPI.md#scripts)
- [scriptsByHash](BlockFrostAPI.md#scriptsbyhash)
- [scriptsCbor](BlockFrostAPI.md#scriptscbor)
- [scriptsDatum](BlockFrostAPI.md#scriptsdatum)
- [scriptsDatumCbor](BlockFrostAPI.md#scriptsdatumcbor)
- [scriptsJson](BlockFrostAPI.md#scriptsjson)
- [scriptsRedeemers](BlockFrostAPI.md#scriptsredeemers)
- [txSubmit](BlockFrostAPI.md#txsubmit)
- [txs](BlockFrostAPI.md#txs)
- [txsDelegations](BlockFrostAPI.md#txsdelegations)
- [txsMetadata](BlockFrostAPI.md#txsmetadata)
- [txsMetadataCbor](BlockFrostAPI.md#txsmetadatacbor)
- [txsMirs](BlockFrostAPI.md#txsmirs)
- [txsPoolRetires](BlockFrostAPI.md#txspoolretires)
- [txsPoolUpdates](BlockFrostAPI.md#txspoolupdates)
- [txsRedeemers](BlockFrostAPI.md#txsredeemers)
- [txsStakes](BlockFrostAPI.md#txsstakes)
- [txsUtxos](BlockFrostAPI.md#txsutxos)
- [txsWithdrawals](BlockFrostAPI.md#txswithdrawals)

## Constructors

### constructor

• **new BlockFrostAPI**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Options` |

#### Defined in

[src/BlockFrostAPI.ts:164](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L164)

## Properties

### accounts

• **accounts**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`) => `Promise`<`components`[``"schemas"``][``"account_content"``]\> = `accounts`

#### Type declaration

▸ (`this`, `stakeAddress`): `Promise`<`components`[``"schemas"``][``"account_content"``]\>

Obtains information about a specific stake account.

**`See`**

[API docs for Specific account address](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_content"``]\>

Information about a specific stake account.

#### Defined in

[src/BlockFrostAPI.ts:199](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L199)

___

### accountsAddresses

• **accountsAddresses**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_addresses_content"``]\> = `accountsAddresses`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_addresses_content"``]\>

Obtains information about the addresses of a specific account.

**`See`**

[API docs for Account associated addresses](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses/get)

**`Remarks`**

Be careful, as an account could be part of a mangled address and does not necessarily mean
the addresses are owned by user as the account.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_addresses_content"``]\>

Information about the addresses of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:212](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L212)

___

### accountsAddressesAll

• **accountsAddressesAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_addresses_content"``]\> = `accountsAddressesAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_addresses_content"``]\>

Obtains information about all addresses of a specific account.

**`See`**

[API docs for Account associated addresses](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses/get)

**`Remarks`**

Be careful, as an account could be part of a mangled address and does not necessarily mean
the addresses are owned by user as the account.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_addresses_content"``]\>

Information about the addresses of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:213](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L213)

___

### accountsAddressesAssets

• **accountsAddressesAssets**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_addresses_assets"``]\> = `accountsAddressesAssets`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_addresses_assets"``]\>

Obtains information about assets associated with addresses of a specific account.

**`See`**

[API docs for Assets associated with the account addresses](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses~1assets/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_addresses_assets"``]\>

Assets associated with the account addresses

#### Defined in

[src/BlockFrostAPI.ts:214](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L214)

___

### accountsAddressesAssetsAll

• **accountsAddressesAssetsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_addresses_assets"``]\> = `accountsAddressesAssetsAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_addresses_assets"``]\>

Obtains information about all assets associated with addresses of a specific account.

**`See`**

[API docs for Assets associated with the account addresses](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses~1assets/get)

**`Remarks`**

Variant of `accountsAddressesAssets` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_addresses_assets"``]\>

Assets associated with the account addresses

#### Defined in

[src/BlockFrostAPI.ts:215](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L215)

___

### accountsAddressesTotal

• **accountsAddressesTotal**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`) => `Promise`<`components`[``"schemas"``][``"account_addresses_total"``]\> = `accountsAddressesTotal`

#### Type declaration

▸ (`this`, `stakeAddress`): `Promise`<`components`[``"schemas"``][``"account_addresses_total"``]\>

Obtains summed details about all addresses associated with a given account.

**`See`**

[API docs for Detailed information about account associated addresses](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1addresses~1total/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_addresses_total"``]\>

Summed details of the addresses associated with a given account

#### Defined in

[src/BlockFrostAPI.ts:216](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L216)

___

### accountsDelegations

• **accountsDelegations**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_delegation_content"``]\> = `accountsDelegations`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_delegation_content"``]\>

Obtains information about the delegation of a specific account.

**`See`**

[API docs for Account delegation history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1delegations/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_delegation_content"``]\>

Information about the delegation of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:200](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L200)

___

### accountsDelegationsAll

• **accountsDelegationsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_delegation_content"``]\> = `accountsDelegationsAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_delegation_content"``]\>

Obtains information about all delegations of a specific account.

**`See`**

[API docs for Account delegation history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1delegations/get)

**`Remarks`**

Variant of `accountsDelegations` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_delegation_content"``]\>

Information about the delegation of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:201](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L201)

___

### accountsHistory

• **accountsHistory**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_history_content"``]\> = `accountsHistory`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_history_content"``]\>

Obtains information about the history of a specific account.

**`See`**

[API docs for Account history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1history/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_history_content"``]\>

Information about the history of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:206](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L206)

___

### accountsHistoryAll

• **accountsHistoryAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_history_content"``]\> = `accountsHistoryAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_history_content"``]\>

Obtains information about the whole history of a specific account.

**`See`**

[API docs for Account history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1history/get)

**`Remarks`**

Variant of `accountsHistory` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_history_content"``]\>

Information about the history of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:207](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L207)

___

### accountsMirs

• **accountsMirs**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_mir_content"``]\> = `accountsMirs`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_mir_content"``]\>

Obtains information about the MIRs of a specific account.

**`See`**

[API docs for Account MIR history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1mirs/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_mir_content"``]\>

Information about the MIRs of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:210](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L210)

___

### accountsMirsAll

• **accountsMirsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_mir_content"``]\> = `accountsMirsAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_mir_content"``]\>

Obtains information about the MIRs of a specific account.

**`See`**

[API docs for Account MIR history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1mirs/get)

**`Remarks`**

Variant of `accountsMirs` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_mir_content"``]\>

Information about the MIRs of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:211](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L211)

___

### accountsRegistrations

• **accountsRegistrations**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_registration_content"``]\> = `accountsRegistrations`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_registration_content"``]\>

Obtains information about the registrations and deregistrations of a specific account.

**`See`**

[API docs for Account registration history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1registrations/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_registration_content"``]\>

Information about the registrations and deregistrations of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:202](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L202)

___

### accountsRegistrationsAll

• **accountsRegistrationsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_registration_content"``]\> = `accountsRegistrationsAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_registration_content"``]\>

Obtains information about the registrations and deregistrations of a specific account.

**`See`**

[API docs for Account registration history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1registrations/get)

**`Remarks`**

Variant of `accountsRegistrations` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_registration_content"``]\>

Information about the registrations and deregistrations of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:203](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L203)

___

### accountsRewards

• **accountsRewards**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_reward_content"``]\> = `accountsRewards`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_reward_content"``]\>

Obtains information about the reward history of a specific account.

**`See`**

[API docs for Account reward history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1rewards/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_reward_content"``]\>

Information about the history of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:204](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L204)

___

### accountsRewardsAll

• **accountsRewardsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_reward_content"``]\> = `accountsRewardsAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_reward_content"``]\>

Obtains information about the whole reward history of a specific account.

**`See`**

[API docs for Account reward history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1rewards/get)

**`Remarks`**

Variant of `accountsRewards` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_reward_content"``]\>

Information about the reward history of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:205](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L205)

___

### accountsWithdrawals

• **accountsWithdrawals**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"account_withdrawal_content"``]\> = `accountsWithdrawals`

#### Type declaration

▸ (`this`, `stakeAddress`, `pagination?`): `Promise`<`components`[``"schemas"``][``"account_withdrawal_content"``]\>

Obtains information about the withdrawals of a specific account.

**`See`**

[API docs for Account withdrawal history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1withdrawals/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_withdrawal_content"``]\>

Information about the withdrawals of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:208](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L208)

___

### accountsWithdrawalsAll

• **accountsWithdrawalsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `stakeAddress`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"account_withdrawal_content"``]\> = `accountsWithdrawalsAll`

#### Type declaration

▸ (`this`, `stakeAddress`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"account_withdrawal_content"``]\>

Obtains information about all withdrawals of a specific account.

**`See`**

[API docs for Account withdrawal history](https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1%7Bstake_address%7D~1withdrawals/get)

**`Remarks`**

Variant of `accountsWithdrawals` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `stakeAddress` | `string` | Bech32 stake address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"account_withdrawal_content"``]\>

Information about all withdrawals of a specific account.

#### Defined in

[src/BlockFrostAPI.ts:209](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L209)

___

### addresses

• **addresses**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`) => `Promise`<`components`[``"schemas"``][``"address_content"``]\> = `addresses`

#### Type declaration

▸ (`this`, `address`): `Promise`<`components`[``"schemas"``][``"address_content"``]\>

Obtains information about a specific address.

**`See`**

[API docs for Specific address](https://docs.blockfrost.io/#tag/Cardano-Addresses|)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_content"``]\>

Information about a specific stake account.

#### Defined in

[src/BlockFrostAPI.ts:227](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L227)

___

### addressesExtended

• **addressesExtended**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`) => `Promise`<`components`[``"schemas"``][``"address_content_extended"``]\> = `addressesExtended`

#### Type declaration

▸ (`this`, `address`): `Promise`<`components`[``"schemas"``][``"address_content_extended"``]\>

Obtains extended information about a specific address.

**`See`**

[API docs for Extended information of a specific address](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~extended/get)

**`Remarks`**

Similar to `addresses` with the addition of `has_nft_onchain_metadata` and `decimals` fields in asset amounts.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_content_extended"``]\>

Extended information about a specific address

#### Defined in

[src/BlockFrostAPI.ts:229](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L229)

___

### addressesTotal

• **addressesTotal**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`) => `Promise`<`components`[``"schemas"``][``"address_content_total"``]\> = `addressesTotal`

#### Type declaration

▸ (`this`, `address`): `Promise`<`components`[``"schemas"``][``"address_content_total"``]\>

Obtains aggregated details about transactions for a specific address
(received assets, sent assets, number of transactions).

**`See`**

[API docs for Address details](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1total/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_content_total"``]\>

Aggregated details about an address (received assets, sent assets, number of transactions)

#### Defined in

[src/BlockFrostAPI.ts:228](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L228)

___

### addressesTransactions

• **addressesTransactions**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `pagination?`: `PaginationOptions`, `additionalOptions?`: `AdditionalEndpointOptions`) => `Promise`<`components`[``"schemas"``][``"address_transactions_content"``]\> = `addressesTransactions`

#### Type declaration

▸ (`this`, `address`, `pagination?`, `additionalOptions?`): `Promise`<`components`[``"schemas"``][``"address_transactions_content"``]\>

Obtains transactions on the address.

**`See`**

[API docs for Address transactions](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1transactions/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |
| `additionalOptions?` | `AdditionalEndpointOptions` | Optional, Additional options such as cursor pagination |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_transactions_content"``]\>

Extended information about a specific address

#### Defined in

[src/BlockFrostAPI.ts:230](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L230)

___

### addressesTransactionsAll

• **addressesTransactionsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `allMethodOptions?`: `AllMethodOptions`, `additionalOptions?`: `AdditionalEndpointOptions`) => `Promise`<`components`[``"schemas"``][``"address_transactions_content"``]\> = `addressesTransactionsAll`

#### Type declaration

▸ (`this`, `address`, `allMethodOptions?`, `additionalOptions?`): `Promise`<`components`[``"schemas"``][``"address_transactions_content"``]\>

Obtains all transactions on the address.

**`See`**

[API docs for Address transactions](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1transactions/get)

**`Remarks`**

Variant of `addressesTransactions` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |
| `additionalOptions?` | `AdditionalEndpointOptions` | Optional, Additional options such as cursor pagination |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_transactions_content"``]\>

Extended information about a specific address

#### Defined in

[src/BlockFrostAPI.ts:231](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L231)

___

### addressesUtxos

• **addressesUtxos**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\> = `addressesUtxos`

#### Type declaration

▸ (`this`, `address`, `pagination?`): `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

Obtains UTXOs of the address

**`See`**

[API docs for Address UTXOs](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

UTXOs of the address

#### Defined in

[src/BlockFrostAPI.ts:232](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L232)

___

### addressesUtxosAll

• **addressesUtxosAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\> = `addressesUtxosAll`

#### Type declaration

▸ (`this`, `address`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

Obtains all UTXOs of the address

**`See`**

[API docs for Address UTXOs](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos/get)

**`Remarks`**

Variant of `addressesUtxos` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

UTXOs of the address

#### Defined in

[src/BlockFrostAPI.ts:233](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L233)

___

### addressesUtxosAsset

• **addressesUtxosAsset**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `asset`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\> = `addressesUtxosAsset`

#### Type declaration

▸ (`this`, `address`, `asset`, `pagination?`): `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

Obtains address's UTXOs containing a given asset (paginated)

**`See`**

[API docs for Address UTXOs of a given asset](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos~1%7Basset%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |
| `asset` | `string` | Concatenation of the policy ID and hex-encoded asset name |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

List of the address's utxos containing a given asset

#### Defined in

[src/BlockFrostAPI.ts:234](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L234)

___

### addressesUtxosAssetAll

• **addressesUtxosAssetAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `asset`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\> = `addressesUtxosAssetAll`

#### Type declaration

▸ (`this`, `address`, `asset`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

Obtains all address's UTXOs containing a given asset

**`See`**

[API docs for Address UTXOs of a given asset](https://docs.blockfrost.io/#tag/Cardano-Addresses/paths/~1addresses~1%7Baddress%7D~1utxos~1%7Basset%7D/get)

**`Remarks`**

Variant of `addressesUtxosAsset` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `address` | `string` | Bech32 address |
| `asset` | `string` | Concatenation of the policy ID and hex-encoded asset name |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"address_utxo_content"``]\>

List of the address's utxos containing a given asset

#### Defined in

[src/BlockFrostAPI.ts:235](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L235)

___

### apiUrl

• **apiUrl**: `string`

#### Defined in

[src/BlockFrostAPI.ts:152](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L152)

___

### assets

• **assets**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"assets"``]\> = `assets`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"assets"``]\>

Obtains list of assets.

**`See`**

[API docs for Assets](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets/get)

**`Remarks`**

If an asset is completely burned, it will stay on the list with quantity 0 (order of assets is immutable).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"assets"``]\>

List of assets

#### Defined in

[src/BlockFrostAPI.ts:218](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L218)

___

### assetsAddresses

• **assetsAddresses**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `asset`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"asset_addresses"``]\> = `assetsAddresses`

#### Type declaration

▸ (`this`, `asset`, `pagination?`): `Promise`<`components`[``"schemas"``][``"asset_addresses"``]\>

Obtains list of a addresses containing a specific asset.

**`See`**

[API docs for Asset addresses](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1addresses/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `asset` | `string` | Concatenation of the policy ID and hex-encoded asset name |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"asset_addresses"``]\>

List of a addresses containing a specific asset.

#### Defined in

[src/BlockFrostAPI.ts:223](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L223)

___

### assetsById

• **assetsById**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `asset`: `string`) => `Promise`<`components`[``"schemas"``][``"asset"``]\> = `assetsById`

#### Type declaration

▸ (`this`, `asset`): `Promise`<`components`[``"schemas"``][``"asset"``]\>

Obtains information about a specific asset.

**`See`**

[API docs for Asset](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `asset` | `string` | Concatenation of the policy ID and hex-encoded asset name |

##### Returns

`Promise`<`components`[``"schemas"``][``"asset"``]\>

Information about a specific asset.

#### Defined in

[src/BlockFrostAPI.ts:219](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L219)

___

### assetsHistory

• **assetsHistory**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `asset`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"asset_history"``]\> = `assetsHistory`

#### Type declaration

▸ (`this`, `asset`, `pagination?`): `Promise`<`components`[``"schemas"``][``"asset_history"``]\>

Obtains history of a specific asset.

**`See`**

[API docs for Asset history](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1history/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `asset` | `string` | Concatenation of the policy ID and hex-encoded asset name |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"asset_history"``]\>

History of a specific asset.

#### Defined in

[src/BlockFrostAPI.ts:220](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L220)

___

### assetsHistoryAll

• **assetsHistoryAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `asset`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"asset_history"``]\> = `assetsHistoryAll`

#### Type declaration

▸ (`this`, `asset`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"asset_history"``]\>

Obtains whole history of a specific asset.

**`See`**

[API docs for Asset history](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1history/get)

**`Remarks`**

Variant of `assetsHistory` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `asset` | `string` | Concatenation of the policy ID and hex-encoded asset name |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"asset_history"``]\>

Whole history of a specific asset.

#### Defined in

[src/BlockFrostAPI.ts:221](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L221)

___

### assetsPolicyById

• **assetsPolicyById**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `policyId`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"asset_policy"``]\> = `assetsPolicyById`

#### Type declaration

▸ (`this`, `policyId`, `pagination?`): `Promise`<`components`[``"schemas"``][``"asset_policy"``]\>

Obtains list of assets minted under a specific policy.

**`See`**

[API docs for Assets of a specific policy](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1policy~1%7Bpolicy_id%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `policyId` | `string` | Specific policy ID |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"asset_policy"``]\>

List of assets minted under a specific policy.

#### Defined in

[src/BlockFrostAPI.ts:224](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L224)

___

### assetsPolicyByIdAll

• **assetsPolicyByIdAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `policyId`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"asset_policy"``]\> = `assetsPolicyByIdAll`

#### Type declaration

▸ (`this`, `policyId`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"asset_policy"``]\>

Obtains list of all assets minted under a specific policy.

**`See`**

[API docs for Assets of a specific policy](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1policy~1%7Bpolicy_id%7D/get)

**`Remarks`**

Variant of `assetsPolicyById` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `policyId` | `string` | Specific policy ID |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"asset_policy"``]\>

List of asset minted under a specific policy.

#### Defined in

[src/BlockFrostAPI.ts:225](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L225)

___

### assetsTransactions

• **assetsTransactions**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `asset`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"asset_transactions"``]\> = `assetsTransactions`

#### Type declaration

▸ (`this`, `asset`, `pagination?`): `Promise`<`components`[``"schemas"``][``"asset_transactions"``]\>

Lists of transactions of a specific asset.

**`See`**

[API docs for Asset transactions](https://docs.blockfrost.io/#tag/Cardano-Assets/paths/~1assets~1%7Basset%7D~1transactions/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `asset` | `string` | Concatenation of the policy ID and hex-encoded asset name |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"asset_transactions"``]\>

List of a specific asset transactions.

#### Defined in

[src/BlockFrostAPI.ts:222](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L222)

___

### blocks

• **blocks**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hashOrNumber`: `HashOrNumber`) => `Promise`<`components`[``"schemas"``][``"block_content"``]\> = `blocks`

#### Type declaration

▸ (`this`, `hashOrNumber`): `Promise`<`components`[``"schemas"``][``"block_content"``]\>

Obtains a specific block.

**`See`**

[API docs for Latest block](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hashOrNumber` | `HashOrNumber` | Hash or number of the requested block |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content"``]\>

Specific block

#### Defined in

[src/BlockFrostAPI.ts:237](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L237)

___

### blocksAddresses

• **blocksAddresses**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hashOrNumber`: `HashOrNumber`, `pagination?`: `Omit`<`PaginationOptions`, ``"order"``\>) => `Promise`<`components`[``"schemas"``][``"block_content_addresses"``]\> = `blocksAddresses`

#### Type declaration

▸ (`this`, `hashOrNumber`, `pagination?`): `Promise`<`components`[``"schemas"``][``"block_content_addresses"``]\>

Obtains list of addresses affected in the specified block with additional information.

**`Remarks`**

Sorted by the bech32 address, in ascending order.

**`See`**

[API docs for Addresses affected in a specific block](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1addresses/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hashOrNumber` | `HashOrNumber` | Hash or number of the requested block |
| `pagination?` | `Omit`<`PaginationOptions`, ``"order"``\> | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_addresses"``]\>

List of addresses affected in the specified block

#### Defined in

[src/BlockFrostAPI.ts:245](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L245)

___

### blocksAddressesAll

• **blocksAddressesAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hashOrNumber`: `string` \| `number`, `allMethodOptions?`: `Omit`<`AllMethodOptions`, ``"order"``\>) => `Promise`<`components`[``"schemas"``][``"block_content_addresses"``]\> = `blocksAddressesAll`

#### Type declaration

▸ (`this`, `hashOrNumber`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"block_content_addresses"``]\>

Obtains list of addresses affected in the specified block with additional information.

**`See`**

[API docs for Addresses affected in a specific block](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1addresses/get)

**`Remarks`**

Sorted by the bech32 address, in ascending order.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hashOrNumber` | `string` \| `number` | Hash or number of the requested block |
| `allMethodOptions?` | `Omit`<`AllMethodOptions`, ``"order"``\> | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_addresses"``]\>

List of addresses affected in the specified block

#### Defined in

[src/BlockFrostAPI.ts:246](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L246)

___

### blocksLatest

• **blocksLatest**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<`components`[``"schemas"``][``"block_content"``]\> = `blocksLatest`

#### Type declaration

▸ (`this`): `Promise`<`components`[``"schemas"``][``"block_content"``]\>

Obtains the specific block available to the backends, also known as the tip of the blockchain.

**`See`**

[API docs for Latest block](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content"``]\>

latest block

#### Defined in

[src/BlockFrostAPI.ts:238](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L238)

___

### blocksLatestTxs

• **blocksLatestTxs**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\> = `blocksLatestTxs`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

Obtains transactions within the latest block.

**`See`**

[API docs for Latest block transactions](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest~1txs/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

transactions within the latest block

#### Defined in

[src/BlockFrostAPI.ts:239](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L239)

___

### blocksLatestTxsAll

• **blocksLatestTxsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\> = `blocksLatestTxsAll`

#### Type declaration

▸ (`this`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

Obtains all transactions within the latest block.

**`See`**

[API docs for Latest block transactions](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest~1txs/get)

**`Remarks`**

Variant of `blocksLatestTxs` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

transactions within the latest block

#### Defined in

[src/BlockFrostAPI.ts:240](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L240)

___

### blocksNext

• **blocksNext**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hashOrNumber`: `HashOrNumber`, `pagination?`: `Omit`<`PaginationOptions`, ``"order"``\>) => `Promise`<`components`[``"schemas"``][``"block_content_array"``]\> = `blocksNext`

#### Type declaration

▸ (`this`, `hashOrNumber`, `pagination?`): `Promise`<`components`[``"schemas"``][``"block_content_array"``]\>

Obtains list of blocks following a specific block.

**`See`**

[API docs for Listing of next blocks](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1next/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hashOrNumber` | `HashOrNumber` | Hash or number of the requested block |
| `pagination?` | `Omit`<`PaginationOptions`, ``"order"``\> | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_array"``]\>

List of blocks following a specific block

#### Defined in

[src/BlockFrostAPI.ts:241](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L241)

___

### blocksPrevious

• **blocksPrevious**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hashOrNumber`: `HashOrNumber`, `pagination?`: `Omit`<`PaginationOptions`, ``"order"``\>) => `Promise`<`components`[``"schemas"``][``"block_content_array"``]\> = `blocksPrevious`

#### Type declaration

▸ (`this`, `hashOrNumber`, `pagination?`): `Promise`<`components`[``"schemas"``][``"block_content_array"``]\>

Obtains list of blocks preceding a specific block.

**`See`**

[API docs for Listing of previous blocks](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~previous/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hashOrNumber` | `HashOrNumber` | Hash or number of the requested block |
| `pagination?` | `Omit`<`PaginationOptions`, ``"order"``\> | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_array"``]\>

List of blocks preceding a specific block

#### Defined in

[src/BlockFrostAPI.ts:242](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L242)

___

### blocksTxs

• **blocksTxs**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hashOrNumber`: `HashOrNumber`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\> = `blocksTxs`

#### Type declaration

▸ (`this`, `hashOrNumber`, `pagination?`): `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

Obtains transactions within the specific block.

**`See`**

[API docs for Block transactions](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1txs/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hashOrNumber` | `HashOrNumber` | Hash or number of the requested block |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

Transactions within the specific block

#### Defined in

[src/BlockFrostAPI.ts:243](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L243)

___

### blocksTxsAll

• **blocksTxsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hashOrNumber`: `string` \| `number`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\> = `blocksTxsAll`

#### Type declaration

▸ (`this`, `hashOrNumber`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

Obtains all transactions within the specific block.

**`See`**

[API docs for Block transactions](https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1%7Bhash_or_number%7D~1txs/get)

**`Remarks`**

Variant of `blocksTxs` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hashOrNumber` | `string` \| `number` | Hash or number of the requested block |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"block_content_txs"``]\>

All transactions within the specific block

#### Defined in

[src/BlockFrostAPI.ts:244](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L244)

___

### epochs

• **epochs**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`) => `Promise`<`components`[``"schemas"``][``"epoch_content"``]\> = `epochs`

#### Type declaration

▸ (`this`, `number`): `Promise`<`components`[``"schemas"``][``"epoch_content"``]\>

Obtains information about a specific epoch.

**`See`**

[API docs for Specific epoch](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_content"``]\>

Information about a specific epoch.

#### Defined in

[src/BlockFrostAPI.ts:248](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L248)

___

### epochsBlocks

• **epochsBlocks**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\> = `epochsBlocks`

#### Type declaration

▸ (`this`, `number`, `pagination?`): `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Obtains the blocks minted for the epoch specified.

**`See`**

[API docs for Block distribution](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Blocks minted for the epoch specified

#### Defined in

[src/BlockFrostAPI.ts:249](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L249)

___

### epochsBlocksAll

• **epochsBlocksAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\> = `epochsBlocksAll`

#### Type declaration

▸ (`this`, `number`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Obtains the blocks minted for the epoch specified.

**`See`**

[API docs for Block distribution](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks/get)

**`Remarks`**

Variant of `epochsBlocks` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Blocks minted for the epoch specified

#### Defined in

[src/BlockFrostAPI.ts:250](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L250)

___

### epochsBlocksByPoolId

• **epochsBlocksByPoolId**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `poolId`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\> = `epochsBlocksByPoolId`

#### Type declaration

▸ (`this`, `number`, `poolId`, `pagination?`): `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Obtains the blocks minted for the epoch specified by stake pool.

**`See`**

[API docs for Block distribution by pool](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks~1%7Bpool_id%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `poolId` | `string` | Stake pool ID to filter |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Blocks minted for the epoch specified by stake pool

#### Defined in

[src/BlockFrostAPI.ts:251](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L251)

___

### epochsBlocksByPoolIdAll

• **epochsBlocksByPoolIdAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `poolId`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\> = `epochsBlocksByPoolIdAll`

#### Type declaration

▸ (`this`, `number`, `poolId`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Obtains the blocks minted for the epoch specified by stake pool.

**`See`**

[API docs for Block distribution by pool](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1blocks~1%7Bpool_id%7D/get)

**`Remarks`**

Variant of `epochsBlocksByPoolId` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `poolId` | `string` | Stake pool ID to filter |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_block_content"``]\>

Blocks minted for the epoch specified by stake pool

#### Defined in

[src/BlockFrostAPI.ts:252](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L252)

___

### epochsLatest

• **epochsLatest**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<`components`[``"schemas"``][``"epoch_content"``]\> = `epochsLatest`

#### Type declaration

▸ (`this`): `Promise`<`components`[``"schemas"``][``"epoch_content"``]\>

Obtains the information about the latest, therefore current, epoch.

**`See`**

[API docs for Latest epoch](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1latest/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_content"``]\>

Information about the current epoch.

#### Defined in

[src/BlockFrostAPI.ts:253](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L253)

___

### epochsLatestParameters

• **epochsLatestParameters**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<`components`[``"schemas"``][``"epoch_param_content"``]\> = `epochsLatestParameters`

#### Type declaration

▸ (`this`): `Promise`<`components`[``"schemas"``][``"epoch_param_content"``]\>

Obtains the protocol parameters for the latest epoch.

**`See`**

[API docs for Latest epoch protocol parameters](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1latest~1parameters/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_param_content"``]\>

Protocol parameters for the latest epoch

#### Defined in

[src/BlockFrostAPI.ts:256](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L256)

___

### epochsNext

• **epochsNext**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `pagination?`: `Omit`<`PaginationOptions`, ``"order"``\>) => `Promise`<`components`[``"schemas"``][``"epoch_content_array"``]\> = `epochsNext`

#### Type declaration

▸ (`this`, `number`, `pagination?`): `Promise`<`components`[``"schemas"``][``"epoch_content_array"``]\>

Obtains a list of epochs following a specific epoch.

**`See`**

[API docs for Listing of next epochs](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1next/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `pagination?` | `Omit`<`PaginationOptions`, ``"order"``\> | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_content_array"``]\>

List of epochs following a specific epoch.

#### Defined in

[src/BlockFrostAPI.ts:254](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L254)

___

### epochsParameters

• **epochsParameters**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`) => `Promise`<`components`[``"schemas"``][``"epoch_param_content"``]\> = `epochsParameters`

#### Type declaration

▸ (`this`, `number`): `Promise`<`components`[``"schemas"``][``"epoch_param_content"``]\>

Obtains the protocol parameters for the epoch specified.

**`See`**

[API docs for Protocol Parameters](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1parameters/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_param_content"``]\>

Protocol parameters for the epoch specified

#### Defined in

[src/BlockFrostAPI.ts:255](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L255)

___

### epochsPrevious

• **epochsPrevious**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `pagination?`: `Omit`<`PaginationOptions`, ``"order"``\>) => `Promise`<`components`[``"schemas"``][``"epoch_content_array"``]\> = `epochsPrevious`

#### Type declaration

▸ (`this`, `number`, `pagination?`): `Promise`<`components`[``"schemas"``][``"epoch_content_array"``]\>

Obtains a list of epochs preceding a specific epoch.

**`See`**

[API docs for Listing of next epochs](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1previous/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `pagination?` | `Omit`<`PaginationOptions`, ``"order"``\> | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_content_array"``]\>

List of epochs preceding a specific epoch.

#### Defined in

[src/BlockFrostAPI.ts:257](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L257)

___

### epochsStakes

• **epochsStakes**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_stake_content"``]\> = `epochsStakes`

#### Type declaration

▸ (`this`, `number`, `pagination?`): `Promise`<`components`[``"schemas"``][``"epoch_stake_content"``]\>

Obtains the active stake distribution for the specified epoch.

**`See`**

[API docs for Stake distribution](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_stake_content"``]\>

Active stake distribution for the specified epoch

#### Defined in

[src/BlockFrostAPI.ts:258](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L258)

___

### epochsStakesAll

• **epochsStakesAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_stake_content"``]\> = `epochsStakesAll`

#### Type declaration

▸ (`this`, `number`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"epoch_stake_content"``]\>

Obtains the whole active stake distribution for the specified epoch.

**`See`**

[API docs for Stake distribution](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get)

**`Remarks`**

Variant of `epochsStakes` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_stake_content"``]\>

Active stake distribution for the specified epoch

#### Defined in

[src/BlockFrostAPI.ts:259](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L259)

___

### epochsStakesByPoolId

• **epochsStakesByPoolId**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `poolId`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_stake_pool_content"``]\> = `epochsStakesByPoolId`

#### Type declaration

▸ (`this`, `number`, `poolId`, `pagination?`): `Promise`<`components`[``"schemas"``][``"epoch_stake_pool_content"``]\>

Obtains the active stake distribution for the epoch specified by stake pool.

**`See`**

[API docs for Stake distribution](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `poolId` | `string` | Stake pool ID to filter |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_stake_pool_content"``]\>

Active stake distribution for the epoch specified by stake pool

#### Defined in

[src/BlockFrostAPI.ts:260](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L260)

___

### epochsStakesByPoolIdAll

• **epochsStakesByPoolIdAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `number`: `number`, `poolId`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"epoch_stake_pool_content"``]\> = `epochsStakesByPoolIdAll`

#### Type declaration

▸ (`this`, `number`, `poolId`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"epoch_stake_pool_content"``]\>

Obtains the whole active stake distribution for the epoch specified by stake pool.

**`See`**

[API docs for Stake distribution](https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1%7Bnumber%7D~1stakes/get)

**`Remarks`**

Variant of `epochsStakesByPoolId` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `number` | `number` | Number of the epoch |
| `poolId` | `string` | Stake pool ID to filter |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"epoch_stake_pool_content"``]\>

Active stake distribution for the epoch specified by stake pool

#### Defined in

[src/BlockFrostAPI.ts:261](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L261)

___

### genesis

• **genesis**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<`components`[``"schemas"``][``"genesis_content"``]\> = `genesis`

#### Type declaration

▸ (`this`): `Promise`<`components`[``"schemas"``][``"genesis_content"``]\>

Obtains the information about blockchain genesis.

**`See`**

[API docs for Blockchain genesis](https://docs.blockfrost.io/#tag/Cardano-Ledger/paths/~1genesis/get|)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<`components`[``"schemas"``][``"genesis_content"``]\>

Genesis parameters

#### Defined in

[src/BlockFrostAPI.ts:265](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L265)

___

### health

• **health**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<{ `is_healthy`: `boolean`  }\> = `health`

#### Type declaration

▸ (`this`): `Promise`<{ `is_healthy`: `boolean`  }\>

Obtains backend status

**`Remarks`**

Your application should handle situations when backend for the given chain is unavailable.

**`See`**

[API docs for Backend health status](https://docs.blockfrost.io/#tag/Health/paths/~1health/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<{ `is_healthy`: `boolean`  }\>

Backend status in the format `{is_healthy: boolean}`

#### Defined in

[src/BlockFrostAPI.ts:263](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L263)

___

### healthClock

• **healthClock**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<{ `server_time`: `number`  }\> = `healthClock`

#### Type declaration

▸ (`this`): `Promise`<{ `server_time`: `number`  }\>

Obtains the current UNIX time. Your application might use this to verify if the client clock is not out of sync.

**`See`**

[API docs for Current backend time](https://docs.blockfrost.io/#tag/Health/paths/~1health~1clock/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<{ `server_time`: `number`  }\>

Unix time in the format `{server_time: number}`

#### Defined in

[src/BlockFrostAPI.ts:264](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L264)

___

### mempool

• **mempool**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"mempool_content"``]\> = `mempool`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"mempool_content"``]\>

Obtains transactions that are currently stored in Blockfrost mempool, waiting to be included in a newly minted block.

**`Remarks`**

Returns only transactions submitted via Blockfrost.io.

**`See`**

[API docs for Mempool](https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"mempool_content"``]\>

List of transactions in Blockfrost Mempool

#### Defined in

[src/BlockFrostAPI.ts:267](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L267)

___

### mempoolAll

• **mempoolAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"mempool_content"``]\> = `mempoolAll`

#### Type declaration

▸ (`this`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"mempool_content"``]\>

Obtains all transactions that are currently stored in Blockfrost mempool, waiting to be included in a newly minted block.

**`Remarks`**

Returns only transactions submitted via Blockfrost.io.

**`See`**

[API docs for Mempool](https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"mempool_content"``]\>

List of transactions in Blockfrost Mempool

#### Defined in

[src/BlockFrostAPI.ts:268](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L268)

___

### mempoolTx

• **mempoolTx**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"mempool_tx_content"``]\> = `mempoolTx`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"mempool_tx_content"``]\>

Obtains mempool transaction

**`See`**

[API docs for Mempool transaction](https://docs.blockfrost.io/#tag/Cardano-Mempool/paths/~1mempool~1%7Bhash%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Hash of the requested transaction |

##### Returns

`Promise`<`components`[``"schemas"``][``"mempool_tx_content"``]\>

Specific mempool transaction

#### Defined in

[src/BlockFrostAPI.ts:269](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L269)

___

### metadataTxsLabel

• **metadataTxsLabel**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `label`: `string` \| `number`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"tx_metadata_label_json"``]\> = `metadataTxsLabel`

#### Type declaration

▸ (`this`, `label`, `pagination?`): `Promise`<`components`[``"schemas"``][``"tx_metadata_label_json"``]\>

Obtains transaction metadata for a specific label in JSON format.

**`See`**

[API docs for Transaction metadata content in JSON](https://docs.blockfrost.io/#tag/Cardano-Metadata/paths/~1metadata~1txs~1labels~1%7Blabel%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `label` | `string` \| `number` | Metadata label |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_metadata_label_json"``]\>

List of transaction metadata for the specific label

#### Defined in

[src/BlockFrostAPI.ts:271](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L271)

___

### metadataTxsLabelCbor

• **metadataTxsLabelCbor**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `label`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"tx_metadata_label_cbor"``]\> = `metadataTxsLabelCbor`

#### Type declaration

▸ (`this`, `label`, `pagination?`): `Promise`<`components`[``"schemas"``][``"tx_metadata_label_cbor"``]\>

Obtains transaction metadata for a specific label in CBOR format.

**`See`**

[API docs for Transaction metadata content in CBOR](https://docs.blockfrost.io/#tag/Cardano-Metadata/paths/~1metadata~1txs~1labels~1%7Blabel%7D~1cbor/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `label` | `string` | Metadata label |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_metadata_label_cbor"``]\>

List of transaction metadata for the specific label

#### Defined in

[src/BlockFrostAPI.ts:272](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L272)

___

### metadataTxsLabels

• **metadataTxsLabels**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"tx_metadata_labels"``]\> = `metadataTxsLabels`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"tx_metadata_labels"``]\>

Obtains list of all used transaction metadata labels.

**`See`**

[API docs for Transaction metadata labels](https://docs.blockfrost.io/#tag/Cardano-Metadata/paths/~1metadata~1txs~1labels/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_metadata_labels"``]\>

List of all used transaction metadata labels

#### Defined in

[src/BlockFrostAPI.ts:273](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L273)

___

### metrics

• **metrics**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<`components`[``"schemas"``][``"metrics"``]\> = `metrics`

#### Type declaration

▸ (`this`): `Promise`<`components`[``"schemas"``][``"metrics"``]\>

Obtains history of your Blockfrost usage metrics in the past 30 days.

**`See`**

[API docs for Blockfrost usage metrics](https://docs.blockfrost.io/#tag/Metrics/paths/~1metrics/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<`components`[``"schemas"``][``"metrics"``]\>

Usage metrics for the last 30 days

#### Defined in

[src/BlockFrostAPI.ts:275](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L275)

___

### metricsEndpoints

• **metricsEndpoints**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<`components`[``"schemas"``][``"metrics"``]\> = `metricsEndpoints`

#### Type declaration

▸ (`this`): `Promise`<`components`[``"schemas"``][``"metrics"``]\>

Obtains history of your Blockfrost usage metrics, grouped per endpoint, in the past 30 days.

**`See`**

[API docs for Blockfrost endpoint usage metrics](https://docs.blockfrost.io/#tag/Metrics/paths/~1metrics~1endpoints/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<`components`[``"schemas"``][``"metrics"``]\>

Usage metrics for the last 30 days

#### Defined in

[src/BlockFrostAPI.ts:276](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L276)

___

### network

• **network**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<`components`[``"schemas"``][``"network"``]\> = `network`

#### Type declaration

▸ (`this`): `Promise`<`components`[``"schemas"``][``"network"``]\>

Obtains detailed network information.

**`See`**

[API docs for Network information](https://docs.blockfrost.io/#tag/Cardano-Network/paths/~1network/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<`components`[``"schemas"``][``"network"``]\>

Detailed network information.

#### Defined in

[src/BlockFrostAPI.ts:323](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L323)

___

### nutlinkAddress

• **nutlinkAddress**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`) => `Promise`<`components`[``"schemas"``][``"nutlink_address"``]\> = `nutlinkAddress`

#### Type declaration

▸ (`this`, `address`): `Promise`<`components`[``"schemas"``][``"nutlink_address"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `address` | `string` |

##### Returns

`Promise`<`components`[``"schemas"``][``"nutlink_address"``]\>

#### Defined in

[src/BlockFrostAPI.ts:278](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L278)

___

### nutlinkAddressTicker

• **nutlinkAddressTicker**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `ticker`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"nutlink_address_ticker"``]\> = `nutlinkAddressTicker`

#### Type declaration

▸ (`this`, `address`, `ticker`, `pagination?`): `Promise`<`components`[``"schemas"``][``"nutlink_address_ticker"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `address` | `string` |
| `ticker` | `string` |
| `pagination?` | `PaginationOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"nutlink_address_ticker"``]\>

#### Defined in

[src/BlockFrostAPI.ts:279](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L279)

___

### nutlinkAddressTickerAll

• **nutlinkAddressTickerAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `ticker`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"nutlink_address_ticker"``]\> = `nutlinkAddressTickerAll`

#### Type declaration

▸ (`this`, `address`, `ticker`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"nutlink_address_ticker"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `address` | `string` |
| `ticker` | `string` |
| `allMethodOptions?` | `AllMethodOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"nutlink_address_ticker"``]\>

#### Defined in

[src/BlockFrostAPI.ts:282](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L282)

___

### nutlinkAddressTickers

• **nutlinkAddressTickers**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"nutlink_address_tickers"``]\> = `nutlinkAddressTickers`

#### Type declaration

▸ (`this`, `address`, `pagination?`): `Promise`<`components`[``"schemas"``][``"nutlink_address_tickers"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `address` | `string` |
| `pagination?` | `PaginationOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"nutlink_address_tickers"``]\>

#### Defined in

[src/BlockFrostAPI.ts:280](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L280)

___

### nutlinkAddressTickersAll

• **nutlinkAddressTickersAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `address`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"nutlink_address_tickers"``]\> = `nutlinkAddressTickersAll`

#### Type declaration

▸ (`this`, `address`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"nutlink_address_tickers"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `address` | `string` |
| `allMethodOptions?` | `AllMethodOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"nutlink_address_tickers"``]\>

#### Defined in

[src/BlockFrostAPI.ts:281](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L281)

___

### nutlinkTickers

• **nutlinkTickers**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `ticker`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"nutlink_tickers_ticker"``]\> = `nutlinkTickers`

#### Type declaration

▸ (`this`, `ticker`, `pagination?`): `Promise`<`components`[``"schemas"``][``"nutlink_tickers_ticker"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `ticker` | `string` |
| `pagination?` | `PaginationOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"nutlink_tickers_ticker"``]\>

#### Defined in

[src/BlockFrostAPI.ts:283](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L283)

___

### nutlinkTickersAll

• **nutlinkTickersAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `ticker`: `string`, `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"nutlink_tickers_ticker"``]\> = `nutlinkTickersAll`

#### Type declaration

▸ (`this`, `ticker`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"nutlink_tickers_ticker"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `ticker` | `string` |
| `allMethodOptions?` | `AllMethodOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"nutlink_tickers_ticker"``]\>

#### Defined in

[src/BlockFrostAPI.ts:284](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L284)

___

### poolMetadata

• **poolMetadata**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `poolId`: `string`) => `Promise`<`components`[``"schemas"``][``"pool_metadata"``]\> = `poolMetadata`

#### Type declaration

▸ (`this`, `poolId`): `Promise`<`components`[``"schemas"``][``"pool_metadata"``]\>

Obtains stake pool registration metadata.

**`See`**

[API docs for Stake pool metadata](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1metadata/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `poolId` | `string` | Pool ID |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_metadata"``]\>

Stake pool registration metadata

#### Defined in

[src/BlockFrostAPI.ts:288](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L288)

___

### pools

• **pools**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_list"``]\> = `pools`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_list"``]\>

Obtains list of registered stake pools (paginated).

**`See`**

[API docs for List of stake pools](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_list"``]\>

List of registered stake pools.

#### Defined in

[src/BlockFrostAPI.ts:286](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L286)

___

### poolsAll

• **poolsAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"pool_list"``]\> = `poolsAll`

#### Type declaration

▸ (`this`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"pool_list"``]\>

Obtains list of all registered stake pools.

**`See`**

[API docs for List of stake pools](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools/get)

**`Remarks`**

Variant of `pools` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_list"``]\>

List of registered stake pools.

#### Defined in

[src/BlockFrostAPI.ts:287](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L287)

___

### poolsById

• **poolsById**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `poolId`: `string`) => `Promise`<`components`[``"schemas"``][``"pool"``]\> = `poolsById`

#### Type declaration

▸ (`this`, `poolId`): `Promise`<`components`[``"schemas"``][``"pool"``]\>

Obtains information of a specific stake pool.

**`See`**

[API docs for Stake Pool](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `poolId` | `string` | Pool ID |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool"``]\>

Information of a specific stake pool.

#### Defined in

[src/BlockFrostAPI.ts:289](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L289)

___

### poolsByIdBlocks

• **poolsByIdBlocks**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `poolId`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_blocks"``]\> = `poolsByIdBlocks`

#### Type declaration

▸ (`this`, `poolId`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_blocks"``]\>

Obtains list of stake pool blocks.

**`See`**

[API docs for Stake pool blocks](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1blocks/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `poolId` | `string` | Pool ID |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_blocks"``]\>

List of stake pool blocks

#### Defined in

[src/BlockFrostAPI.ts:290](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L290)

___

### poolsByIdDelegators

• **poolsByIdDelegators**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `poolId`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_delegators"``]\> = `poolsByIdDelegators`

#### Type declaration

▸ (`this`, `poolId`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_delegators"``]\>

Obtains current stake pool delegators.

**`See`**

[API docs for Stake pool delegators](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~delegators/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `poolId` | `string` | Pool ID |
| `pagination?` | `PaginationOptions` | - |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_delegators"``]\>

Current stake pool delegators

#### Defined in

[src/BlockFrostAPI.ts:291](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L291)

___

### poolsByIdHistory

• **poolsByIdHistory**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `poolId`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_history"``]\> = `poolsByIdHistory`

#### Type declaration

▸ (`this`, `poolId`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_history"``]\>

Obtains history of stake pool parameters over epochs (paginated).

**`See`**

[API docs for Stake pool history](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1history/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `poolId` | `string` | Pool ID |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_history"``]\>

List of stake pool parameters per epoch

#### Defined in

[src/BlockFrostAPI.ts:292](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L292)

___

### poolsByIdRelays

• **poolsByIdRelays**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `poolId`: `string`) => `Promise`<`components`[``"schemas"``][``"pool_relays"``]\> = `poolsByIdRelays`

#### Type declaration

▸ (`this`, `poolId`): `Promise`<`components`[``"schemas"``][``"pool_relays"``]\>

Obtains stake pool relays.

**`See`**

[API docs for Stake pool relays](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1relays/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `poolId` | `string` | Pool ID |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_relays"``]\>

Stake pool relays

#### Defined in

[src/BlockFrostAPI.ts:293](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L293)

___

### poolsByIdUpdates

• **poolsByIdUpdates**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `poolId`: `string`, `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_updates"``]\> = `poolsByIdUpdates`

#### Type declaration

▸ (`this`, `poolId`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_updates"``]\>

Obtains list of certificate updates to the stake pool.

**`See`**

[API docs for Stake pool updates](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1%7Bpool_id%7D~1updates/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `poolId` | `string` | Pool ID |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_updates"``]\>

List of certificate updates to the stake pool

#### Defined in

[src/BlockFrostAPI.ts:294](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L294)

___

### poolsExtended

• **poolsExtended**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_list_extended"``]\> = `poolsExtended`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_list_extended"``]\>

Obtains list of registered stake pools with additional information.

**`See`**

[API docs for List of stake pools with additional information](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1extended/get)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `pagination?` | `PaginationOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_list_extended"``]\>

List of registered stake pools with additional information

#### Defined in

[src/BlockFrostAPI.ts:297](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L297)

___

### poolsExtendedAll

• **poolsExtendedAll**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `allMethodOptions?`: `AllMethodOptions`) => `Promise`<`components`[``"schemas"``][``"pool_list_extended"``]\> = `poolsExtendedAll`

#### Type declaration

▸ (`this`, `allMethodOptions?`): `Promise`<`components`[``"schemas"``][``"pool_list_extended"``]\>

Obtains list of registered stake pools with additional information.

**`See`**

[API docs for List of stake pools with additional information](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1extended/get)

**`Remarks`**

Variant of `poolsExtended` method for fetching all pages with built-in requests batching

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `allMethodOptions?` | `AllMethodOptions` | Optional, Options for request batching |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_list_extended"``]\>

List of registered stake pools with additional information

#### Defined in

[src/BlockFrostAPI.ts:298](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L298)

___

### poolsRetired

• **poolsRetired**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_list_retire"``]\> = `poolsRetired`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_list_retire"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |
| `pagination?` | `PaginationOptions` |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_list_retire"``]\>

#### Defined in

[src/BlockFrostAPI.ts:295](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L295)

___

### poolsRetiring

• **poolsRetiring**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"pool_list_retire"``]\> = `poolsRetiring`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"pool_list_retire"``]\>

Obtains list of stake pools retiring in the upcoming epochs (paginated).

**`See`**

[API docs for List of retiring stake pools](https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1retiring/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"pool_list_retire"``]\>

List of stake pools retiring in the upcoming epochs

#### Defined in

[src/BlockFrostAPI.ts:296](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L296)

___

### root

• **root**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md)) => `Promise`<{ `url`: `string` ; `version`: `string`  }\> = `root`

#### Type declaration

▸ (`this`): `Promise`<{ `url`: `string` ; `version`: `string`  }\>

Obtains backend version number.

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) |

##### Returns

`Promise`<{ `url`: `string` ; `version`: `string`  }\>

Backend version in a format `{ url: string; version: string }`

#### Defined in

[src/BlockFrostAPI.ts:300](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L300)

___

### scripts

• **scripts**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `pagination?`: `PaginationOptions`) => `Promise`<`components`[``"schemas"``][``"scripts"``]\> = `scripts`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`components`[``"schemas"``][``"scripts"``]\>

Obtains list of scripts (paginated).

**`See`**

[API docs for Scripts](https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`components`[``"schemas"``][``"scripts"``]\>

List of scripts

#### Defined in

[src/BlockFrostAPI.ts:302](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L302)

___

### scriptsByHash

• **scriptsByHash**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `scriptHash`: `string`) => `Promise`<`components`[``"schemas"``][``"script"``]\> = `scriptsByHash`

#### Type declaration

▸ (`this`, `scriptHash`): `Promise`<`components`[``"schemas"``][``"script"``]\>

Obtains information about a specific script.

**`See`**

[API docs for Script](https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `scriptHash` | `string` | Hash of the script |

##### Returns

`Promise`<`components`[``"schemas"``][``"script"``]\>

Information about a specific script

#### Defined in

[src/BlockFrostAPI.ts:303](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L303)

___

### scriptsCbor

• **scriptsCbor**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `scriptHash`: `string`) => `Promise`<`components`[``"schemas"``][``"script_cbor"``]\> = `scriptsCbor`

#### Type declaration

▸ (`this`, `scriptHash`): `Promise`<`components`[``"schemas"``][``"script_cbor"``]\>

Obtains CBOR representation of a plutus script.

**`See`**

[API docs for Script CBOR](https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D~1cbor/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `scriptHash` | `string` | Hash of the script |

##### Returns

`Promise`<`components`[``"schemas"``][``"script_cbor"``]\>

CBOR representation of a plutus script

#### Defined in

[src/BlockFrostAPI.ts:305](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L305)

___

### scriptsDatum

• **scriptsDatum**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `datumHash`: `string`) => `Promise`<`components`[``"schemas"``][``"script_datum"``]\> = `scriptsDatum`

#### Type declaration

▸ (`this`, `datumHash`): `Promise`<`components`[``"schemas"``][``"script_datum"``]\>

Obtains JSON value of a datum by its hash.

**`See`**

[API docs for Datum value](https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1datum~1%7Bdatum_hash%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `datumHash` | `string` | Hash of the datum |

##### Returns

`Promise`<`components`[``"schemas"``][``"script_datum"``]\>

JSON value of a datum specified by its hash

#### Defined in

[src/BlockFrostAPI.ts:306](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L306)

___

### scriptsDatumCbor

• **scriptsDatumCbor**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `datumHash`: `string`) => `Promise`<`components`[``"schemas"``][``"script_datum_cbor"``]\> = `scriptsDatumCbor`

#### Type declaration

▸ (`this`, `datumHash`): `Promise`<`components`[``"schemas"``][``"script_datum_cbor"``]\>

Obtains CBOR serialized datum by its hash.

**`See`**

[API docs for Datum CBOR value](https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1datum~1%7Bdatum_hash%7D~1cbor/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `datumHash` | `string` | Hash of the datum |

##### Returns

`Promise`<`components`[``"schemas"``][``"script_datum_cbor"``]\>

JSON value of a datum specified by its hash

#### Defined in

[src/BlockFrostAPI.ts:307](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L307)

___

### scriptsJson

• **scriptsJson**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `scriptHash`: `string`) => `Promise`<`components`[``"schemas"``][``"script_json"``]\> = `scriptsJson`

#### Type declaration

▸ (`this`, `scriptHash`): `Promise`<`components`[``"schemas"``][``"script_json"``]\>

Obtains JSON representation of a timelock script.

**`See`**

[API docs for Script JSON](https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D~1json/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `scriptHash` | `string` | Hash of the script |

##### Returns

`Promise`<`components`[``"schemas"``][``"script_json"``]\>

JSON representation of a timelock script

#### Defined in

[src/BlockFrostAPI.ts:304](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L304)

___

### scriptsRedeemers

• **scriptsRedeemers**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `scriptHash`: `string`) => `Promise`<`components`[``"schemas"``][``"script_redeemers"``]\> = `scriptsRedeemers`

#### Type declaration

▸ (`this`, `scriptHash`): `Promise`<`components`[``"schemas"``][``"script_redeemers"``]\>

Obtains list of redeemers of a specific script

**`See`**

[API docs for Redeemers of a specific script](https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D~1redeemers/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `scriptHash` | `string` | Hash of the script |

##### Returns

`Promise`<`components`[``"schemas"``][``"script_redeemers"``]\>

List of redeemers of a specific script

#### Defined in

[src/BlockFrostAPI.ts:308](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L308)

___

### txSubmit

• **txSubmit**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `transaction`: `string` \| `Uint8Array`) => `Promise`<`string`\> = `txSubmit`

#### Type declaration

▸ (`this`, `transaction`): `Promise`<`string`\>

Submits a transaction to the network.

**`See`**

[API docs for Transaction submit](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1tx~1submit/post)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `transaction` | `string` \| `Uint8Array` | Transaction bytes as Uint8Array or hex-encoded string |

##### Returns

`Promise`<`string`\>

ID of the submitted transaction

#### Defined in

[src/BlockFrostAPI.ts:321](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L321)

___

### txs

• **txs**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content"``]\> = `txs`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content"``]\>

Obtains a specific transaction

**`See`**

[API docs for Transaction](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content"``]\>

Transaction

#### Defined in

[src/BlockFrostAPI.ts:310](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L310)

___

### txsDelegations

• **txsDelegations**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_delegations"``]\> = `txsDelegations`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_delegations"``]\>

Obtains information about delegation certificates of a specific transaction.

**`See`**

[API docs for Transaction stake addresses certificates](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1delegations/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_delegations"``]\>

List of delegation certificates within the transaction

#### Defined in

[src/BlockFrostAPI.ts:312](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L312)

___

### txsMetadata

• **txsMetadata**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_metadata"``]\> = `txsMetadata`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_metadata"``]\>

Obtains transaction metadata in JSON format.

**`See`**

[API docs for Transaction metadata](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1metadata/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_metadata"``]\>

Transaction metadata in JSON

#### Defined in

[src/BlockFrostAPI.ts:319](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L319)

___

### txsMetadataCbor

• **txsMetadataCbor**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_metadata_cbor"``]\> = `txsMetadataCbor`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_metadata_cbor"``]\>

Obtains transaction metadata in CBOR format.

**`See`**

[API docs for Transaction metadata in CBOR](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1metadata~1cbor/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_metadata_cbor"``]\>

Transaction metadata in CBOR

#### Defined in

[src/BlockFrostAPI.ts:311](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L311)

___

### txsMirs

• **txsMirs**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_mirs"``]\> = `txsMirs`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_mirs"``]\>

Obtains information about Move Instantaneous Rewards (MIRs) of a specific transaction.

**`See`**

[API docs for Transaction MIRs](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1mirs/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_mirs"``]\>

List of Move Instantaneous Rewards (MIRs) within the transaction

#### Defined in

[src/BlockFrostAPI.ts:318](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L318)

___

### txsPoolRetires

• **txsPoolRetires**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_pool_retires"``]\> = `txsPoolRetires`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_pool_retires"``]\>

Obtains information about stake pool retirements within a specific transaction.

**`See`**

[API docs for Transaction stake pool retirement certificates](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1pool_retires/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_pool_retires"``]\>

List of stake pool retirement certificates

#### Defined in

[src/BlockFrostAPI.ts:313](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L313)

___

### txsPoolUpdates

• **txsPoolUpdates**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_pool_certs"``]\> = `txsPoolUpdates`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_pool_certs"``]\>

Obtains information about stake pool registration and update certificates of a specific transaction.

**`See`**

[API docs for Transaction stake pool registration and update certificates](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1pool_updates/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_pool_certs"``]\>

List of stake pool registration and update certificates within a specific transaction

#### Defined in

[src/BlockFrostAPI.ts:314](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L314)

___

### txsRedeemers

• **txsRedeemers**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_redeemers"``]\> = `txsRedeemers`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_redeemers"``]\>

Obtains transaction redeemers.

**`See`**

[API docs for Transaction redeemers](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1redeemers/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_redeemers"``]\>

Transaction redeemers

#### Defined in

[src/BlockFrostAPI.ts:320](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L320)

___

### txsStakes

• **txsStakes**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_stake_addr"``]\> = `txsStakes`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_stake_addr"``]\>

Obtains information about (de)registration of stake addresses within a transaction.

**`See`**

[API docs for Transaction stake addresses certificates](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1stakes/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_stake_addr"``]\>

List of (de)registration certificates within the transaction

#### Defined in

[src/BlockFrostAPI.ts:315](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L315)

___

### txsUtxos

• **txsUtxos**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_utxo"``]\> = `txsUtxos`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_utxo"``]\>

Obtains the inputs and outputs of the specific transaction.

**`See`**

[API docs for Transaction UTXOs](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1utxos/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_utxo"``]\>

Transaction inputs and outputs

#### Defined in

[src/BlockFrostAPI.ts:316](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L316)

___

### txsWithdrawals

• **txsWithdrawals**: (`this`: [`BlockFrostAPI`](BlockFrostAPI.md), `hash`: `string`) => `Promise`<`components`[``"schemas"``][``"tx_content_withdrawals"``]\> = `txsWithdrawals`

#### Type declaration

▸ (`this`, `hash`): `Promise`<`components`[``"schemas"``][``"tx_content_withdrawals"``]\>

Obtains information about withdrawals within a specific transaction.

**`See`**

[API docs for Transaction withdrawal](https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1withdrawals/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostAPI`](BlockFrostAPI.md) | - |
| `hash` | `string` | Transaction hash |

##### Returns

`Promise`<`components`[``"schemas"``][``"tx_content_withdrawals"``]\>

List of withdrawals within the transaction

#### Defined in

[src/BlockFrostAPI.ts:317](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostAPI.ts#L317)
