import { BlockFrostIPFS } from '../src/index';

async function run() {
  const IPFS = new BlockFrostIPFS({
    projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
  });

  try {
    const added = await IPFS.add({
      path: 'https://blockfrost.io/images/logo.svg',
      sourceType: 'url',
    });

    console.log('added', added);

    const pinned = await IPFS.pin(added.cid);

    console.log('pinned', pinned);
  } catch (err) {
    console.log('error', err);
  }
}

run();
