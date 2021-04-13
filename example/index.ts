import { BlockFrostAPI } from '../src/index';

async function run() {
  const API = new BlockFrostAPI({
    projectId: 'v4yhZTgZRjJJbLAPMOmMGtZFg3MGIWiT', // see: https://blockfrost.io
  });

  try {
    const response = await API.txs(
      '28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026',
    );
    console.log(response);
  } catch (err) {
    console.log('error', err.data);
  }
}

run();
