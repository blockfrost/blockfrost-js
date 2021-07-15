import { BlockFrostAPI } from '../src/index';

async function run() {
  const API = new BlockFrostAPI({
    projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
  });

  try {
    const latestBlock = await API.blocksLatest();
    const assets = await API.assets();
    const health = await API.health();
    const address = await API.addresses(
      'addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz',
    );

    console.log(address, assets, latestBlock, health);
  } catch (err) {
    console.log('error', err);
  }
}

run();
