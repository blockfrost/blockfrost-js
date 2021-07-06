import { BlockFrostAPI } from '../../src';

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
    command: (SDK: BlockFrostAPI) =>
      SDK.txsMetadata(
        'e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d',
      ),
    response: [
      {
        label: '1968',
        json_metadata: {
          TSLA: [{ value: '865.85', source: 'investorsExchange' }],
          DRAND: {
            round: 492700,
            randomness:
              '22966996b523a4726c3df9d7b8bae50230ef08a7452c53d64eacc2dad632afc5',
          },
          ADABTC: [{ value: '7.96e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.260806', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.318835', source: 'coinGecko' },
            { value: '0.32190816861292343', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.077643', source: 'coinGecko' }],
          BTCUSD: [{ value: '40088', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.573205', source: 'coinGecko' },
            { value: '0.5728722202262749', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '20607418304385.63', source: 'blockBook' }],
        },
      },
    ],
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
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsStakes(
        'c2120581050a1116ab38a5ac8a62d64df4cf12cf3370d22337201d36eb65fcc4',
      ),
    response: [
      {
        cert_index: 0,
        address: 'stake1uyhk4jwrrp683w8n9hutkddr0nns4nuun04m2x3a6v0s9cck0z4k9',
        registration: true,
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsUtxos(
        '28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026',
      ),
    response: {
      inputs: expect.arrayContaining([
        expect.objectContaining({
          address: expect.any(String),
          amount: expect.arrayContaining([
            expect.objectContaining({
              unit: expect.any(String),
              quantity: expect.any(String),
            }),
          ]),
        }),
      ]),
    },
  },
] as const;
