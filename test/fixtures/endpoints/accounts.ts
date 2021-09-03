import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accounts(
        'stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w',
      ),
    response: {
      stake_address:
        'stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w',
      active: expect.any(Boolean),
      active_epoch: expect.toBeTypeOrNull(Number),
      controlled_amount: expect.any(String),
      rewards_sum: expect.any(String),
      withdrawals_sum: expect.any(String),
      reserves_sum: expect.any(String),
      treasury_sum: expect.any(String),
      withdrawable_amount: expect.any(String),
      pool_id: expect.toBeTypeOrNull(String),
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsRewards(
        'stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk',
        { count: 3, page: 2 },
      ),
    response: [
      {
        epoch: 229,
        amount: '171419599',
        pool_id: 'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
      },
      {
        epoch: 230,
        amount: '160736772',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      },
      {
        epoch: 231,
        amount: '210662173',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsHistory(
        'stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk',
        { count: 3, page: 2 },
      ),
    response: [
      {
        active_epoch: 229,
        amount: '220098162468',
        pool_id: 'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
      },
      {
        active_epoch: 230,
        amount: '220268640006',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      },
      {
        active_epoch: 231,
        amount: '220428767042',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsDelegations(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        amount: expect.any(String),
        tx_hash: expect.any(String),
        active_epoch: expect.any(Number),
        pool_id: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsRegistrations(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        action: expect.any(String),
        tx_hash: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsWithdrawals(
        'stake1u88xakeptjw9jwsytkjal76d07an4thvvrfx3w2kt77pw4sc5rr8k',
        { count: 4, page: 2 },
      ),
    response: [
      {
        tx_hash:
          '4c8f16ba4730fe0e84d1d79b38a6198b0283b0b87e36388cb3e6c5f07f99bfb0',
        amount: '1862857028',
      },
      {
        tx_hash:
          '6072dc5a1688418f0da70427b32c49fb6c494170c7988a105ccc33a95a1b0370',
        amount: '1779916664',
      },
      {
        tx_hash:
          '3926bcc6b726394dee99c681d0768849214ca0b02f728690fcafba6c22c3e19c',
        amount: '821097437',
      },
      {
        tx_hash:
          '3a277898a5789c433f556672903b3bf260d074efadaf1f0128c4de663a501192',
        amount: '3602325039',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsMirs(
        'stake1uyq7039vutuw8v7femqtktdu9zlhnqh3mkvvhdazft9ga2q8zdfkp',
        { count: 1, page: 1 },
      ),
    response: [
      {
        tx_hash:
          '7b57f2cf1c442c563647ab29669c88b9116c2668d31d42526ff27ed614da1252',
        amount: '19296735',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsAddresses(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        address: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsAddressesAssets(
        'stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        unit: expect.any(String),
        quantity: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsAddressesAssetsAll(
        'stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        unit: expect.any(String),
        quantity: expect.any(String),
      }),
    ]),
  },
] as const;
