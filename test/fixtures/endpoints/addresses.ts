import { BlockFrostAPI } from '../../../src';

const amountArray = expect.arrayContaining([
  expect.objectContaining({
    quantity: expect.any(String),
    unit: expect.any(String),
  }),
]);

export default [
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addresses(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    response: {
      amount: [{ unit: 'lovelace', quantity: expect.any(String) }],
      stake_address: expect.toBeTypeOrNull(String),
      type: 'shelley',
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addressesTotal(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    response: {
      address:
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      received_sum: amountArray,
      sent_sum: amountArray,
      tx_count: expect.any(Number),
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addressesUtxos(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    response: [],
    // TODO
    // response: expect.arrayContaining([
    //   expect.objectContaining({
    //     tx_hash: expect.any(String),
    //     output_index: expect.any(Number),
    //     amount: amountArray,
    //   }),
    // ]),
  },
] as const;
