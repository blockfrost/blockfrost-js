import * as blocks from 'endpoints/blocks';
import * as accounts from 'endpoints/accounts';
import { validateOptions } from 'utils';
import { API_URLS } from 'config';
import join from 'url-join';
import { Options, HashOrNumber } from 'types';

class BlockFrostAPI {
  apiUrl: string;
  projectId: string;

  constructor(options?: Options) {
    const opts = validateOptions(options);
    const apiBase = opts.isTestnet ? API_URLS.testnet : API_URLS.mainnet;
    this.apiUrl = join(apiBase, `v${opts.version}`);
    this.projectId = opts.projectId;
  }

  accounts = (stakeAddress: string) => accounts.accounts(this.apiUrl, this.projectId, stakeAddress);

  blocks = (hashOrNumber: HashOrNumber) => blocks.blocks(this.apiUrl, this.projectId, hashOrNumber);
  blocksLatest = () => blocks.blocksLatest(this.apiUrl, this.projectId);
  blocksNext = (hashOrNumber: HashOrNumber) => blocks.blocksNext(this.apiUrl, this.projectId, hashOrNumber);
  blockPrevious = (hashOrNumber: HashOrNumber) => blocks.blocksPrevious(this.apiUrl, this.projectId, hashOrNumber);
  blocksTxs = (hashOrNumber: HashOrNumber) => blocks.blocksTxs(this.apiUrl, this.projectId, hashOrNumber);
}

async function run() {
  const API = new BlockFrostAPI({
    projectId: 'jOhDckOVcwx1UrlUCl9iAcHWem2pzZgI',
  });

  try {
    const result = await API.blocksLatest();
    console.log(result);
  } catch (err) {
    console.log('error', err);
  }
}

run();
