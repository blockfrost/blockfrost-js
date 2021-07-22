import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsRetiring(),
    response: expect.arrayContaining([
      expect.objectContaining({
        pool_id: expect.any(String),
        epoch: expect.any(Number),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsRetired(),
    response: expect.arrayContaining([
      expect.objectContaining({
        pool_id: expect.any(String),
        epoch: expect.any(Number),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.pools(),
    response: expect.arrayContaining([expect.any(String)]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsById('pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy'),
    response: {
      active_size: expect.any(Number),
      active_stake: expect.any(String),
      blocks_minted: expect.any(Number),
      declared_pledge: '510000000000',
      fixed_cost: '340000000',
      hex: '0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735',
      live_delegators: expect.any(Number),
      live_pledge: expect.any(String),
      live_saturation: expect.any(Number),
      live_size: expect.any(Number),
      live_stake: expect.any(String),
      margin_cost: 0.049,
      owners: ['stake1u98nnlkvkk23vtvf9273uq7cph5ww6u2yq2389psuqet90sv4xv9v'],
      pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      registration: [
        'a96c79773b7506211eb56bf94886a2face17657d1009f52fb5ea05f19cc8823e',
      ],
      retirement: [],
      reward_account:
        'stake1u98nnlkvkk23vtvf9273uq7cph5ww6u2yq2389psuqet90sv4xv9v',
      vrf_key:
        'b512cc7c1a8ba689c2d8fd27adfdbac2049a3f8f95c8b85e8298f14d7d8dc4e6',
    },
  },
] as const;
