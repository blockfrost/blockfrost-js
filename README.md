# @blockfrost/blockfrost-js fork

This is a fork of blockfrost-js 2.0.2, adding support for rate limiting. It seems to be working, but to consider it done:
- Rebase on latest blockfrost-js
- Add options for rate limit (currently hardcoded 10/s and 500 burst with 10/s cooldown)
- Add some test coverage

<img src="https://blockfrost.io/images/logo.svg" width="250" align="right" height="90">

# blockfrost-js

<br/>

<p align="center">A JavaScript/Typescript SDK for <a href="https://blockfrost.io">Blockfrost.io</a> API.</p>
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

The SDK is hosted on [npmjs.com](https://www.npmjs.com/package/@blockfrost/blockfrost-js), so you can directly import it using your favorite package manager.

```console
$ npm i @blockfrost/blockfrost-js
```

<br/>

## Usage

Using the SDK is pretty straight-forward as you can see from the following examples.

### Cardano

```typescript
import { BlockFrostAPI } from '@blockfrost/blockfrost-js';

const API = new BlockFrostAPI({
  projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
});
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
```

### IPFS

```typescript
import { BlockFrostIPFS } from '@blockfrost/blockfrost-js';

const IPFS = new BlockFrostIPFS({
  projectId: 'YOUR IPFS KEY HERE', // see: https://blockfrost.io
});

try {
  const added = await IPFS.add(`${__dirname}/img.svg`);
  console.log('added', added);

  const pinned = await IPFS.pin(added.ipfs_hash);
  console.log('pinned', pinned);
} catch (err) {
  console.log('error', err);
}
```

For a more detailed list of possibilities, [check out the wiki](https://github.com/blockfrost/blockfrost-js/wiki).
