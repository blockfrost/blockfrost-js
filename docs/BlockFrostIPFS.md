# Class: BlockFrostIPFS

## Table of contents

### Constructors

- [constructor](../wiki/BlockFrostIPFS#constructor)

### Properties

- [add](../wiki/BlockFrostIPFS#add)
- [apiUrl](../wiki/BlockFrostIPFS#apiurl)
- [gateway](../wiki/BlockFrostIPFS#gateway)
- [instance](../wiki/BlockFrostIPFS#instance)
- [list](../wiki/BlockFrostIPFS#list)
- [listByPath](../wiki/BlockFrostIPFS#listbypath)
- [options](../wiki/BlockFrostIPFS#options)
- [pin](../wiki/BlockFrostIPFS#pin)
- [pinRemove](../wiki/BlockFrostIPFS#pinremove)
- [projectId](../wiki/BlockFrostIPFS#projectid)
- [rateLimiter](../wiki/BlockFrostIPFS#ratelimiter)
- [userAgent](../wiki/BlockFrostIPFS#useragent)

## Constructors

### constructor

• **new BlockFrostIPFS**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Options` |

#### Defined in

[src/BlockFrostIPFS.ts:27](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L27)

## Properties

### add

• **add**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`AddResponse`\> = `add`

#### Type declaration

▸ (`this`, `path`): `Promise`<`AddResponse`\>

add - Add a file or directory to ipfs

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) |
| `path` | `string` |

##### Returns

`Promise`<`AddResponse`\>

information about added ipfs object

#### Defined in

[src/BlockFrostIPFS.ts:56](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L56)

___

### apiUrl

• **apiUrl**: `string`

#### Defined in

[src/BlockFrostIPFS.ts:20](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L20)

___

### gateway

• **gateway**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`unknown`\> = `gateway`

#### Type declaration

▸ (`this`, `path`): `Promise`<`unknown`\>

gateway - Relay to an ipfs gateway

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) |
| `path` | `string` |

##### Returns

`Promise`<`unknown`\>

the object content

#### Defined in

[src/BlockFrostIPFS.ts:64](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L64)

___

### instance

• **instance**: `Got`

#### Defined in

[src/BlockFrostIPFS.ts:24](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L24)

___

### list

• **list**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `pagination?`: `PaginationOptions`) => `Promise`<`ListResponse`\> = `list`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`ListResponse`\>

list - List objects pinned to local storage

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) |
| `pagination?` | `PaginationOptions` |

##### Returns

`Promise`<`ListResponse`\>

list of pinned objects

#### Defined in

[src/BlockFrostIPFS.ts:88](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L88)

___

### listByPath

• **listByPath**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`ListResponse`\> = `listByPath`

#### Type declaration

▸ (`this`, `path`): `Promise`<`ListResponse`\>

listByPath - List objects pinned to local storage

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) |
| `path` | `string` |

##### Returns

`Promise`<`ListResponse`\>

list of pinned objects

#### Defined in

[src/BlockFrostIPFS.ts:80](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L80)

___

### options

• **options**: `ValidatedOptions`

#### Defined in

[src/BlockFrostIPFS.ts:23](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L23)

___

### pin

• **pin**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`PinResponse`\> = `pin`

#### Type declaration

▸ (`this`, `path`): `Promise`<`PinResponse`\>

pin - Pin an object

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) |
| `path` | `string` |

##### Returns

`Promise`<`PinResponse`\>

pinned object

#### Defined in

[src/BlockFrostIPFS.ts:72](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L72)

___

### pinRemove

• **pinRemove**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`string`\> = `pinRemove`

#### Type declaration

▸ (`this`, `path`): `Promise`<`string`\>

pinRemove - Remove pinned objects from local storage

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) |
| `path` | `string` |

##### Returns

`Promise`<`string`\>

removed pinned object

#### Defined in

[src/BlockFrostIPFS.ts:96](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L96)

___

### projectId

• `Optional` **projectId**: `string`

#### Defined in

[src/BlockFrostIPFS.ts:21](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L21)

___

### rateLimiter

• **rateLimiter**: `undefined` \| `Bottleneck`

#### Defined in

[src/BlockFrostIPFS.ts:25](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L25)

___

### userAgent

• `Optional` **userAgent**: `string`

#### Defined in

[src/BlockFrostIPFS.ts:22](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/BlockFrostIPFS.ts#L22)
