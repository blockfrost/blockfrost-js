export const deriveAddressFixtures = [
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    index: 0,
    type: 0,
    response: {
      address:
        'addr1q8u5ktsj5zsmhvwv0ep9zuhfu39x3wyt9wxjnsn3cagsyy59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usrmcafl',
      path: "m/1852'/1815'/0'/0/0",
    },
  },
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    index: 1,
    type: 0,
    response: {
      address:
        'addr1qxnthyxq8x9lv95h74k5av3sy3yzljr56ttxu4lggv8qstv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us8mueja',
      path: "m/1852'/1815'/0'/0/1",
    },
  },
] as const;

export const getAccountFixtures = [
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    type: 0,
    response: '',
  },
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    type: 1,
    response: '',
  },
] as const;
