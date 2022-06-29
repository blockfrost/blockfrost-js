import { BlockFrostIPFS } from '@blockfrost/blockfrost-js';

async function run() {
  const IPFS = new BlockFrostIPFS({
    projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
  });

  try {
    const added = await IPFS.add(`${__dirname}/images/blockfrost.svg`);
    console.log('added', added);

    const pinned = await IPFS.pin(added.ipfs_hash);
    console.log('pinned', pinned);
  } catch (err) {
    console.log('error', err);
  }
}

run();
