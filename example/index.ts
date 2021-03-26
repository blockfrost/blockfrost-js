import { BlockFrostAPI } from '../src/index';

async function run() {
  const API = new BlockFrostAPI({
    projectId: 'G8CaeClBRTr5CiUxCLzgGeqGoVbwuaZs',
  });

  try {
    const response = await API.blocksLatest();
    console.log(response);
  } catch (err) {
    console.log('error', err);
  }
}

run();
