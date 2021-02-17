<img src="https://blockfrost.io/images/logo.svg" width="500">

A JavaScript/TypeScript SDK for interacting with the https://blockfrost.io API.

###### BEFORE YOU START

Login to the https://blockfrost.io. Create a project and get your api key.

<img src="/public/screen.png">

###### INSTALLATION

```
yarn add @blockfrost/blockfrost-js
```

###### USAGE

```
import BlockfrostAPI from '@blockfrost/blockfrost-js'

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
