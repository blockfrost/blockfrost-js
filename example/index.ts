import { BlockFrostAPI } from '../src/index';
async function run() {
  const API = new BlockFrostAPI({
    projectId: 'cIeLBZLcKvpDwGNX3Sa6BFtjrRHSwAl1', // see: https://blockfrost.io
  });

  try {
    const response = await API.blocksTxsAll(
      '88643ab69af8b44bd93c1d1ef74c54817761cd2868866ffd8f16341e0158f9d2',
    );
    console.log(response);
  } catch (err) {
    console.log('error', err.data);
  }
}

run();
