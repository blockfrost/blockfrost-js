# Class: BlockfrostServerError

## Hierarchy

- `Error`

  ↳ **`BlockfrostServerError`**

## Table of contents

### Constructors

- [constructor](../wiki/BlockfrostServerError#constructor)

### Properties

- [body](../wiki/BlockfrostServerError#body)
- [error](../wiki/BlockfrostServerError#error)
- [message](../wiki/BlockfrostServerError#message)
- [name](../wiki/BlockfrostServerError#name)
- [stack](../wiki/BlockfrostServerError#stack)
- [status\_code](../wiki/BlockfrostServerError#status_code)
- [url](../wiki/BlockfrostServerError#url)
- [prepareStackTrace](../wiki/BlockfrostServerError#preparestacktrace)
- [stackTraceLimit](../wiki/BlockfrostServerError#stacktracelimit)

### Methods

- [captureStackTrace](../wiki/BlockfrostServerError#capturestacktrace)

## Constructors

### constructor

• **new BlockfrostServerError**(`error`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Object` |
| `error.body?` | `unknown` |
| `error.error` | `string` |
| `error.message` | `string` |
| `error.status_code` | `number` |
| `error.url` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/utils/errors.ts:26](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/utils/errors.ts#L26)

## Properties

### body

• **body**: `unknown`

#### Defined in

[src/utils/errors.ts:25](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/utils/errors.ts#L25)

___

### error

• **error**: `string`

#### Defined in

[src/utils/errors.ts:23](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/utils/errors.ts#L23)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### status\_code

• **status\_code**: `number`

#### Defined in

[src/utils/errors.ts:22](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/utils/errors.ts#L22)

___

### url

• **url**: `string`

#### Defined in

[src/utils/errors.ts:24](https://github.com/blockfrost/blockfrost-js/blob/2cc5738/src/utils/errors.ts#L24)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
