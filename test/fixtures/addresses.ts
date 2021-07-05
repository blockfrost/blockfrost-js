import { SDK } from '../utils';

export default [
  {
    command: () =>
      SDK.addresses(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    response: {
      amount: [{ unit: 'lovelace', quantity: expect.any(String) }],
      stake_address: expect.toBeTypeOrNull(String),
      type: 'shelley',
    },
  },
] as const;
