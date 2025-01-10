import { SignatureVerificationError } from '../../../src/utils/errors';

export const verifyWebhookSignatureFixtures = [
  {
    description: 'invalid signatureHeader, missing "t" key',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      'v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: SignatureVerificationError,
  },
  {
    description: 'invalid signatureHeader, missing version key',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader: 't=1650013856',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: SignatureVerificationError,
  },
  {
    description: 'invalid signatureHeader, passed array as signatureHeader',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader: [
      'aaa',
      'v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    ],
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: SignatureVerificationError,
  },
  {
    description: 'invalid timestamp',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: undefined,
    result: SignatureVerificationError,
  },
  {
    description: 'valid timestamp (+1s)',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: {
      id: '47668401-c3a4-42d4-bac1-ad46515924a3',
      webhook_id: 'cf68eb9c-635f-415e-a5a8-6233638f28d7',
      created: 1650013856,
      type: 'block',
      payload: {
        time: 1650013853,
        height: 7126256,
        hash: 'f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4',
        slot: 58447562,
        epoch: 332,
        epoch_slot: 386762,
        slot_leader: 'pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25',
        size: 34617,
        tx_count: 13,
        output: '13403118309871',
        fees: '4986390',
        block_vrf:
          'vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d',
        previous_block:
          '9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915',
        next_block: null,
        confirmations: 0,
      },
    },
  },
  {
    description: 'only unsupported sig version',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v42=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: SignatureVerificationError,
  },
  {
    description: 'valid timestamp (+580s)',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 580,
    result: {
      id: '47668401-c3a4-42d4-bac1-ad46515924a3',
      webhook_id: 'cf68eb9c-635f-415e-a5a8-6233638f28d7',
      created: 1650013856,
      type: 'block',
      payload: {
        time: 1650013853,
        height: 7126256,
        hash: 'f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4',
        slot: 58447562,
        epoch: 332,
        epoch_slot: 386762,
        slot_leader: 'pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25',
        size: 34617,
        tx_count: 13,
        output: '13403118309871',
        fees: '4986390',
        block_vrf:
          'vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d',
        previous_block:
          '9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915',
        next_block: null,
        confirmations: 0,
      },
    },
  },
  {
    description: 'invalid timestamp (+610s)',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 610,
    result: SignatureVerificationError,
  },
  {
    description: 'valid timestamp (+610s), custom tolerance',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: 650,
    mockCurrentTimestamp: 1650013856 + 610,
    result: {
      id: '47668401-c3a4-42d4-bac1-ad46515924a3',
      webhook_id: 'cf68eb9c-635f-415e-a5a8-6233638f28d7',
      created: 1650013856,
      type: 'block',
      payload: {
        time: 1650013853,
        height: 7126256,
        hash: 'f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4',
        slot: 58447562,
        epoch: 332,
        epoch_slot: 386762,
        slot_leader: 'pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25',
        size: 34617,
        tx_count: 13,
        output: '13403118309871',
        fees: '4986390',
        block_vrf:
          'vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d',
        previous_block:
          '9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915',
        next_block: null,
        confirmations: 0,
      },
    },
  },
  {
    description: 'invalid signature',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"df68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: SignatureVerificationError,
  },
  {
    description: '2 signatures: one valid, one invalid',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c32,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: {
      id: '47668401-c3a4-42d4-bac1-ad46515924a3',
      webhook_id: 'cf68eb9c-635f-415e-a5a8-6233638f28d7',
      created: 1650013856,
      type: 'block',
      payload: {
        time: 1650013853,
        height: 7126256,
        hash: 'f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4',
        slot: 58447562,
        epoch: 332,
        epoch_slot: 386762,
        slot_leader: 'pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25',
        size: 34617,
        tx_count: 13,
        output: '13403118309871',
        fees: '4986390',
        block_vrf:
          'vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d',
        previous_block:
          '9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915',
        next_block: null,
        confirmations: 0,
      },
    },
  },
  {
    description: '2 invalid signatures',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c32,v1=d4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: '59a1eb46-96f4-4f0b-8a03-b4d26e70593a',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: SignatureVerificationError,
  },
  {
    description: 'invalid secret',
    webhookPayload:
      '{"id":"47668401-c3a4-42d4-bac1-ad46515924a3","webhook_id":"cf68eb9c-635f-415e-a5a8-6233638f28d7","created":1650013856,"type":"block","payload":{"time":1650013853,"height":7126256,"hash":"f49521b67b440e5030adf124aee8f88881b7682ba07acf06c2781405b0f806a4","slot":58447562,"epoch":332,"epoch_slot":386762,"slot_leader":"pool1njjr0zn7uvydjy8067nprgwlyxqnznp9wgllfnag24nycgkda25","size":34617,"tx_count":13,"output":"13403118309871","fees":"4986390","block_vrf":"vrf_vk197w95j9alkwt8l4g7xkccknhn4pqwx65c5saxnn5ej3cpmps72msgpw69d","previous_block":"9e3f5bfc9f0be44cf6e14db9ed5f1efb6b637baff0ea1740bb6711786c724915","next_block":null,"confirmations":0}}',
    signatureHeader:
      't=1650013856,v1=f4c3bb2a8b0c8e21fa7d5fdada2ee87c9c6f6b0b159cc22e483146917e195c3e',
    secret: 'abc',
    timestampToleranceSeconds: undefined,
    mockCurrentTimestamp: 1650013856 + 1,
    result: SignatureVerificationError,
  },
];

export const deriveAddressFixtures = [
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 0,
    index: 1,
    network: 'mainnet',
    response: {
      address:
        'addr1qy535472n2ctu3x55v03zmm9jnz54grqu3sueap9pnk4xys49ucjdfty5p5qlw5qe28v9k988stffc2g0hx2xx86a2dq5u58qk',
      path: [0, 1],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 2,
    index: 0,
    network: 'mainnet',
    response: {
      address: 'stake1uy2j7vfx54j2q6q0h2qv4rkzmznnc955u9y8mn9rrraw4xspqg6tp',
      path: [2, 0],
    },
  },
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    role: 0,
    index: 0,
    network: 'mainnet',
    response: {
      address:
        'addr1q8u5ktsj5zsmhvwv0ep9zuhfu39x3wyt9wxjnsn3cagsyy59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usrmcafl',
      path: [0, 0],
    },
  },
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    role: 0,
    index: 1,
    network: 'mainnet',
    response: {
      address:
        'addr1qxnthyxq8x9lv95h74k5av3sy3yzljr56ttxu4lggv8qstv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us8mueja',
      path: [0, 1],
    },
  },
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    role: 2,
    index: 0,
    network: 'mainnet',
    response: {
      address: 'stake1uxzutrtmxwv2rf2j3hdpps66ch0jydmkr58vwgnetddcdwg32u4rc',
      path: [2, 0],
    },
  },
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    role: 2,
    index: 1,
    network: 'mainnet',
    response: {
      address: 'stake1uyq2806du47kxcvr2504vuvmngauy5mhv3d45d2mukek3ugj46jvz',
      path: [2, 1],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 1,
    index: 3,
    network: 'preview',
    response: {
      address:
        'addr_test1qqtpyxyh5j023fq88xhj862guwrymhwjadt5czqvumpv02s49ucjdfty5p5qlw5qe28v9k988stffc2g0hx2xx86a2dqhvnrk6',
      path: [1, 3],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 2,
    index: 0,
    network: 'preview',
    response: {
      address:
        'stake_test1uq2j7vfx54j2q6q0h2qv4rkzmznnc955u9y8mn9rrraw4xsx2zc0u',
      path: [2, 0],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 2,
    index: 1,
    network: 'preview',
    response: {
      address:
        'stake_test1uq8peju6cs3k03s8qgmuxvs7za456jnpflk08epc4x5m3ug4ydclp',
      path: [2, 1],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 1,
    index: 3,
    network: 'preprod',
    response: {
      address:
        'addr_test1qqtpyxyh5j023fq88xhj862guwrymhwjadt5czqvumpv02s49ucjdfty5p5qlw5qe28v9k988stffc2g0hx2xx86a2dqhvnrk6',
      path: [1, 3],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 2,
    index: 0,
    network: 'preprod',
    response: {
      address:
        'stake_test1uq2j7vfx54j2q6q0h2qv4rkzmznnc955u9y8mn9rrraw4xsx2zc0u',
      path: [2, 0],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 2,
    index: 1,
    network: 'preprod',
    response: {
      address:
        'stake_test1uq8peju6cs3k03s8qgmuxvs7za456jnpflk08epc4x5m3ug4ydclp',
      path: [2, 1],
    },
  },
] as const;
