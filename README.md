<img src="https://blockfrost.io/images/logo.svg" width="500">

![ci](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=master) A JavaScript/TypeScript SDK for interacting with the https://blockfrost.io API.

<br/>

###### BEFORE YOU START

Login to the https://blockfrost.io. Create a project and get your api key.

<img src="/public/screen.png">
<br/>
<br/>

###### INSTALLATION

```javascript
yarn add @blockfrost/blockfrost-js
```

<br/>

###### USAGE

```javascript
import BlockfrostAPI from '@blockfrost/blockfrost-js'

const API = new BlockFrostAPI({
  projectId: YOUR API KEY HERE',
});

try {
  const result = await API.blocksLatest();
  console.log(result);
} catch (err) {
  console.log(err);
}
```
