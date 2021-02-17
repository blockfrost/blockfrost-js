<img src="https://blockfrost.io/images/logo.svg" width="500">

A JavaScript/TypeScript SDK for interacting with the https://blockfrost.io API.

<br />

###### BEFORE YOU START

Make sure you have downloaded and installed [Node.js](https://nodejs.org/en/download/) - node v14 is recommended.
[Yarn](https://yarnpkg.com/lang/en/docs/install/) is recommended (we use yarn.lock)

Login to the https://blockfrost.io. Create a project and get your api key.

<img src="/docs/screen.png">

<br />

###### INSTALLATION

```
$ yarn add blockfrost-api
```

<br />
###### USAGE

```
import BlockfrostAPI from '@blockfrost/api-js'

const API = new BlockFrostAPI({
  isTestnet: true,
  projectId: YOUR API KEY HERE',
});

try {
  const result = await API.blocksLatest();
  console.log(result);
} catch (err) {
  console.log(err);
}
```
