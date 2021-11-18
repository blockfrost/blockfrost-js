// import { BlockFrostAPI } from '../src/index';
import got from 'got';

async function run() {
  // const API = new BlockFrostAPI({
  //   projectId: 'YOUR API KEY HERE', // see: https://blockfrost.io
  // });

  // try {
  //   await API.blocksLatest();
  // } catch (err) {
  //   console.log('error', err);
  // }
  try {
    const url = 'http://httpstat.us/200?sleep=200000';

    // This:
    const body = await got(url, {
      timeout: {
        lookup: 100,
        connect: 50,
        secureConnect: 50,
        socket: 1000,
        send: 10000,
        response: 10,
      },
    });
    // @ts-ignore
    console.log('body', body);
  } catch (err) {
    console.log('statusMessage', err.message);
  }
}

run();
