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

[src/BlockFrostIPFS.ts:27](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L27)

## Properties

### add

• **add**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`AddResponse`\> = `add`

#### Type declaration

▸ (`this`, `path`): `Promise`<`AddResponse`\>

Adds a file to IPFS

**`See`**

[API docs for Add a file to IPFS](https://docs.blockfrost.io/#tag/IPFS-Add)

**`Remarks`**

You need to `pin` an object to avoid it being garbage collected. This usage is being counted in your user account quota.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) | - |
| `path` | `string` | path to the file |

##### Returns

`Promise`<`AddResponse`\>

information about added ipfs object

#### Defined in

[src/BlockFrostIPFS.ts:51](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L51)

___

### apiUrl

• **apiUrl**: `string`

#### Defined in

[src/BlockFrostIPFS.ts:20](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L20)

___

### gateway

• **gateway**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`unknown`\> = `gateway`

#### Type declaration

▸ (`this`, `path`): `Promise`<`unknown`\>

Retrieve an object from the IPFS gateway

**`See`**

[API docs for Relay to an IPFS gateway](https://docs.blockfrost.io/#tag/IPFS-Gateway/paths/~1ipfs~1gateway~1%7BIPFS_path%7D/get)

**`Remarks`**

Useful if you do not want to rely on a public gateway, such as ipfs.blockfrost.dev.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) | - |
| `path` | `string` | path to the file |

##### Returns

`Promise`<`unknown`\>

the object content

#### Defined in

[src/BlockFrostIPFS.ts:52](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L52)

___

### instance

• **instance**: `Got`

#### Defined in

[src/BlockFrostIPFS.ts:24](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L24)

___

### list

• **list**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `pagination?`: `PaginationOptions`) => `Promise`<`ListResponse`\> = `list`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`ListResponse`\>

List pinned IPFS resources.

**`See`**

[API docs for List pinned objects](https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1list/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`ListResponse`\>

List of pinned IPFS objects

#### Defined in

[src/BlockFrostIPFS.ts:55](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L55)

___

### listByPath

• **listByPath**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`ListResponse`\> = `listByPath`

#### Type declaration

▸ (`this`, `path`): `Promise`<`ListResponse`\>

Obtains information about locally pinned IPFS object

**`See`**

[API docs for Details about pinned object](https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1list~1%7BIPFS_path%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) | - |
| `path` | `string` | The path to the IPFS object (IPFS hash) |

##### Returns

`Promise`<`ListResponse`\>

List of pinned IPFS objects

#### Defined in

[src/BlockFrostIPFS.ts:54](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L54)

___

### options

• **options**: `ValidatedOptions`

#### Defined in

[src/BlockFrostIPFS.ts:23](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L23)

___

### pin

• **pin**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`PinResponse`\> = `pin`

#### Type declaration

▸ (`this`, `path`): `Promise`<`PinResponse`\>

Pins the IPFS resource.

**`See`**

[API docs for Pin an object](https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1add~1%7BIPFS_path%7D/post)

**`Remarks`**

IPFS pinning refers to the process of specifying data to be retained and persist on one or more IPFS nodes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) | - |
| `path` | `string` | path to the file |

##### Returns

`Promise`<`PinResponse`\>

Pinned object

#### Defined in

[src/BlockFrostIPFS.ts:53](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L53)

___

### pinRemove

• **pinRemove**: (`this`: [`BlockFrostIPFS`](../wiki/BlockFrostIPFS), `path`: `string`) => `Promise`<`string`\> = `pinRemove`

#### Type declaration

▸ (`this`, `path`): `Promise`<`string`\>

Removes pinned object from local storage

**`See`**

[API docs for Remove a IPFS pin](https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1remove~1%7BIPFS_path%7D/post)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](../wiki/BlockFrostIPFS) | - |
| `path` | `string` | The path to the IPFS object (IPFS hash) |

##### Returns

`Promise`<`string`\>

List of pinned IPFS objects

#### Defined in

[src/BlockFrostIPFS.ts:56](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L56)

___

### projectId

• `Optional` **projectId**: `string`

#### Defined in

[src/BlockFrostIPFS.ts:21](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L21)

___

### rateLimiter

• **rateLimiter**: `undefined` \| `Bottleneck`

#### Defined in

[src/BlockFrostIPFS.ts:25](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L25)

___

### userAgent

• `Optional` **userAgent**: `string`

#### Defined in

[src/BlockFrostIPFS.ts:22](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/BlockFrostIPFS.ts#L22)
