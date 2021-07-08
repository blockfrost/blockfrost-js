import { BlockFrostAPI } from '../../src';

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
] as const;
