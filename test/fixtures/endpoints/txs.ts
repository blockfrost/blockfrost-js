import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txs(
        '28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026',
      ),
    response: {
      block: 'e6369fee087d31192016b1659f1c381e9fc4925339278a4eef6f340c96c1947f',
      block_height: 5040611,
      index: 0,
      output_amount: [{ unit: 'lovelace', quantity: '701374004958' }],
      fees: '874781',
      deposit: '0',
      size: 16346,
      invalid_before: null,
      invalid_hereafter: '15657684',
      utxo_count: 80,
      withdrawal_count: 0,
      delegation_count: 0,
      stake_cert_count: 0,
      pool_update_count: 0,
      pool_retire_count: 0,
    },
  },
  {
    // TODO: find tx with metadata
    command: (SDK: BlockFrostAPI) =>
      SDK.txsMetadata(
        '28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026',
      ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsPoolRetires(
        '8c8376b28e8d729115ea6e88540747160fab22d754ad6a11c55ab159024d8005',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        pool_id: expect.any(String),
        cert_index: expect.any(Number),
        retiring_epoch: expect.any(Number),
      }),
    ]),
  },
] as const;
