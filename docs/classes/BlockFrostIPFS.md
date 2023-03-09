[@blockfrost/blockfrost-js](../README.md) / [Exports](../modules.md) / BlockFrostIPFS

# Class: BlockFrostIPFS

## Table of contents

### Constructors

- [constructor](BlockFrostIPFS.md#constructor)

### Properties

- [add](BlockFrostIPFS.md#add)
- [gateway](BlockFrostIPFS.md#gateway)
- [list](BlockFrostIPFS.md#list)
- [listByPath](BlockFrostIPFS.md#listbypath)
- [pin](BlockFrostIPFS.md#pin)
- [pinRemove](BlockFrostIPFS.md#pinremove)

## Constructors

### constructor

• **new BlockFrostIPFS**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Options` |

#### Defined in

[src/BlockFrostIPFS.ts:34](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostIPFS.ts#L34)

## Properties

### add

• **add**: (`this`: [`BlockFrostIPFS`](BlockFrostIPFS.md), `path`: `string`) => `Promise`<`AddResponse`\> = `add`

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
| `this` | [`BlockFrostIPFS`](BlockFrostIPFS.md) | - |
| `path` | `string` | path to the file |

##### Returns

`Promise`<`AddResponse`\>

information about added ipfs object

#### Defined in

[src/BlockFrostIPFS.ts:58](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostIPFS.ts#L58)

___

### gateway

• **gateway**: (`this`: [`BlockFrostIPFS`](BlockFrostIPFS.md), `path`: `string`) => `Promise`<`unknown`\> = `gateway`

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
| `this` | [`BlockFrostIPFS`](BlockFrostIPFS.md) | - |
| `path` | `string` | path to the file |

##### Returns

`Promise`<`unknown`\>

the object content

#### Defined in

[src/BlockFrostIPFS.ts:59](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostIPFS.ts#L59)

___

### list

• **list**: (`this`: [`BlockFrostIPFS`](BlockFrostIPFS.md), `pagination?`: `PaginationOptions`) => `Promise`<`ListResponse`\> = `list`

#### Type declaration

▸ (`this`, `pagination?`): `Promise`<`ListResponse`\>

List pinned IPFS resources.

**`See`**

[API docs for List pinned objects](https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1list/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](BlockFrostIPFS.md) | - |
| `pagination?` | `PaginationOptions` | Optional, Pagination options |

##### Returns

`Promise`<`ListResponse`\>

List of pinned IPFS objects

#### Defined in

[src/BlockFrostIPFS.ts:62](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostIPFS.ts#L62)

___

### listByPath

• **listByPath**: (`this`: [`BlockFrostIPFS`](BlockFrostIPFS.md), `path`: `string`) => `Promise`<`ListResponse`\> = `listByPath`

#### Type declaration

▸ (`this`, `path`): `Promise`<`ListResponse`\>

Obtains information about locally pinned IPFS object

**`See`**

[API docs for Details about pinned object](https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1list~1%7BIPFS_path%7D/get)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](BlockFrostIPFS.md) | - |
| `path` | `string` | The path to the IPFS object (IPFS hash) |

##### Returns

`Promise`<`ListResponse`\>

List of pinned IPFS objects

#### Defined in

[src/BlockFrostIPFS.ts:61](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostIPFS.ts#L61)

___

### pin

• **pin**: (`this`: [`BlockFrostIPFS`](BlockFrostIPFS.md), `path`: `string`) => `Promise`<`PinResponse`\> = `pin`

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
| `this` | [`BlockFrostIPFS`](BlockFrostIPFS.md) | - |
| `path` | `string` | path to the file |

##### Returns

`Promise`<`PinResponse`\>

Pinned object

#### Defined in

[src/BlockFrostIPFS.ts:60](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostIPFS.ts#L60)

___

### pinRemove

• **pinRemove**: (`this`: [`BlockFrostIPFS`](BlockFrostIPFS.md), `path`: `string`) => `Promise`<`string`\> = `pinRemove`

#### Type declaration

▸ (`this`, `path`): `Promise`<`string`\>

Removes pinned object from local storage

**`See`**

[API docs for Remove a IPFS pin](https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1remove~1%7BIPFS_path%7D/post)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`BlockFrostIPFS`](BlockFrostIPFS.md) | - |
| `path` | `string` | The path to the IPFS object (IPFS hash) |

##### Returns

`Promise`<`string`\>

List of pinned IPFS objects

#### Defined in

[src/BlockFrostIPFS.ts:63](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/BlockFrostIPFS.ts#L63)
