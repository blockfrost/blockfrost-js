import { BlockFrostAPI } from '../src/index';

async function run() {
  const API = new BlockFrostAPI({
    customBackend: 'jOhDckOVcwx1UrlUCl9iAcHWem2pzZgI',
  });

  try {
    const response = await API.accounts(
      'stake1u8j7wk5c4tqk00yuz7rrh2jan4jshmwl2eqx8pzklmjqprsuqc7ls',
    );
    console.log(response);
  } catch (err) {
    console.log('error', err);
  }
}

run();
