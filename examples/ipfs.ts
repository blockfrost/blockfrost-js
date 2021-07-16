import { BlockFrostIPFS } from '../src/index';
import fs from 'fs';

async function run() {
  const IPFS = new BlockFrostIPFS({
    projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
  });

  try {
    const stream = fs.createReadStream(`${__dirname}/img.svg`);
    const added = await IPFS.add(stream);

    console.log('added', added);

    const pinned = await IPFS.pin(added.ipfs_hash);

    console.log('pinned', pinned);
  } catch (err) {
    console.log('error', err);
  }
}

run();
