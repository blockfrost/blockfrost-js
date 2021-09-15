import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.scripts(),
    response: expect.arrayContaining([
      expect.objectContaining({
        script_hash: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.script('4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016'),
    response: {
      script_hash: '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      type: 'plutus',
      serialised_size: 2739,
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptRedeemers(
        '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      ),
    response: [
      {
        fee: '212055687',
        purpose: 'spend',
        tx_hash:
          'a95d16e891e51f98a3b1d3fe862ed355ebc8abffb7a7269d86f775553d9e653f',
        tx_index: 0,
        unit_mem: '520448',
        unit_steps: '211535239',
      },
    ],
  },
] as const;
