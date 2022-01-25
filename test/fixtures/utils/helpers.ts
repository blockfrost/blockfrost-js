export const deriveAddressFixtures = [
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 0,
    index: 1,
    isTestnet: false,
    isByron: false,
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
    isTestnet: false,
    isByron: false,
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
    isTestnet: false,
    isByron: false,
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
    isByron: false,
    isTestnet: false,
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
    isByron: false,
    isTestnet: false,
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
    isTestnet: false,
    isByron: false,
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
    isByron: false,
    isTestnet: true,
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
    isByron: false,
    isTestnet: true,
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
    isByron: false,
    isTestnet: true,
    response: {
      address:
        'stake_test1uq8peju6cs3k03s8qgmuxvs7za456jnpflk08epc4x5m3ug4ydclp',
      path: [2, 1],
    },
  },
  {
    publicKey:
      '7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152',
    role: 0,
    index: 1,
    isByron: true,
    isTestnet: false,
    response: {
      address:
        'addr1stvpskppsdvpe6fty4p6mmudwux2ex3qrgekphw5nrwrghm4dy9zn87z3xsqqxka4gesjmytxj7',
      path: [0, 1],
    },
  },
] as const;
