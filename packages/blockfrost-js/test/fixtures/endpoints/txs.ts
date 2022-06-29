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
    command: (SDK: BlockFrostAPI) =>
      SDK.txsUtxos(
        '927edb96f3386ab91b5f5d85d84cb4253c65b1c2f65fa7df25f81fab1d62987a',
      ),
    response: {
      hash: '927edb96f3386ab91b5f5d85d84cb4253c65b1c2f65fa7df25f81fab1d62987a',
      inputs: [],
      outputs: [
        {
          address:
            'Ae2tdPwUPEZ9vtyppa1FdJzvqJZkEcXgdHxVYAzTWcPaoNycVq5rc36LC1S',
          amount: [{ unit: 'lovelace', quantity: '538861000000' }],
        },
      ],
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsWithdrawals(
        '9f811b021492a5544207f7b566b4e67c87f0918b9e7055ab3074d552ab18e895',
      ),
    response: [
      {
        address: 'stake1ux77thpfertrfhkq3tlmssucn30ddvvn3s9fhvkvx7dd3msgmxve0',
        amount: '7911187966',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsMirs(
        '7b57f2cf1c442c563647ab29669c88b9116c2668d31d42526ff27ed614da1252',
      ),
    response: expect.arrayContaining([
      expect.objectContaining({
        pot: expect.any(String),
        cert_index: expect.any(Number),
        address: expect.any(String),
        amount: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsDelegations(
        'c2120581050a1116ab38a5ac8a62d64df4cf12cf3370d22337201d36eb65fcc4',
      ),
    response: [
      {
        index: 1,
        cert_index: 1,
        address: 'stake1uyhk4jwrrp683w8n9hutkddr0nns4nuun04m2x3a6v0s9cck0z4k9',
        pool_id: 'pool1zgxvcqf0dvh0ze56ev2ayjvuex3zdd3hgxzdrcezkx497mv3l7s',
        active_epoch: expect.any(Number),
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsPoolUpdates(
        '28bd5e8c342ab89d6642e446cb299058ea36256af1718e4af9326898ce4192d7',
      ),
    response: [
      {
        cert_index: 0,
        pool_id: 'pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj',
        vrf_key:
          'b4506cbdf5faeeb7bc771d0c17eea2e7e94749ec5a63e78a42d9ed8aad6baae5',
        pledge: '100000000000',
        margin_cost: 0.018,
        fixed_cost: '340000000',
        reward_account:
          'stake1u97v0sjx96u5lydjfe2g5qdwkj6plm87h80q5vc0ma6wjpq22mh4c',
        owners: ['stake1ux69nctlngdhx99a6w8hrtexu89p9prqk8vmseg9qmmquyqhuns53'],
        metadata: {
          url: 'https://stakhanovite.io/cardano/stkh-1.json',
          hash: '0f519c0478527c6fd05556ecb31fafe9e5a6b9861fac96f5935381b3e328ee5d',
          ticker: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          homepage: expect.any(String),
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'cardano-relay.stakhanovite.io',
            dns_srv: null,
            port: 7001,
          },
        ],
        active_epoch: expect.any(Number),
      },
      {
        cert_index: 1,
        pool_id: 'pool1s7t7mfc89syw93h07aammaccnua66yn6d4l0mqt7zqurz2mczvq',
        vrf_key:
          'f399304ca66731d66b739e4df6a94f32ab10b34450fb21b03720d2c1d45d59d2',
        pledge: '10000000000',
        margin_cost: 0.018,
        fixed_cost: '340000000',
        reward_account:
          'stake1u97v0sjx96u5lydjfe2g5qdwkj6plm87h80q5vc0ma6wjpq22mh4c',
        owners: ['stake1uxclfpuwmmsdxjtqy7ee845246xlk6k4r5rxj6sexsh8caqf2z5dm'],
        metadata: {
          url: 'https://stakhanovite.io/cardano/stkh-2.json',
          hash: '11171d873f8f5b704552111d75b629f840b1c3399b49d9642cf12970031583b7',
          ticker: null,
          name: null,
          description: null,
          homepage: null,
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'cardano-relay.stakhanovite.io',
            dns_srv: null,
            port: 7001,
          },
        ],
        active_epoch: expect.any(Number),
      },
    ],
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
      SDK.txsPoolRetires(
        '33770d42c7bc8a9a0bc9830ffb97941574dc61dc534796dd8614b99b6aadace4',
      ),
    response: [
      {
        cert_index: 0,
        pool_id: 'pool1g36eg8e6tr6sur6y3cfpd8lglny3axh6pgka3acpnfyh22svdth',
        retiring_epoch: 236,
      },
    ],
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
] as const;
