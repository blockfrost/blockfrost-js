![master build ci](https://github.com/blockfrost/blockfrost-js/actions/workflows/build.yml/badge.svg?branch=master) [![npm version](https://badge.fury.io/js/%40blockfrost%2Fblockfrost-js.svg)](https://badge.fury.io/js/%40blockfrost%2Fblockfrost-js) ![downloads](https://img.shields.io/npm/dy/@blockfrost/blockfrost-js) <img src="https://github.com/blockfrost/blockfrost-js/blob/master/docs/badge-coverage.svg" /> <a href="https://fivebinaries.com/"><img src="https://img.shields.io/badge/made%20by-Five%20Binaries-darkviolet.svg?style=flat-square" /></a>

<img src="https://blockfrost.io/images/logo.svg" width="250" align="right" height="90">

# blockfrost-js

<br/>

<p align="center"><a href="https://blockfrost.io">Blockfrost.io</a> SDK for JavaScript for Node.js.</p>
<p align="center">
  <a href="#getting-started">Getting started</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a>
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
- `isTestnet` - `boolean`, whether the projectId is intended for testnet network (optional, default value is derived from the `projectId` itself if possible)
- `rateLimiter` - `boolean` or [`RateLimiterConfig`](https://github.com/blockfrost/blockfrost-js/blob/master/src/utils/limiter.ts#L18=), whether to enable rate limiter that matches [Blockfrost API limits](https://docs.blockfrost.io/#section/Limits) (optional, default `true`). If you have your IP addresses white-listed you may want to disable it. You may also customize rate limiter by passing your own [config object](ttps://github.com/blockfrost/blockfrost-js/blob/master/src/utils/limiter.ts#11).
- `requestTimeout` - `number`, How long to wait for a request to complete, in milliseconds (optional, default `20000`)
- `retrySettings` - `RequiredRetryOptions`, customizations for retrying failed request (optional, [for defaults click here](https://github.com/blockfrost/blockfrost-js/blob/master/src/utils/index.ts#L58))
- `debug` - `boolean`, whether to enable debug logging. It is also possible to enable it by setting environment variable `DEBUG` to `true` (optional, default `false`).
- `customBackend` - `string`, option to set URL to a non-official backend (optional)
- `version` - `number`, version of the Blockfrost API (optional, default `0`)

## Error handling

Blockfrost Node.js SDK throws 2 types of errors, `BlockfrostServerError` and `BlockfrostClientError`. Each of these errors is extended from the built-in `Error` class, allowing you to properly catch it and handle it in your code.

### `BlockfrostServerError`

`BlockfrostServerError` is an error returned directly by Blockfrost API. The error's properties are matching [the same format as defined by Blockfrost API](<(https://docs.blockfrost.io/#section/Errors)>).

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

Shape of `BlockfrostClientError` object is slightly different from `BlockfrostServerError`. The error has `code` and `message` property to help you investigate the issue.

Here is a small example showcasing the error format:

```json
{
  "code": "ENOTFOUND",
  "message": "getaddrinfo ENOTFOUND api.blockfrost.io"
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

For a more detailed list of possibilities, [check out the wiki](https://github.com/blockfrost/blockfrost-js/wiki).
