<img src="https://blockfrost.io/images/logo.svg" width="250">

A JavaScript/TypeScript SDK for interacting with the https://blockfrost.io API.

<br/>

###### BEFORE YOU START

Login to the https://blockfrost.io. Create a project and get your api key.

<img src="https://i.imgur.com/smY12ro.png">

<br/>

###### INSTALLATION

```typescript
yarn add @blockfrost/blockfrost-js
```

<br/>

###### USAGE

```typescript
import { BlockfrostAPI } from '@blockfrost/blockfrost-js';

const API = new BlockFrostAPI({
  projectId: 'YOUR API KEY HERE',
});

try {
  const result = await API.blocksLatest();
  console.log(result);
} catch (err) {
  console.log(err);
}
```
