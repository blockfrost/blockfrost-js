# @blockfrost/blockfrost-js

## Table of contents

### Classes

- [BlockFrostAPI](../wiki/BlockFrostAPI)
- [BlockFrostIPFS](../wiki/BlockFrostIPFS)
- [BlockfrostClientError](../wiki/BlockfrostClientError)
- [BlockfrostServerError](../wiki/BlockfrostServerError)
- [SignatureVerificationError](../wiki/SignatureVerificationError)

### Type Aliases

- [Responses](../wiki/Exports#responses)

### Functions

- [deriveAddress](../wiki/Exports#deriveaddress)
- [getFingerprint](../wiki/Exports#getfingerprint)
- [parseAsset](../wiki/Exports#parseasset)
- [verifyWebhookSignature](../wiki/Exports#verifywebhooksignature)

## Type Aliases

### Responses

Ƭ **Responses**: `Schemas`

#### Defined in

[src/index.ts:16](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/index.ts#L16)

## Functions

### deriveAddress

▸ **deriveAddress**(`accountPublicKey`, `role`, `addressIndex`, `isTestnet`, `isByron?`): `Object`

Derives an address with derivation path `m/1852'/1815'/account'/role/addressIndex`
If role is set to `2` then it returns a stake address (`m/1852'/1815'/account'/2/addressIndex`)

**`Example`**

```ts
const Blockfrost = require('@blockfrost/blockfrost-js');
const res = Blockfrost.deriveAddress(
'7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
 0,
 1,
 false,
);
console.log(res);
// {
//   address: 'addr1qy535472n2ctu3x55v03zmm9jnz54grqu3sueap9pnk4xys49ucjdfty5p5qlw5qe28v9k988stffc2g0hx2xx86a2dq5u58qk',
//   path: [0, 1],
// }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountPublicKey` | `string` | hex-encoded account public key |
| `role` | `number` | role within derivation path `m/1852'/1815'/account'/role/addressIndex` |
| `addressIndex` | `number` | address index within derivation path `m/1852'/1815'/account'/role/addressIndex` |
| `isTestnet` | `boolean` | Whether to derive testnet address |
| `isByron?` | `boolean` | Whether to derive Byron address (Optional, default false) |

#### Returns

`Object`

Object with bech32 address and corresponding partial derivation path `{address: string, path: [role, addressIndex]}`

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `path` | [`number`, `number`] |

#### Defined in

[src/utils/helpers.ts:41](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/utils/helpers.ts#L41)

___

### getFingerprint

▸ **getFingerprint**(`policyId`, `assetName?`): `string`

Calculates asset fingerprint.

**`Example`**

```ts
const Blockfrost = require('@blockfrost/blockfrost-js');
const res = Blockfrost.getFingerprint(
 '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
 '6e7574636f696e',
);
console.log(res);
// 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `string` | Policy Id |
| `assetName?` | `string` | hex-encoded asset name |

#### Returns

`string`

Asset fingerprint for the given policy ID and asset name.

#### Defined in

[src/utils/helpers.ts:154](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/utils/helpers.ts#L154)

___

### parseAsset

▸ **parseAsset**(`hex`): `ParseAssetResult`

Parses asset hex and returns its policy ID, asset name and fingerprint.

**`Example`**

```ts
const Blockfrost = require('@blockfrost/blockfrost-js');
const res = Blockfrost.parseAsset('00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e');
console.log(res);
// {
//   "assetName": 'nutcoin',
//   "assetNameHex": '6e7574636f696e',
//   "fingerprint": 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd',
//   "policyId": '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
// }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | hex-encoded asset |

#### Returns

`ParseAssetResult`

Object containing `policyId`, `assetName`, `assetNameHex` and `fingerprint`.

#### Defined in

[src/utils/helpers.ts:179](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/utils/helpers.ts#L179)

___

### verifyWebhookSignature

▸ **verifyWebhookSignature**(`webhookPayload`, `signatureHeader`, `secret`, `timestampToleranceSeconds?`): `boolean`

Verifies webhook signature

**`Remarks`**

Webhooks enable Blockfrost to push real-time notifications to your application. In order to prevent malicious actor from pretending to be Blockfrost every webhook request is signed. The signature is included in a request's `Blockfrost-Signature` header. This allows you to verify that the events were sent by Blockfrost, not by a third party.

To learn more about Secure Webhooks, see [Secure Webhooks Docs](https://blockfrost.dev/docs/start-building/webhooks/).
For full example project, see [webhook-basic example](https://github.com/blockfrost/blockfrost-js-examples/tree/master/examples/webhook-basic).

**`Throws`**

[SignatureVerificationError](../wiki/SignatureVerificationError)
Thrown if the signature is not valid. For easier debugging the SignatureVerificationError has additional detail object with 2 properties - header and request_body.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `webhookPayload` | `unknown` | `undefined` | Buffer or stringified payload of the webhook request. |
| `signatureHeader` | `string` \| `string`[] | `undefined` | Buffer or stringified Blockfrost-Signature header. |
| `secret` | `string` | `undefined` | Auth token for the webhook. |
| `timestampToleranceSeconds` | `number` | `600` | Time tolerance affecting signature validity. Optional, by default signatures older than 600s are considered invalid. |

#### Returns

`boolean`

`true` for the valid signature, otherwise throws `SignatureVerificationError`

#### Defined in

[src/utils/helpers.ts:211](https://github.com/blockfrost/blockfrost-js/blob/78b46ea/src/utils/helpers.ts#L211)
