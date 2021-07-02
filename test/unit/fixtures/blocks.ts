import { SDK } from '../utils';

export default [
  {
    testName: 'fetch latest block',
    command: (): any =>
      SDK.blocks(
        '96fceff972c2c06bd3bb5243c39215333be6d56aaf4823073dca31afe5038471',
      ),
    response: {
      time: 1563999616,
      height: null,
      hash: '96fceff972c2c06bd3bb5243c39215333be6d56aaf4823073dca31afe5038471',
      slot: null,
      epoch: null,
      epoch_slot: null,
      slot_leader: 'Genesis slot leader',
      size: 0,
      tx_count: 207,
      output: '41999999999999903',
      fees: '0',
      block_vrf: null,
      previous_block: null,
      next_block:
        '8f8602837f7c6f8b8867dd1cbc1842cf51a27eaed2c70ef48325d00f8efb320f',
      confirmations: expect.any(Number),
    },
  },
];
