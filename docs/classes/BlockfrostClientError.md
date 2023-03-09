[@blockfrost/blockfrost-js](../README.md) / [Exports](../modules.md) / BlockfrostClientError

# Class: BlockfrostClientError

## Hierarchy

- `Error`

  ↳ **`BlockfrostClientError`**

## Table of contents

### Constructors

- [constructor](BlockfrostClientError.md#constructor)

### Properties

- [code](BlockfrostClientError.md#code)
- [message](BlockfrostClientError.md#message)
- [name](BlockfrostClientError.md#name)
- [stack](BlockfrostClientError.md#stack)
- [url](BlockfrostClientError.md#url)
- [prepareStackTrace](BlockfrostClientError.md#preparestacktrace)
- [stackTraceLimit](BlockfrostClientError.md#stacktracelimit)

### Methods

- [captureStackTrace](BlockfrostClientError.md#capturestacktrace)

## Constructors

### constructor

• **new BlockfrostClientError**(`error`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Object` |
| `error.code` | `string` |
| `error.message` | `string` |
| `error.url` | `undefined` \| `string` |

#### Overrides

Error.constructor

#### Defined in

[src/utils/errors.ts:41](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/utils/errors.ts#L41)

## Properties

### code

• **code**: `string`

#### Defined in

[src/utils/errors.ts:39](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/utils/errors.ts#L39)

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

### url

• **url**: `undefined` \| `string`

#### Defined in

[src/utils/errors.ts:40](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/utils/errors.ts#L40)

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
