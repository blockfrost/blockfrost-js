import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.assets(),
    response: expect.arrayContaining([
      expect.objectContaining({
        asset: expect.any(String),
        quantity: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsById(
        'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795361707068697265',
      ),
    response: {
      asset:
        'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795361707068697265',
      asset_name: '42657272795361707068697265',
      fingerprint: 'asset1hwnpal5vap799t6kkjmjf6myhse4zl2vu4ahzz',
      initial_mint_tx_hash:
        '6556b532acf59835084f62d30675f3a55b78c61959bca44a86ea02c320fbf822',
      metadata: null,
      mint_or_burn_count: 1,
      onchain_metadata: {
        color: '#0F52BA',
        image: 'ipfs://ipfs/QmWxK9BvEbLGFZuQHL8zbHXSv469JrqnX3kUcZafjsoka4',
        name: 'Berry Sapphire',
      },
      policy_id: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f',
      quantity: '1',
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsHistory(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    response: [
      {
        tx_hash:
          'e252be4c7e40d35919f741c9649ff207c3e49d53bb819e5c1cb458055fd363ed',
        action: 'minted',
        amount: '1',
      },
    ],
    itemsCount: 1,
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsHistoryAll(
        'd894897411707efa755a76deb66d26dfd50593f2e70863e1661e98a07370616365636f696e73',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        tx_hash: expect.any(String),
        action: expect.any(String),
        amount: expect.any(String),
      }),
    ]),
    itemsCountMinimum: 2320,
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsTransactions(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        tx_hash: expect.any(String),
        tx_index: expect.any(Number),
        block_height: expect.any(Number),
      }),
    ]),
    itemsCountMinimum: 6,
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsAddresses(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        address: expect.any(String),
        quantity: expect.any(String),
      }),
    ]),
    itemsCountMinimum: 1,
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsPolicyById(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
      ),
    response: [
      {
        asset:
          '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
        quantity: '1',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsPolicyByIdAll(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
      ),
    response: [
      {
        asset:
          '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
        quantity: '1',
      },
    ],
  },
] as const;
