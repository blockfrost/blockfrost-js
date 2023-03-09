[@blockfrost/blockfrost-js](../README.md) / [Exports](../modules.md) / SignatureVerificationError

# Class: SignatureVerificationError

## Hierarchy

- `Error`

  ↳ **`SignatureVerificationError`**

## Table of contents

### Constructors

- [constructor](SignatureVerificationError.md#constructor)

### Properties

- [detail](SignatureVerificationError.md#detail)
- [message](SignatureVerificationError.md#message)
- [name](SignatureVerificationError.md#name)
- [stack](SignatureVerificationError.md#stack)
- [prepareStackTrace](SignatureVerificationError.md#preparestacktrace)
- [stackTraceLimit](SignatureVerificationError.md#stacktracelimit)

### Methods

- [captureStackTrace](SignatureVerificationError.md#capturestacktrace)

## Constructors

### constructor

• **new SignatureVerificationError**(`message`, `detail?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `detail?` | `Object` |
| `detail.signatureHeader` | `string` |
| `detail.webhookPayload` | `unknown` |

#### Overrides

Error.constructor

#### Defined in

[src/utils/errors.ts:6](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/utils/errors.ts#L6)

## Properties

### detail

• **detail**: `undefined` \| { `signatureHeader`: `string` ; `webhookPayload`: `unknown`  }

#### Defined in

[src/utils/errors.ts:5](https://github.com/blockfrost/blockfrost-js/blob/b64ea86/src/utils/errors.ts#L5)

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
