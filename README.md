<img src="https://blockfrost.io/images/logo.svg" width="500">

A JavaScript/TypeScript SDK for interacting with the https://blockfrost.io API.

<br>

###### BEFORE YOU START

1. Login to the https://blockfrost.io. Create a project and get your api key.

<img src="/docs/api_key.png">

Make sure you have downloaded and installed [Node.js](https://nodejs.org/en/download/) - node v14 is recommended.
[Yarn](https://yarnpkg.com/lang/en/docs/install/) is recommended (we use yarn.lock)

<br>

###### INSTALLATION

```
$ yarn add blockfrost-api
```

<br>
###### USAGE

```
import BlockfrostAPI from '@blockfrost/api-js'

const api = new BlockfrostAPI({
    projectId: 'xxx'
})

const latestBlock = api.blockLatest();
```
