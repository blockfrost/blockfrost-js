import { SDK } from '../utils';

export default [
  {
    testName: 'fetch latest block',
    command: (): any =>
      SDK.blocks(
        '5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
      ),
    response: {
      time: 1506203091,
      height: null,
      hash: '5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
      slot: null,
      epoch: null,
      epoch_slot: null,
      slot_leader: 'Genesis slot leader',
      size: 0,
      tx_count: 14505,
      output: '31112484745000000',
      fees: '0',
      block_vrf: null,
      previous_block: null,
      next_block:
        '89d9b5a5b8ddc8d7e5a6795e9774d97faf1efea59b2caf7eaf9f8c5b32059df4',
      confirmations: expect.any(Number),
    },
  },
];
