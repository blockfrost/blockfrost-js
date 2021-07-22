import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksLatest(),
    response: {
      time: expect.any(Number),
      height: expect.any(Number),
      hash: expect.any(String),
      slot: expect.any(Number),
      epoch: expect.any(Number),
      epoch_slot: expect.any(Number),
      slot_leader: expect.any(String),
      size: expect.any(Number),
      tx_count: expect.any(Number),
      output: expect.toBeTypeOrNull(String),
      fees: expect.toBeTypeOrNull(String),
      block_vrf: expect.any(String),
      previous_block: expect.any(String),
      next_block: null,
      confirmations: expect.any(Number),
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.blocks(
        '5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
      ),
    response: {
      time: 1506203091,
      height: null,
      hash: '5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
      slot: null,
      epoch: null,
      epoch_slot: null,
      slot_leader: 'Genesis slot leader',
      size: 0,
      tx_count: 14505,
      output: '31112484745000000',
      fees: '0',
      block_vrf: null,
      previous_block: null,
      next_block:
        '89d9b5a5b8ddc8d7e5a6795e9774d97faf1efea59b2caf7eaf9f8c5b32059df4',
      confirmations: expect.any(Number),
    },
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksTxs('5360435'),
    response: [
      '055f9d4c86733997a9b8b12e3422feee8ef95d79ccbde20abdb6ff9222bb79c6',
      'e66077bac8d32cf16aa991d793a3e5840d3eee1ad3dfd04f1ee609d46a936dff',
      '70cf3046cd12879a9c36cafeddec17b3b22da619d7998b64c556fd9c70c62903',
      '79993d55b7e49bb588c83d9f19bf03c10fe18e6b52c5684766c436e870921e88',
      'd49776db1423a229fee5403dfc1fc0c6512a1cb0cbc01c4fcd040db82329c125',
      '0672c94a748c8ab06d99496bba73007871eb8d43766dc0c74ed326e0cc3f473c',
      'a14476ee69f5ec35331200e94da50ccad1529aa8ba22d5793f3d0f4fa31e8352',
      'b3ce7f3a4f9d680fc5de83200f436792ed0aec02e8e39bca4c255c5a50100906',
      '2cf6eb3c194d9deb93e5219d4371f2f09fa90af5393b814f939f9b8f393a6889',
      '08ae724058cd840350417153a432ff3d2fad5f8f8469f64742019b36794df519',
      '8ed65e234e2db82a6b67e1982fd6e627b44e9abdce8cfea6d1d05f8bb786d8f5',
      '783aefd86ba442d0574beb81b5d1db6b5c0dca40fa464d893aa5f849403842ba',
      '0f750962b3a039ec1ea5065c98cf083fb737decfb54ba04bdfa2b107fef65b45',
      '4f45923f709234b52b5ddb75f70b37b039519623dbb55da0916773912391fd32',
      'eb27af616f701cdf7ad81b4e9c503b2e26059859fff8b37c0f267272028c24fb',
      '86f77e854e485135878eef867cf98469dc1c5a90ceb9dda33a981ac1dc183b85',
      '8e7cd4e261631ca6b5b0ae588cf7c07617657e3ed563896e8e2c0226b7b7d152',
      '849e2475ec8f2a35bf62d3a8cc70b87326f5509987bbb7e7fc36fb8e9b5c59d5',
      '3f98fca4978cc2ac86380453538b1ab020dfa8aa34506827c7032540d9dc30b2',
      'cfe0a45709522edc07a0725cd7a99d65d5ce8f5b62365d9a3f9660bc79d25202',
      '2a6bb221aac6192e3fdb05a1c82c1c2236fc6b226363021ec8036ff6f9475ed0',
      'b29bd7a9e79345639d359f549bbf0b668d6177c90a105c66186d8b98835d187f',
      '9a5bdc512e9df8b20f486b38a190168c1b84fa250005eac35038019f1fd47039',
      '3e7721720db366599ae5ce53dc3a48b56e1ffaaa2572ae0ad66eb6c8467b8eb7',
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.blocksPrevious('5360435', { count: 1 }),
    response: [
      {
        block_vrf:
          'vrf_vk1s3hssxtpjdjc9amqn9wqn6dfyzujsv8jrk6pkl4esfpp99v48ujsflsn70',
        confirmations: expect.any(Number),
        epoch: 248,
        epoch_slot: 353699,
        fees: '172101',
        hash: 'e8b8fd03492a0d2eeb19481e3a46080af271bf7f34a9d29a1fac44ee35414d7e',
        height: 5360434,
        next_block:
          'c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b320',
        output: '7104352417',
        previous_block:
          'ca74257598fec490fac4303d0e243ee0b4e17c7a0f291597e4a35a89a7624d09',
        size: 355,
        slot: 22126499,
        slot_leader: 'pool1swe9nsv8lzugakjkfv04dn38scmq48wzynmn0lxasupuzmqcgjm',
        time: 1613692790,
        tx_count: 1,
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksNext('5360435', { count: 3 }),
    response: [
      {
        time: 1613692850,
        height: 5360436,
        hash: 'b0248da367824fa7aa9b2478891d275033d9523f7372a6baaaa0e195e630a18d',
        slot: 22126559,
        epoch: 248,
        epoch_slot: 353759,
        slot_leader: 'pool1ea568m9q882n0tx5d4vxff2dmz2n7rq5h62hx5ystq625m4tcfu',
        size: 3656,
        tx_count: 5,
        output: '4308347474705',
        fees: '1171575',
        block_vrf:
          'vrf_vk1ngghyylmk529sf6unkf3v7qq2l9flr4yqpz99gnv25spm9xwyymsslfy77',
        previous_block:
          'c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b320',
        next_block:
          '21d72214a44cda26121dd95539e174fbe8ce966a4bc2e9a0e8a46610610653ad',
        confirmations: expect.any(Number),
      },
      {
        time: 1613692865,
        height: 5360437,
        hash: '21d72214a44cda26121dd95539e174fbe8ce966a4bc2e9a0e8a46610610653ad',
        slot: 22126574,
        epoch: 248,
        epoch_slot: 353774,
        slot_leader: 'pool1spus7k8cy5qcs82xhw60dwwk2d4vrfs0m5vr2zst04gtq700gjn',
        size: 3610,
        tx_count: 9,
        output: '200849528838',
        fees: '1858161',
        block_vrf:
          'vrf_vk1v0encvmzxvrq6t7z8kcv97zfl6zs7cw9m3s668rw34vwkk9yqh4qsq0szv',
        previous_block:
          'b0248da367824fa7aa9b2478891d275033d9523f7372a6baaaa0e195e630a18d',
        next_block:
          'f54b0d636c8d7ffcbfe4e6c18831ecf626fdfc46fdb184503372ab06c44d7e44',
        confirmations: expect.any(Number),
      },
      {
        time: 1613692868,
        height: 5360438,
        hash: 'f54b0d636c8d7ffcbfe4e6c18831ecf626fdfc46fdb184503372ab06c44d7e44',
        slot: 22126577,
        epoch: 248,
        epoch_slot: 353777,
        slot_leader: 'ShelleyGenesis-69ae12f9e45c0c91',
        size: 1367,
        tx_count: 3,
        output: '35174355322',
        fees: '546874',
        block_vrf:
          'vrf_vk1ytuuajlv7wvxj57qr6j5ycx69l54ks5nzswqwyn4fhhec6dtdjgsqmzku7',
        previous_block:
          '21d72214a44cda26121dd95539e174fbe8ce966a4bc2e9a0e8a46610610653ad',
        next_block:
          '4a3fd999394a1e6eae1a3d6d439879ebb6c97dc366af73503cbc5117fd71026f',
        confirmations: expect.any(Number),
      },
    ],
  },
] as const;
