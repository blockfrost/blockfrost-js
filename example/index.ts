import { BlockFrostAPI } from '../src/index';

async function run() {
  const API = new BlockFrostAPI({
    projectId: 'jOhDckOVcwx1UrlUCl9iAcHWem2pzZgI',
  });

  try {
    const response = await API.health();
    console.log(response);
  } catch (err) {
    console.log('error', err);
  }
}

run();
