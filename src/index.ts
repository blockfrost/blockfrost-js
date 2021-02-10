import * as blocks from './blocks';

const API_URL = {
  mainnet: 'https://cardano-mainnet.blockfrost.io/',
  testnet: 'https://cardano-testnet.blockfrost.io/',
};

class BlockFrostAPI {
  options: {
    projectId: string;
  };

  constructor(options) {
    this.options = options;
  }

  blocksLatest = blocks.blocksLatest;
  blocks = blocks.blocks;
}

export { BlockFrostAPI };
