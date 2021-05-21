import { BlockFrostAPI } from '../src/index';
async function run() {
  const API = new BlockFrostAPI({
    projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
  });

  try {
    const response = await API.blocksLatest();
    console.log(response);
  } catch (err) {
    console.log('error', err.data);
  }
}

run();
