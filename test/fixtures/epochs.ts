import { SDK } from '../utils';

export default [
  {
    command: () => SDK.epochsLatest(),
    response: {
      epoch: expect.any(Number),
      start_time: expect.any(Number),
      end_time: expect.any(Number),
      first_block_time: expect.any(Number),
      last_block_time: expect.any(Number),
      block_count: expect.any(Number),
      tx_count: expect.any(Number),
      output: expect.any(String),
      fees: expect.any(String),
      active_stake: expect.any(String),
    },
  },
  {
    command: () => SDK.epochs(0),
    response: {
      epoch: 0,
      start_time: 1506203091,
      end_time: 1506635091,
      first_block_time: 1506203091,
      last_block_time: 1506635071,
      block_count: 21587,
      tx_count: 33,
      output: '10378568796482912',
      fees: '3458053',
      active_stake: null,
    },
  },
  {
    command: () => SDK.epochs(242),
    response: {
      epoch: 242,
      start_time: 1610747091,
      end_time: 1611179091,
      first_block_time: 1610747091,
      last_block_time: 1611179076,
      block_count: 21418,
      tx_count: 74057,
      output: '63148817438049616',
      fees: '16905060417',
      active_stake: '21755094259019945',
    },
  },
] as const;
