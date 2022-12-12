![master build ci](https://github.com/blockfrost/blockfrost-js/actions/workflows/build.yml/badge.svg?branch=master) [![npm version](https://badge.fury.io/js/%40blockfrost%2Fblockfrost-js.svg)](https://badge.fury.io/js/%40blockfrost%2Fblockfrost-js) ![downloads](https://img.shields.io/npm/dy/@blockfrost/blockfrost-js) <img src="https://github.com/blockfrost/blockfrost-js/blob/master/coverage-badge.svg" /> <a href="https://fivebinaries.com/"><img src="https://img.shields.io/badge/made%20by-Five%20Binaries-darkviolet.svg?style=flat-square" /></a>

<img src="https://blockfrost.io/images/logo.svg" width="250" align="right" height="90">

# blockfrost-js

<br/>

<p align="center"><a href="https://blockfrost.io">Blockfrost.io</a> SDK for JavaScript for Node.js.</p>
<p align="center">
  <a href="#getting-started">Getting started</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="https://github.com/blockfrost/blockfrost-examples" target="_blank">Examples</a>
</p>
<br>

## Getting started

To use this SDK, you first need to log in to [blockfrost.io](https://blockfrost.io), create your project and retrieve the API token.

<img src="https://i.imgur.com/smY12ro.png">

<br/>

## Installation

To run the SDK you need Node.js version 14 and higher. While you may find a way to run it directly in a browser, we don't actively support or provide troubleshooting assistance with this scenario. We recommend setting up your own Node.js backend. Exposing your API keys in a frontend application is almost always a bad idea.

The SDK is hosted on [npmjs.com](https://www.npmjs.com/package/@blockfrost/blockfrost-js), so you can directly import it using your favorite package manager.

```console
npm i @blockfrost/blockfrost-js
```

```console
yarn add @blockfrost/blockfrost-js
```

<br/>

## Usage

Using the SDK is pretty straight-forward as you can see from the following examples.
For more examples take a look in [examples](examples/) directory.

```ts
const API = new Blockfrost.BlockFrostAPI({
  projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
  // For a list of all options see section below
});
```

### Options

- `projectId` - `string`, Blockfrost project ID (required)
- `network` - `string`, Cardano network for given project ID. (optional, default value is derived from the `projectId` itself if possible). Possible values: `mainnet`, `testnet`, `preview`, `preprod`.
- `rateLimiter` - `boolean` or [`RateLimiterConfig`](https://github.com/blockfrost/blockfrost-js/blob/master/src/utils/limiter.ts#L18=), whether to enable rate limiter that matches [Blockfrost API limits](https://docs.blockfrost.io/#section/Limits) (optional, default `true`). If you have your IP addresses white-listed you may want to disable it. You may also customize rate limiter by passing your own [config object](ttps://github.com/blockfrost/blockfrost-js/blob/master/src/utils/limiter.ts#11).
- `requestTimeout` - `number`, How long to wait for a request to complete, in milliseconds (optional, default `20000`)
- `retrySettings` - `RequiredRetryOptions`, customizations for retrying failed request (optional, [for defaults click here](https://github.com/blockfrost/blockfrost-js/blob/master/src/utils/index.ts#L58))
- `debug` - `boolean`, whether to enable debug logging. It is also possible to enable it by setting environment variable `DEBUG` to `true` (optional, default `false`).
- `customBackend` - `string`, option to set URL to a non-official backend (optional)
- `version` - `number`, version of the Blockfrost API (optional, default `0`)

## Error handling

Blockfrost Node.js SDK throws 2 types of errors, `BlockfrostServerError` and `BlockfrostClientError`. Each of these errors is extended from the built-in `Error` class, allowing you to properly catch it and handle it in your code.

### `BlockfrostServerError`

`BlockfrostServerError` is an error returned directly by Blockfrost API. The error object's properties are matching [the same format as defined by Blockfrost API](<(https://docs.blockfrost.io/#section/Errors)>), with additional `url` field set to the URL the request was sent to and optional `body` field set to the original body of the error response in cases where the error was not returned by Blockfrost Backend (eg. nginx).

#### Example

Blockfrost API returns 404 Not Found for any resource that does not exist on chain at the moment, even when in theory, it could exist. For more detailed explanation check [Blockfrost developer portal](https://www.blockfrost.dev/docs/support/cardano#querying-address-returns-404-not-found-but-my-address-is-valid).

```ts
// Example demonstrating catching BlockfrostServerError
try {
  const address = await API.addresses('totallyValidAddress');
} catch (error) {
  if (error instanceof BlockfrostServerError && error.status_code === 404) {
    // address was not used before, but most likely we don't want to throw an error
    console.log("Address is totally empty! But that's ok!");
  } else {
    // rethrow other errors
    throw error;
  }
}
```

### `BlockfrostClientError`

`BlockfrostClientError` is an error that was NOT returned by a Blockfrost API server. In this case the request has never reached our backends. Most common causes are network-related.

Shape of `BlockfrostClientError` object is slightly different from `BlockfrostServerError`. The error has `code` and `message` and optional `url` property to help you investigate the issue.

Here is a small example showcasing the error format:

```json
{
  "code": "ENOTFOUND",
  "message": "getaddrinfo ENOTFOUND api.blockfrost.io",
  "url": "https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp333c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz"
}
```

#### Example

```ts
// Example demonstrating catching a network-related client error
try {
  const address = await API.addresses('totallyValidAddress');
} catch (error) {
  if (error instanceof BlockfrostClientError) {
    console.log('Oops, error during sending the request');
  }
  // Depending on your use case you may want to rethrow the error
  throw error;
}
```

## Examples

For more examples take a look in [examples](examples/) directory.

### Cardano

```typescript
const Blockfrost = require('@blockfrost/blockfrost-js');
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax

const API = new Blockfrost.BlockFrostAPI({
  projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
});

async function runExample() {
  try {
    const latestBlock = await API.blocksLatest();
    const networkInfo = await API.network();
    const latestEpoch = await API.epochsLatest();
    const health = await API.health();
    const address = await API.addresses(
      'addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz',
    );
    const pools = await API.pools({ page: 1, count: 10, order: 'asc' });

    console.log('pools', pools);
    console.log('address', address);
    console.log('networkInfo', networkInfo);
    console.log('latestEpoch', latestEpoch);
    console.log('latestBlock', latestBlock);
    console.log('health', health);
  } catch (err) {
    console.log('error', err);
  }
}

runExample();
```

### IPFS

```typescript
const Blockfrost = require('@blockfrost/blockfrost-js');
// import { BlockFrostIPFS } from '@blockfrost/blockfrost-js'; // using import syntax

const IPFS = new Blockfrost.BlockFrostIPFS({
  projectId: 'YOUR IPFS KEY HERE', // see: https://blockfrost.io
});

async function runExample() {
  try {
    const added = await IPFS.add(`${__dirname}/img.svg`);
    console.log('added', added);

    const pinned = await IPFS.pin(added.ipfs_hash);
    console.log('pinned', pinned);
  } catch (err) {
    console.log('error', err);
  }
}

runExample();
```

## Utility functions

Blockfrost SDK exports several utility functions to improve developer experience.

### `verifyWebhookSignature(webhookPayload: unknown, signatureHeader: string, secret: string, timestampToleranceSeconds?: number)`

Webhooks enable Blockfrost to push real-time notifications to your application. In order to prevent malicious actor from pretending to be Blockfrost every webhook request is signed. The signature is included in a request's `Blockfrost-Signature` header. This allows you to verify that the events were sent by Blockfrost, not by a third party.
To learn more about Secure Webhooks, see [Secure Webhooks Docs](https://blockfrost.dev/docs/start-building/webhooks/).

For full example, see [webhook-basic](examples/webhook-basic) example.

The function accepts 4 parameters:

- `webhookPayload` - Buffer or stringified payload of the webhook request.
- `signatureHeader` - Blockfrost-Signature header.
- `secret` - Authentication token for the webhook.
- `timestampToleranceSeconds` - Time tolerance affecting signature validity (optional). By default signatures older than 600s are considered invalid.

If the signature is valid then the function returns `true`. Otherwise It throws `SignatureVerificationError` with various error messages.

For easier debugging the `SignatureVerificationError` has additional `detail` object with 2 properties, `header` and `request_body`.

### `parseAsset(hex: string)`

Parses asset hex and returns object containing `policyId`, `assetName` and `fingerprint`.

```ts
const Blockfrost = require('@blockfrost/blockfrost-js');
const res = Blockfrost.parseAsset(
  '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
);
console.log(res);
// {
//   "assetName": 'nutcoin',
//   "assetNameHex": '6e7574636f696e',
//   "fingerprint": 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd',
//   "policyId": '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
// }
```

### `getFingerprint(policyId: string, assetName?: string)`

Returns asset fingerprint for given `policyId` and `assetName`.

```ts
const Blockfrost = require('@blockfrost/blockfrost-js');
const res = Blockfrost.getFingerprint(
  '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
  '6e7574636f696e',
);
console.log(res);
// 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd'
```

### `deriveAddress(accountPublicKey: string, role: number, addressIndex: number, isTestnet: boolean, isByron?: boolean)`

Derives an address with derivation path `m/1852'/1815'/account'/role/addressIndex`
If role is set to `2` then it returns a stake address (`m/1852'/1815'/account'/2/addressIndex`)

The function returns an object with bech32 address and corresponding partial derivation path `{address: string, path: [role, addressIndex]}`.

```ts
const Blockfrost = require('@blockfrost/blockfrost-js');
const res = Blockfrost.deriveAddress(
  '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152', // account public key
  0, // role
  1, // index
  false, // isTestnet
);
console.log(res);
// {
//   address: 'addr1qy535472n2ctu3x55v03zmm9jnz54grqu3sueap9pnk4xys49ucjdfty5p5qlw5qe28v9k988stffc2g0hx2xx86a2dq5u58qk',
//   path: [0, 1],
// }
```

For a more detailed list of possibilities, [check out the wiki](https://github.com/blockfrost/blockfrost-js/wiki).
