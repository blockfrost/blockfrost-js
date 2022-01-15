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
