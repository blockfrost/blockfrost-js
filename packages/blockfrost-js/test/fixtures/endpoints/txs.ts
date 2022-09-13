import { expect } from '@jest/globals';
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
    command: (SDK: BlockFrostAPI) => {
      return new Promise(resolve => {
        SDK.txSubmit(
          '84a4008b82582092ebc1cecef689a0acc6a9b4a961340d90b157dc55b3aafe4b9d2bb9a4d35edd028258202e28b46060ec4d40c84eae389cdb9202347e3d524a20bf943079edd3b1a66cd002825820c718f0420681a1f4d5a3571cde31904e4e18387a9eeb9c3916a90449456f37e402825820b4c666e611e446712f7dd68450510f95ced76d343e3dc331f2f6def0340ba3ff028258205f8e735ea516c0a217736ea204602d8ff01e21e5d137b464025616fc0fcddeaa02825820b4a4c1bde03845ede909aa1e22f375349f6e812cbf9f8bf1e86e2f35864cba7f02825820c22cdbd695ca30e3842c23368d6e32768f53cbe1fc8642348d2eb2ec6448a09e0282582004bbfaf0036f4e14c7b6cc78bf4e26980b9e058ef37160479f9ee4ed2d4c22b6028258204f06620e516aba68fa9ea1f6f1b6b87cd7d5a83c4d3055eb5e96519b137e37a20282582010fecd3c8f6297ee20ef55fc46a1c76001e370c1b66210efaaa5c2d3f17e0cd902825820a8df2ed8de772fdb7ec77f00bc73e1e2fdf913b64202ee4e950c6757d404347f01018282584c82d818584283581c15cf80b94b8f984636a23214bcdc589697561bd040ad592f9db9b53ea101581e581c2b0b011ba3683d6742f2fa2a7725ac578b5f593b7d287c47526bf9f1001a8c1cf2611a39c1718582583901abcfe464de63170a4bb97acde2f29964f1de91d90cdd0bbdc80b61ff138b7cdb01acc61a6cbdbd1f7fcac84980ec1f3e8d709fa8d09f462f821a00161934a1581cf0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9aa24779616d666f726501497a617274736e61726601021a0002ed19031a04394beda100828258201fc31428a0c21d4f0428c289382703de0f0bec374a70b7566154e01379def152584095f950f5b551e96b68695f4791f4f831a986ea30fc7eb2cc644077e6c965c9ebcc75c9e5fd8ee9a8e0c2cf077e6622ea2921e56f68b49640535849f03cf7e507825820c063ca2d228605a9c45a94ed876c9f638a9e362974a2edeaf882feb657e7a4835840b2292ae3c52bd659e393b8128a553b77fc26c1ff1ef6fe41c3b936b2696a4ec6c589e577ed337b489a25cbcfaea4489e07c91c3b650fa39dda9458390d736802f5f6',
        )
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            resolve({
              error: err.error,
              status_code: err.status_code,
              message: err.message,
            });
          });
      });
    },
    response: {
      error: 'Bad Request',
      message: expect.stringMatching(
        new RegExp(/.*transaction submit error.*/),
      ),
      status_code: 400,
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
