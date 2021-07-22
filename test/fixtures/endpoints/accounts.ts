import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accounts(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: {
      active: true,
      active_epoch: 218,
      controlled_amount: '2766137',
      pool_id: 'pool16kus5xvdysgmtjp0hhlwt72tsm0yn2zcn0a8wg9emc6c75lxvmc',
      reserves_sum: '0',
      rewards_sum: '112363',
      stake_address:
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      treasury_sum: '0',
      withdrawable_amount: '112363',
      withdrawals_sum: '0',
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsRewards(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        amount: expect.any(String),
        epoch: expect.any(Number),
        pool_id: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsHistory(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        amount: expect.any(String),
        active_epoch: expect.any(Number),
        pool_id: expect.any(String),
      }),
    ]),
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
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: [],
    // TODO
    // response: expect.arrayContaining([
    //   expect.objectContaining({
    //     action: expect.any(String),
    //     amount: expect.any(String),
    //   }),
    // ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsMirs(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    response: [],
    // TODO
    // response: expect.arrayContaining([
    //   expect.objectContaining({
    //     tx_hash: expect.any(String),
    //     amount: expect.any(String),
    //   }),
    // ]),
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
] as const;
