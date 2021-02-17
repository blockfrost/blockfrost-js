# BlockFrostAPI

## Table of contents

- [accounts](blockfrostapi.md#accounts)
- [accountsDelegations](blockfrostapi.md#accountsdelegations)
- [accountsRegistrations](blockfrostapi.md#accountsregistrations)
- [accountsRewards](blockfrostapi.md#accountsrewards)
- [addresses](blockfrostapi.md#addresses)
- [addressesTotal](blockfrostapi.md#addressestotal)
- [addressesTxs](blockfrostapi.md#addressestxs)
- [addressesUtxos](blockfrostapi.md#addressesutxos)
- [apiUrl](blockfrostapi.md#apiurl)
- [blocks](blockfrostapi.md#blocks)
- [blocksLatest](blockfrostapi.md#blockslatest)
- [blocksNext](blockfrostapi.md#blocksnext)
- [blocksPrevious](blockfrostapi.md#blocksprevious)
- [blocksTxs](blockfrostapi.md#blockstxs)
- [epochs](blockfrostapi.md#epochs)
- [epochsBlocks](blockfrostapi.md#epochsblocks)
- [epochsBlocksByPoolId](blockfrostapi.md#epochsblocksbypoolid)
- [epochsLatest](blockfrostapi.md#epochslatest)
- [epochsNext](blockfrostapi.md#epochsnext)
- [epochsParameters](blockfrostapi.md#epochsparameters)
- [epochsPrevious](blockfrostapi.md#epochsprevious)
- [epochsStakes](blockfrostapi.md#epochsstakes)
- [epochsStakesByPoolId](blockfrostapi.md#epochsstakesbypoolid)
- [health](blockfrostapi.md#health)
- [healthClock](blockfrostapi.md#healthclock)
- [ledger](blockfrostapi.md#ledger)
- [metadataTxsLabel](blockfrostapi.md#metadatatxslabel)
- [metadataTxsLabelCbor](blockfrostapi.md#metadatatxslabelcbor)
- [metadataTxsLabels](blockfrostapi.md#metadatatxslabels)
- [metrics](blockfrostapi.md#metrics)
- [metricsEndpoints](blockfrostapi.md#metricsendpoints)
- [poolMetadata](blockfrostapi.md#poolmetadata)
- [pools](blockfrostapi.md#pools)
- [poolsById](blockfrostapi.md#poolsbyid)
- [poolsByIdBlocks](blockfrostapi.md#poolsbyidblocks)
- [poolsByIdDelegators](blockfrostapi.md#poolsbyiddelegators)
- [poolsByIdHistory](blockfrostapi.md#poolsbyidhistory)
- [poolsByIdRelays](blockfrostapi.md#poolsbyidrelays)
- [poolsByIdUpdates](blockfrostapi.md#poolsbyidupdates)
- [poolsRetired](blockfrostapi.md#poolsretired)
- [poolsRetiring](blockfrostapi.md#poolsretiring)
- [projectId](blockfrostapi.md#projectid)
- [root](blockfrostapi.md#root)
- [txs](blockfrostapi.md#txs)
- [txsDelegations](blockfrostapi.md#txsdelegations)
- [txsMetadata](blockfrostapi.md#txsmetadata)
- [txsMetadataCbor](blockfrostapi.md#txsmetadatacbor)
- [txsPoolRetires](blockfrostapi.md#txspoolretires)
- [txsPoolUpdates](blockfrostapi.md#txspoolupdates)
- [txsStakes](blockfrostapi.md#txsstakes)
- [txsUtxos](blockfrostapi.md#txsutxos)
- [txsWithdrawals](blockfrostapi.md#txswithdrawals)

## Constructors

### constructor

\+ **new BlockFrostAPI**(`options?`: OptionCombination1 & AdditionalOptions \| OptionCombination2 & AdditionalOptions): [_BlockFrostAPI_](blockfrostapi.md)

#### Parameters:

| Name       | Type                                                                             |
| :--------- | :------------------------------------------------------------------------------- |
| `options?` | OptionCombination1 & AdditionalOptions \| OptionCombination2 & AdditionalOptions |

**Returns:** [_BlockFrostAPI_](blockfrostapi.md)

Defined in: [index.ts:79](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L79)

## Properties

### accounts

• **accounts**: (`stakeAddress`: _string_) => _Promise_<components[_schemas_][*account_content*]\>

accounts - Obtain information about a specific stake account.

**`param`** Bech32 stake address

**`returns`** Information about a specific stake account.

#### Type declaration:

▸ (`stakeAddress`: _string_): _Promise_<components[_schemas_][*account_content*]\>

#### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `stakeAddress` | _string_ |

**Returns:** _Promise_<components[_schemas_][*account_content*]\>

Defined in: [endpoints/accounts/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/accounts/index.ts#L6)

Defined in: [index.ts:95](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L95)

---

### accountsDelegations

• **accountsDelegations**: (`stakeAddress`: _string_) => _Promise_<components[_schemas_][*account_delegation_content*]\>

accountsDelegations - Account's delegation history

**`param`** Bech32 stake address

**`returns`** Information about the delegation of a specific account.

#### Type declaration:

▸ (`stakeAddress`: _string_): _Promise_<components[_schemas_][*account_delegation_content*]\>

#### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `stakeAddress` | _string_ |

**Returns:** _Promise_<components[_schemas_][*account_delegation_content*]\>

Defined in: [endpoints/accounts/index.ts:38](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/accounts/index.ts#L38)

Defined in: [index.ts:104](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L104)

---

### accountsRegistrations

• **accountsRegistrations**: (`stakeAddress`: _string_) => _Promise_<components[_schemas_][*account_registration_content*]\>

accountsRegistrations

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`stakeAddress`: _string_): _Promise_<components[_schemas_][*account_registration_content*]\>

#### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `stakeAddress` | _string_ |

**Returns:** _Promise_<components[_schemas_][*account_registration_content*]\>

Defined in: [endpoints/accounts/index.ts:54](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/accounts/index.ts#L54)

Defined in: [index.ts:113](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L113)

---

### accountsRewards

• **accountsRewards**: (`stakeAddress`: _string_) => _Promise_<components[_schemas_][*account_reward_content*]\>

accountsRewards

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`stakeAddress`: _string_): _Promise_<components[_schemas_][*account_reward_content*]\>

#### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `stakeAddress` | _string_ |

**Returns:** _Promise_<components[_schemas_][*account_reward_content*]\>

Defined in: [endpoints/accounts/index.ts:22](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/accounts/index.ts#L22)

Defined in: [index.ts:122](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L122)

---

### addresses

• **addresses**: (`address`: _string_) => _Promise_<components[_schemas_][*address_content*]\>

addresses

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`address`: _string_): _Promise_<components[_schemas_][*address_content*]\>

#### Parameters:

| Name      | Type     |
| :-------- | :------- |
| `address` | _string_ |

**Returns:** _Promise_<components[_schemas_][*address_content*]\>

Defined in: [endpoints/addresses/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/addresses/index.ts#L6)

Defined in: [index.ts:131](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L131)

---

### addressesTotal

• **addressesTotal**: (`address`: _string_) => _Promise_<components[_schemas_][*address_content_total*]\>

addressesTotal

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`address`: _string_): _Promise_<components[_schemas_][*address_content_total*]\>

#### Parameters:

| Name      | Type     |
| :-------- | :------- |
| `address` | _string_ |

**Returns:** _Promise_<components[_schemas_][*address_content_total*]\>

Defined in: [endpoints/addresses/index.ts:22](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/addresses/index.ts#L22)

Defined in: [index.ts:140](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L140)

---

### addressesTxs

• **addressesTxs**: (`address`: _string_) => _Promise_<components[_schemas_][*address_txs_content*]\>

addressesTxs

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`address`: _string_): _Promise_<components[_schemas_][*address_txs_content*]\>

#### Parameters:

| Name      | Type     |
| :-------- | :------- |
| `address` | _string_ |

**Returns:** _Promise_<components[_schemas_][*address_txs_content*]\>

Defined in: [endpoints/addresses/index.ts:38](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/addresses/index.ts#L38)

Defined in: [index.ts:149](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L149)

---

### addressesUtxos

• **addressesUtxos**: (`address`: _string_) => _Promise_<components[_schemas_][*address_utxo_content*]\>

addressesUtxos

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`address`: _string_): _Promise_<components[_schemas_][*address_utxo_content*]\>

#### Parameters:

| Name      | Type     |
| :-------- | :------- |
| `address` | _string_ |

**Returns:** _Promise_<components[_schemas_][*address_utxo_content*]\>

Defined in: [endpoints/addresses/index.ts:54](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/addresses/index.ts#L54)

Defined in: [index.ts:158](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L158)

---

### apiUrl

• **apiUrl**: _string_

Defined in: [index.ts:78](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L78)

---

### blocks

• **blocks**: (`hashOrNumber`: HashOrNumber) => _Promise_<components[_schemas_][*block_content*]\>

addressesUtxos

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hashOrNumber`: HashOrNumber): _Promise_<components[_schemas_][*block_content*]\>

#### Parameters:

| Name           | Type         |
| :------------- | :----------- |
| `hashOrNumber` | HashOrNumber |

**Returns:** _Promise_<components[_schemas_][*block_content*]\>

Defined in: [endpoints/blocks/index.ts:7](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/blocks/index.ts#L7)

Defined in: [index.ts:167](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L167)

---

### blocksLatest

• **blocksLatest**: () => _Promise_<components[_schemas_][*block_content*]\>

blocksLatest

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*block_content*]\>

**Returns:** _Promise_<components[_schemas_][*block_content*]\>

Defined in: [endpoints/blocks/index.ts:25](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/blocks/index.ts#L25)

Defined in: [index.ts:175](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L175)

---

### blocksNext

• **blocksNext**: (`hashOrNumber`: HashOrNumber) => _Promise_<components[_schemas_][*block_content_array*]\>

blocksNext

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hashOrNumber`: HashOrNumber): _Promise_<components[_schemas_][*block_content_array*]\>

#### Parameters:

| Name           | Type         |
| :------------- | :----------- |
| `hashOrNumber` | HashOrNumber |

**Returns:** _Promise_<components[_schemas_][*block_content_array*]\>

Defined in: [endpoints/blocks/index.ts:42](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/blocks/index.ts#L42)

Defined in: [index.ts:184](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L184)

---

### blocksPrevious

• **blocksPrevious**: (`hashOrNumber`: HashOrNumber) => _Promise_<components[_schemas_][*block_content_array*]\>

blockPrevious

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hashOrNumber`: HashOrNumber): _Promise_<components[_schemas_][*block_content_array*]\>

#### Parameters:

| Name           | Type         |
| :------------- | :----------- |
| `hashOrNumber` | HashOrNumber |

**Returns:** _Promise_<components[_schemas_][*block_content_array*]\>

Defined in: [endpoints/blocks/index.ts:60](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/blocks/index.ts#L60)

Defined in: [index.ts:193](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L193)

---

### blocksTxs

• **blocksTxs**: (`hashOrNumber`: HashOrNumber) => _Promise_<components[_schemas_][*block_content_txs*]\>

addressesUtxos

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hashOrNumber`: HashOrNumber): _Promise_<components[_schemas_][*block_content_txs*]\>

#### Parameters:

| Name           | Type         |
| :------------- | :----------- |
| `hashOrNumber` | HashOrNumber |

**Returns:** _Promise_<components[_schemas_][*block_content_txs*]\>

Defined in: [endpoints/blocks/index.ts:78](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/blocks/index.ts#L78)

Defined in: [index.ts:202](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L202)

---

### epochs

• **epochs**: (`number`: _number_) => _Promise_<components[_schemas_][*epoch_content*]\>

epochs

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_): _Promise_<components[_schemas_][*epoch_content*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |

**Returns:** _Promise_<components[_schemas_][*epoch_content*]\>

Defined in: [endpoints/epochs/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L6)

Defined in: [index.ts:211](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L211)

---

### epochsBlocks

• **epochsBlocks**: (`number`: _number_) => _Promise_<components[_schemas_][*epoch_block_content*]\>

epochsBlocks

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_): _Promise_<components[_schemas_][*epoch_block_content*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |

**Returns:** _Promise_<components[_schemas_][*epoch_block_content*]\>

Defined in: [endpoints/epochs/index.ts:114](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L114)

Defined in: [index.ts:220](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L220)

---

### epochsBlocksByPoolId

• **epochsBlocksByPoolId**: (`number`: _number_, `poolId`: _string_) => _Promise_<components[_schemas_][*epoch_stake_pool_content*]\>

epochsBlocksByPoolId

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_, `poolId`: _string_): _Promise_<components[_schemas_][*epoch_stake_pool_content*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*epoch_stake_pool_content*]\>

Defined in: [endpoints/epochs/index.ts:132](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L132)

Defined in: [index.ts:229](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L229)

---

### epochsLatest

• **epochsLatest**: () => _Promise_<components[_schemas_][*epoch_content*]\>

epochsLatest

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*epoch_content*]\>

**Returns:** _Promise_<components[_schemas_][*epoch_content*]\>

Defined in: [endpoints/epochs/index.ts:24](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L24)

Defined in: [index.ts:237](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L237)

---

### epochsNext

• **epochsNext**: (`number`: _number_) => _Promise_<components[_schemas_][*epoch_content_array*]\>

epochsNext

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_): _Promise_<components[_schemas_][*epoch_content_array*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |

**Returns:** _Promise_<components[_schemas_][*epoch_content_array*]\>

Defined in: [endpoints/epochs/index.ts:41](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L41)

Defined in: [index.ts:246](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L246)

---

### epochsParameters

• **epochsParameters**: (`number`: _number_) => _Promise_<components[_schemas_][*epoch_param_content*]\>

epochsParameters

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_): _Promise_<components[_schemas_][*epoch_param_content*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |

**Returns:** _Promise_<components[_schemas_][*epoch_param_content*]\>

Defined in: [endpoints/epochs/index.ts:151](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L151)

Defined in: [index.ts:255](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L255)

---

### epochsPrevious

• **epochsPrevious**: (`number`: _number_) => _Promise_<components[_schemas_][*epoch_content_array*]\>

epochsPrevious

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_): _Promise_<components[_schemas_][*epoch_content_array*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |

**Returns:** _Promise_<components[_schemas_][*epoch_content_array*]\>

Defined in: [endpoints/epochs/index.ts:59](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L59)

Defined in: [index.ts:264](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L264)

---

### epochsStakes

• **epochsStakes**: (`number`: _number_) => _Promise_<components[_schemas_][*epoch_stake_content*]\>

epochsStakes

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_): _Promise_<components[_schemas_][*epoch_stake_content*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |

**Returns:** _Promise_<components[_schemas_][*epoch_stake_content*]\>

Defined in: [endpoints/epochs/index.ts:77](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L77)

Defined in: [index.ts:273](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L273)

---

### epochsStakesByPoolId

• **epochsStakesByPoolId**: (`number`: _number_, `poolId`: _string_) => _Promise_<components[_schemas_][*epoch_block_content*]\>

epochsStakesByPoolId

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`number`: _number_, `poolId`: _string_): _Promise_<components[_schemas_][*epoch_block_content*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `number` | _number_ |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*epoch_block_content*]\>

Defined in: [endpoints/epochs/index.ts:95](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/epochs/index.ts#L95)

Defined in: [index.ts:282](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L282)

---

### health

• **health**: () => _Promise_<{ `isHealthy`: _boolean_ }\>

health

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<{ `isHealthy`: _boolean_ }\>

**Returns:** _Promise_<{ `isHealthy`: _boolean_ }\>

Defined in: [endpoints/health/index.ts:5](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/health/index.ts#L5)

Defined in: [index.ts:290](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L290)

---

### healthClock

• **healthClock**: () => _Promise_<{ `server_time`: _number_ }\>

healthClock

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<{ `server_time`: _number_ }\>

**Returns:** _Promise_<{ `server_time`: _number_ }\>

Defined in: [endpoints/health/index.ts:20](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/health/index.ts#L20)

Defined in: [index.ts:298](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L298)

---

### ledger

• **ledger**: () => _Promise_<components[_schemas_][*genesis_content*]\>

ledger

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*genesis_content*]\>

**Returns:** _Promise_<components[_schemas_][*genesis_content*]\>

Defined in: [endpoints/ledger/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/ledger/index.ts#L6)

Defined in: [index.ts:306](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L306)

---

### metadataTxsLabel

• **metadataTxsLabel**: (`label`: _string_) => _Promise_<components[_schemas_][*tx_metadata_labels*]\>

metadataTxsLabel

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`label`: _string_): _Promise_<components[_schemas_][*tx_metadata_labels*]\>

#### Parameters:

| Name    | Type     |
| :------ | :------- |
| `label` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_metadata_labels*]\>

Defined in: [endpoints/metadata/index.ts:23](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/metadata/index.ts#L23)

Defined in: [index.ts:315](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L315)

---

### metadataTxsLabelCbor

• **metadataTxsLabelCbor**: (`label`: _string_) => _Promise_<components[_schemas_][*tx_metadata_label_cbor*]\>

metadataTxsLabelCbor

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`label`: _string_): _Promise_<components[_schemas_][*tx_metadata_label_cbor*]\>

#### Parameters:

| Name    | Type     |
| :------ | :------- |
| `label` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_metadata_label_cbor*]\>

Defined in: [endpoints/metadata/index.ts:41](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/metadata/index.ts#L41)

Defined in: [index.ts:324](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L324)

---

### metadataTxsLabels

• **metadataTxsLabels**: () => _Promise_<components[_schemas_][*tx_metadata_label_json*]\>

metadataTxsLabels

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*tx_metadata_label_json*]\>

**Returns:** _Promise_<components[_schemas_][*tx_metadata_label_json*]\>

Defined in: [endpoints/metadata/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/metadata/index.ts#L6)

Defined in: [index.ts:332](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L332)

---

### metrics

• **metrics**: () => _Promise_<components[_schemas_][*metrics*]\>

metrics

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*metrics*]\>

**Returns:** _Promise_<components[_schemas_][*metrics*]\>

Defined in: [endpoints/metrics/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/metrics/index.ts#L6)

Defined in: [index.ts:340](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L340)

---

### metricsEndpoints

• **metricsEndpoints**: () => _Promise_<components[_schemas_][*metrics*]\>

metricsEndpoints

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*metrics*]\>

**Returns:** _Promise_<components[_schemas_][*metrics*]\>

Defined in: [endpoints/metrics/index.ts:23](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/metrics/index.ts#L23)

Defined in: [index.ts:348](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L348)

---

### poolMetadata

• **poolMetadata**: (`poolId`: _string_) => _Promise_<components[_schemas_][*pool_metadata*]\>

poolMetadata

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`poolId`: _string_): _Promise_<components[_schemas_][*pool_metadata*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*pool_metadata*]\>

Defined in: [endpoints/pools/index.ts:93](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L93)

Defined in: [index.ts:365](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L365)

---

### pools

• **pools**: () => _Promise_<components[_schemas_][*metrics_endpoints*]\>

pools

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*metrics_endpoints*]\>

**Returns:** _Promise_<components[_schemas_][*metrics_endpoints*]\>

Defined in: [endpoints/pools/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L6)

Defined in: [index.ts:356](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L356)

---

### poolsById

• **poolsById**: (`poolId`: _string_) => _Promise_<components[_schemas_][*pool*]\>

poolsById

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`poolId`: _string_): _Promise_<components[_schemas_][*pool*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*pool*]\>

Defined in: [endpoints/pools/index.ts:57](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L57)

Defined in: [index.ts:374](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L374)

---

### poolsByIdBlocks

• **poolsByIdBlocks**: (`poolId`: _string_) => _Promise_<components[_schemas_][*pool_blocks*]\>

poolsByIdBlocks

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`poolId`: _string_): _Promise_<components[_schemas_][*pool_blocks*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*pool_blocks*]\>

Defined in: [endpoints/pools/index.ts:147](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L147)

Defined in: [index.ts:383](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L383)

---

### poolsByIdDelegators

• **poolsByIdDelegators**: (`poolId`: _string_) => _Promise_<components[_schemas_][*pool_delegators*]\>

poolsByIdDelegators

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`poolId`: _string_): _Promise_<components[_schemas_][*pool_delegators*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*pool_delegators*]\>

Defined in: [endpoints/pools/index.ts:129](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L129)

Defined in: [index.ts:392](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L392)

---

### poolsByIdHistory

• **poolsByIdHistory**: (`poolId`: _string_) => _Promise_<components[_schemas_][*pool_history*]\>

poolsByIdHistory

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`poolId`: _string_): _Promise_<components[_schemas_][*pool_history*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*pool_history*]\>

Defined in: [endpoints/pools/index.ts:75](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L75)

Defined in: [index.ts:401](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L401)

---

### poolsByIdRelays

• **poolsByIdRelays**: (`poolId`: _string_) => _Promise_<components[_schemas_][*pool_relays*]\>

poolsByIdRelays

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`poolId`: _string_): _Promise_<components[_schemas_][*pool_relays*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*pool_relays*]\>

Defined in: [endpoints/pools/index.ts:111](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L111)

Defined in: [index.ts:410](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L410)

---

### poolsByIdUpdates

• **poolsByIdUpdates**: (`poolId`: _string_) => _Promise_<components[_schemas_][*pool_updates*]\>

poolsByIdUpdates

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`poolId`: _string_): _Promise_<components[_schemas_][*pool_updates*]\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `poolId` | _string_ |

**Returns:** _Promise_<components[_schemas_][*pool_updates*]\>

Defined in: [endpoints/pools/index.ts:165](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L165)

Defined in: [index.ts:419](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L419)

---

### poolsRetired

• **poolsRetired**: () => _Promise_<components[_schemas_][*pool_list_retire*]\>

poolsRetired

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*pool_list_retire*]\>

**Returns:** _Promise_<components[_schemas_][*pool_list_retire*]\>

Defined in: [endpoints/pools/index.ts:23](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L23)

Defined in: [index.ts:427](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L427)

---

### poolsRetiring

• **poolsRetiring**: () => _Promise_<components[_schemas_][*pool_list_retire*]\>

poolsRetiring

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<components[_schemas_][*pool_list_retire*]\>

**Returns:** _Promise_<components[_schemas_][*pool_list_retire*]\>

Defined in: [endpoints/pools/index.ts:40](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/pools/index.ts#L40)

Defined in: [index.ts:435](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L435)

---

### projectId

• `Optional` **projectId**: _undefined_ \| _string_

Defined in: [index.ts:79](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L79)

---

### root

• **root**: () => _Promise_<{ `url`: _string_ ; `version`: _number_ }\>

root

**`returns`** xxx

#### Type declaration:

▸ (): _Promise_<{ `url`: _string_ ; `version`: _number_ }\>

**Returns:** _Promise_<{ `url`: _string_ ; `version`: _number_ }\>

Defined in: [endpoints/root/index.ts:5](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/root/index.ts#L5)

Defined in: [index.ts:443](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L443)

---

### txs

• **txs**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content*]\>

txs

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content*]\>

Defined in: [endpoints/txs/index.ts:6](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L6)

Defined in: [index.ts:452](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L452)

---

### txsDelegations

• **txsDelegations**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content_delegations*]\>

txsDelegations

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content_delegations*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content_delegations*]\>

Defined in: [endpoints/txs/index.ts:60](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L60)

Defined in: [index.ts:470](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L470)

---

### txsMetadata

• **txsMetadata**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_metadata_label_json*]\>

txxMetadata

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_metadata_label_json*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_metadata_label_json*]\>

Defined in: [endpoints/txs/index.ts:132](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L132)

Defined in: [index.ts:524](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L524)

---

### txsMetadataCbor

• **txsMetadataCbor**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content_metadata_cbor*]\>

txsMetadataCbor

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content_metadata_cbor*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content_metadata_cbor*]\>

Defined in: [endpoints/txs/index.ts:150](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L150)

Defined in: [index.ts:461](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L461)

---

### txsPoolRetires

• **txsPoolRetires**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content_pool_retires*]\>

txsPoolRetires

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content_pool_retires*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content_pool_retires*]\>

Defined in: [endpoints/txs/index.ts:114](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L114)

Defined in: [index.ts:479](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L479)

---

### txsPoolUpdates

• **txsPoolUpdates**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content_pool_certs*]\>

txsPoolUpdates

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content_pool_certs*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content_pool_certs*]\>

Defined in: [endpoints/txs/index.ts:96](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L96)

Defined in: [index.ts:488](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L488)

---

### txsStakes

• **txsStakes**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content_stake_addr*]\>

txsStakes

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content_stake_addr*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content_stake_addr*]\>

Defined in: [endpoints/txs/index.ts:42](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L42)

Defined in: [index.ts:497](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L497)

---

### txsUtxos

• **txsUtxos**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content_utxo*]\>

txsUtxos

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content_utxo*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content_utxo*]\>

Defined in: [endpoints/txs/index.ts:24](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L24)

Defined in: [index.ts:506](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L506)

---

### txsWithdrawals

• **txsWithdrawals**: (`hash`: _string_) => _Promise_<components[_schemas_][*tx_content_withdrawals*]\>

txsWithdrawals

**`param`**

**`returns`** xxx

#### Type declaration:

▸ (`hash`: _string_): _Promise_<components[_schemas_][*tx_content_withdrawals*]\>

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `hash` | _string_ |

**Returns:** _Promise_<components[_schemas_][*tx_content_withdrawals*]\>

Defined in: [endpoints/txs/index.ts:78](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/endpoints/txs/index.ts#L78)

Defined in: [index.ts:515](https://github.com/blockfrost/blockfrost-api-js/blob/8764471/src/index.ts#L515)
