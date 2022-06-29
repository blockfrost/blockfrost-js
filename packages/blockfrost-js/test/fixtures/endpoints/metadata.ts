import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabels(),
    response: expect.arrayContaining([
      expect.objectContaining({
        label: expect.any(String),
        count: expect.any(String),
        cip10: expect.toBeTypeOrNull(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabelCbor('1968'),
    response: expect.arrayContaining([
      expect.objectContaining({
        tx_hash: expect.any(String),
        cbor_metadata: expect.any(String),
      }),
    ]),
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabel('1968'),
    response: [
      {
        tx_hash:
          '473a6f5ef23c8f9ea10e6d17372ee90031f44273fb2be6700673269bdd04eb19',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.090115', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.107006', source: 'coinGecko' },
            { value: '0.10698550057606343', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.400468', source: 'coinGecko' },
            { value: '0.4137090000035637', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '4117841140cb0c7ca5c2bd820a3e448806ec3588e99043230fac52a40509bccb',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.089784', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10671', source: 'coinGecko' },
            { value: '0.10618100888947407', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.400724', source: 'coinGecko' },
            { value: '0.38715088564839856', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '1abe80dc1f101ff3b76659d32b532d53b21d76c98cfce0c0c3c45957680c54ff',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.088724', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10547', source: 'coinGecko' },
            { value: '0.10663800237162917', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.368797', source: 'coinGecko' },
            { value: '0.40239545062101423', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'b8cc8d75ca200555ca4efdf79599a06300c2a28ffbaa82fd23f22c8f95967bf9',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.089471', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106359', source: 'coinGecko' },
            { value: '0.10575249137006794', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.37306', source: 'coinGecko' },
            { value: '0.3997910001394423', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '7e02484c70d5ed35cdf7ce2ae377cd07cacf9649815105241a4f0acaed57edc4',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.08967', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106624', source: 'coinGecko' },
            { value: '0.10576800528416953', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.379095', source: 'coinGecko' },
            { value: '0.37546400010091274', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '0b18452398002388385061b6cd620785efd9820ba6c2e0e153ed5cd61aca8305',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.08897', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105781', source: 'coinGecko' },
            { value: '0.1065469476750071', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.368764', source: 'coinGecko' },
            { value: '0.3867950000285223', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'f71c0802495dc96195e32d263d412e0482fed2e75ec9e392bd6e585015208f9c',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.090078', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.107101', source: 'coinGecko' },
            { value: '0.10605778749455659', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.400892', source: 'coinGecko' },
            { value: '0.38864900008692294', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '4095113cab9a5d9d056045964fc11b3d9a36d9d425a9a1ed53df81a53597b89a',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.089577', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106513', source: 'coinGecko' },
            { value: '0.10708101021081681', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.383262', source: 'coinGecko' },
            { value: '0.3784820001009979', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '16a60ec7128a3d1d3c088571408b0a697eda17ec3047212abb1aaa0aa078d062',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.088444', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105147', source: 'coinGecko' },
            { value: '0.10628700382038006', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.381558', source: 'coinGecko' },
            { value: '0.3955347330883524', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '2bf55f0c5a2dbdfe14836f035ea2b06a6eeda4c1d0f1d213ad269bb5754f7c90',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.087461', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104018', source: 'coinGecko' },
            { value: '0.10510150072330852', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.377974', source: 'coinGecko' },
            { value: '0.38233423358491153', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'ca1f76835d701f980d6bc1a4579767ec6fb551751064d07228c4f6c52acb24c9',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.087615', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104218', source: 'coinGecko' },
            { value: '0.10378394175977297', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.383454', source: 'coinGecko' },
            { value: '0.3779740001157349', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '45ead547d5df8d716ce2c279596e1f3d6bbef144c5ec77321fa9aa5490333cfc',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.087407', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.103911', source: 'coinGecko' },
            { value: '0.10437500352265637', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.391897', source: 'coinGecko' },
            { value: '0.39055700005969507', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'd4f3d3bfdd8e53e71fab36542e3ec32d8242ab0319447f0c799c8f6903946589',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.088044', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10466', source: 'coinGecko' },
            { value: '0.10409800535729975', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.385308', source: 'coinGecko' },
            { value: '0.38474700005299967', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '130017549d679f3a8ef86f3a18d3e4c7a6141bd4f4e185bdc9270a4ee9d71aa1',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.086554', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.102854', source: 'coinGecko' },
            { value: '0.10326401013804745', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.376421', source: 'coinGecko' },
            { value: '0.3844306225267444', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'd4275bade850288c52c4ce3c86685f0b5c7d72164e80d7672f7cd7891d745afd',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.088198', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104802', source: 'coinGecko' },
            { value: '0.10349700867770668', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.3783', source: 'coinGecko' },
            { value: '0.38150700013288613', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'b3d90fb20fc79b951fe744a93bbdd9d45ea44b2c6ebe70a7a680e6e39c87a51b',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.088805', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105448', source: 'coinGecko' },
            { value: '0.10482700033240643', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.372311', source: 'coinGecko' },
            { value: '0.38254000006366995', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '877bc3a7abc83036b00dae9617b8f2b0d3631bc2b93282aca8192f51fe863de6',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.088931', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105497', source: 'coinGecko' },
            { value: '0.10554944131097473', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.368832', source: 'coinGecko' },
            { value: '0.3780310000117855', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '23c098e977c76dede30f0208979e0bf05909c6b0b0fa39680ced9ed74d70223c',
        json_metadata: {
          TSLA: [{ value: '428.82', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.088653', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105399', source: 'coinGecko' },
            { value: '0.10608350723956288', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.400978', source: 'coinGecko' },
            { value: '0.37891900011962204', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '6274bb0653a12a5c10346a85148306d504bf9f8d432dc4a5d948ce51edb71ae6',
        json_metadata: {
          TSLA: [{ value: '429.95', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.0874', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.103927', source: 'coinGecko' },
            { value: '0.10467600264955898', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.362684', source: 'coinGecko' },
            { value: '0.40493600009194963', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'ca13713dc3c2b4600838a19706ec49a0a96826b2aa7ffaff040acabe69687744',
        json_metadata: {
          ADAEUR: [{ value: '0.087381', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.103921', source: 'coinGecko' },
            { value: '0.10392150933106037', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.362983', source: 'coinGecko' },
            { value: '0.3640682339523806', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '22e114974269186549c31f48e91de0ce8ed425130ffe4c8b51c521e8d47d9b3a',
        json_metadata: {
          TSLA: [{ value: '429.95', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.08742', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104037', source: 'coinGecko' },
            { value: '0.10392150933106037', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.36796', source: 'coinGecko' },
            { value: '0.3640682339523806', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '6646881c8c8ef5561cbe323098b21160581d2d62f84c3ad5ffa877e9f131d2ab',
        json_metadata: {
          TSLA: [{ value: '449.26', source: 'investorsExchange' }],
          ADAEUR: [{ value: '0.086867', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.103003', source: 'coinGecko' },
            { value: '0.10408945614404148', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.360662', source: 'coinGecko' },
            { value: '0.358543000083154', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'bfc4081531fcbd8d1cfcced25470a0522678ca29adf45227253f7c9d24d362ca',
        json_metadata: {
          ADAEUR: [{ value: '0.086672', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10246', source: 'coinGecko' },
            { value: '0.10408945614404148', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.363429', source: 'coinGecko' },
            { value: '0.3650430000229871', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'a45b8e828e7fdaf39d954b8be218e7381f9eac9fd13b4bfc1b5af9ec25f93f7d',
        json_metadata: {
          TSLA: [{ value: '440.165', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.85e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.086401', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.102084', source: 'coinGecko' },
            { value: '0.10282000309693849', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.364057', source: 'coinGecko' },
            { value: '0.3635752305105955', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '82ee293ddfb3d8bf7edb93b7a1e8e5a81cc823e3b40f7db050ea584749c19f2b',
        json_metadata: {
          TSLA: [{ value: '440.165', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.086987', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.102777', source: 'coinGecko' },
            { value: '0.10282000309693849', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.372235', source: 'coinGecko' },
            { value: '0.3635752305105955', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'db8d4ee5ff437a88a7b46cd9de5d0b5d8884d779b59d4f5da838ab7d21c1e815',
        json_metadata: {
          ADAEUR: [{ value: '0.087178', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.102941', source: 'coinGecko' },
            { value: '0.10202587682313866', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.375106', source: 'coinGecko' },
            { value: '0.3635752305105955', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '5845678a52c04e2e95cad155705ea93e0a99e9e84aaeeaefba40f130f31d27d0',
        json_metadata: {
          TSLA: [{ value: '437.565', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.84e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.08761', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.103545', source: 'coinGecko' },
            { value: '0.1030560020743112', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.374647', source: 'coinGecko' },
            { value: '0.36825100007608835', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'ffaa6a9fcce76d3eb92202a9fb2db12ff2f03c499aad5a0daab2b8d89ff1bc21',
        json_metadata: {
          ADAEUR: [{ value: '0.087894', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.103894', source: 'coinGecko' },
            { value: '0.1030560020743112', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.378008', source: 'coinGecko' },
            { value: '0.37377400002153316', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'c08589057ed1afa760bd52cfce5dd5d74f07980df2e6f8dbfe3739aced299938',
        json_metadata: {
          TSLA: [{ value: '435.8', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.088604', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104667', source: 'coinGecko' },
            { value: '0.1040209398312718', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.406577', source: 'coinGecko' },
            { value: '0.3982452498684524', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '34eb9b1d9a0692db611f2712c34c111646083966bd52cb791d1974bf6f587b90',
        json_metadata: {
          ADAEUR: [{ value: '0.089083', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105222', source: 'coinGecko' },
            { value: '0.1040209398312718', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.406335', source: 'coinGecko' },
            { value: '0.3982452498684524', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '841d369b629b5ca79ac2a4304e38c99a62d7613ce8cc850f1159ac20bd1440b0',
        json_metadata: {
          TSLA: [{ value: '434.71', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.83e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089068', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105329', source: 'coinGecko' },
            { value: '0.10445098005832333', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.415507', source: 'coinGecko' },
            { value: '0.3982452498684524', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'c13c53a8af252537f4095963f19146112e885dcdae35d8136792d168e7d4cc19',
        json_metadata: {
          ADAEUR: [{ value: '0.08919', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105488', source: 'coinGecko' },
            { value: '0.10445098005832333', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.411646', source: 'coinGecko' },
            { value: '0.40863100002684055', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '481187f89359ae9b64c57dc3f3412c9dc1ef3e09f9aa3340180fb531d3f5751e',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.9e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090105', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106592', source: 'coinGecko' },
            { value: '0.10512600718599334', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.399914', source: 'coinGecko' },
            { value: '0.40863100002684055', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '9f8f06e1ebc7de178921e9b05e7b28d2a719d7cc0c90df1847c3ef3ef9bf4180',
        json_metadata: {
          ADAEUR: [{ value: '0.089469', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105791', source: 'coinGecko' },
            { value: '0.10512600718599334', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.412695', source: 'coinGecko' },
            { value: '0.40863100002684055', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '0c52789b388b17773ce4ca8b620bac52219f8be5fdc6b83f67351003aa1b837d',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.94e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090512', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106946', source: 'coinGecko' },
            { value: '0.10609813908107978', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.41763', source: 'coinGecko' },
            { value: '0.3948790000000806', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '43d3faa2f101e0fd24dc2a9be3de1b06b63afa7a535820ea636f158464fd5c10',
        json_metadata: {
          ADAEUR: [{ value: '0.090097', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106424', source: 'coinGecko' },
            { value: '0.10609813908107978', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.416174', source: 'coinGecko' },
            { value: '0.39999236286581735', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '319c85ae59c33551ca1b36b2009a19fd4145704e60601ec44ac75313da04421d',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089283', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105492', source: 'coinGecko' },
            { value: '0.10646800588512549', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.40143', source: 'coinGecko' },
            { value: '0.39999236286581735', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'cc5a585f91a466ba8795bccc8063132e00aa2ae031d2767534e0f060c178721d',
        json_metadata: {
          ADAEUR: [{ value: '0.089145', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105405', source: 'coinGecko' },
            { value: '0.10646800588512549', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.414339', source: 'coinGecko' },
            { value: '0.3995790000492529', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '9cf745ac1251d9610d12ea7077495ab06c403a6ac0f8acee6377a29ac19784e3',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.9e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089152', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105381', source: 'coinGecko' },
            { value: '0.10540501084881074', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.400364', source: 'coinGecko' },
            { value: '0.41028727513714053', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'c1c7b0da105a4dc93582f1ca15fa7e6fcc702772b3cc5f99973afb09f08c99bc',
        json_metadata: {
          ADAEUR: [{ value: '0.089182', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105439', source: 'coinGecko' },
            { value: '0.10540501084881074', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.412283', source: 'coinGecko' },
            { value: '0.41028727513714053', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'cda32012cb148a30498acffc62be9b88031017df785ed379db270accd682e70e',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.088676', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10471', source: 'coinGecko' },
            { value: '0.10549039531048776', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.406943', source: 'coinGecko' },
            { value: '0.4122830001561649', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '650bce99ba21ee9a883bd7bc51e8c069b7eaa313a571c4fb708e9599fdce8903',
        json_metadata: {
          ADAEUR: [{ value: '0.089364', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10556', source: 'coinGecko' },
            { value: '0.10459399852187762', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.421462', source: 'coinGecko' },
            { value: '0.4122830001561649', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '36d75626a3492b6afd576fdc26233c2789b40c44325aab63f419cb7b105e6275',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.89e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089471', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105787', source: 'coinGecko' },
            { value: '0.10459399852187762', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.425304', source: 'coinGecko' },
            { value: '0.42118000013510615', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'b257f53e04d4ca45f272b219ce24c203013aa3cfc4eeda7c15553b5cc617fe95',
        json_metadata: {
          ADAEUR: [{ value: '0.089872', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106237', source: 'coinGecko' },
            { value: '0.10573243181632669', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.423838', source: 'coinGecko' },
            { value: '0.42118000013510615', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '12932ba6ddb0fdcdfed77c5b13a0066c574ef0e463745fc4e121b92669edb701',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.95e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.09021', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106769', source: 'coinGecko' },
            { value: '0.10573243181632669', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.408473', source: 'coinGecko' },
            { value: '0.42313300016108885', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '222d8ea52ff919f02b4fbee39a7018f98a3b037fb37a480ae084177af0b7b5cc',
        json_metadata: {
          ADAEUR: [{ value: '0.089906', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106237', source: 'coinGecko' },
            { value: '0.10702750060925405', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.404276', source: 'coinGecko' },
            { value: '0.42313300016108885', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '68db61887fa7d8abed1f439e8f747d541d9129333eef76bdce9b9c85ca83c0c4',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.89e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.088965', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105237', source: 'coinGecko' },
            { value: '0.10568031704095113', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.402232', source: 'coinGecko' },
            { value: '0.40416260778958146', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '7a3adf7d9936ff8cc17a5885007e6c9ef02afed90f735d2d07c40c2c722136ed',
        json_metadata: {
          ADAEUR: [{ value: '0.089216', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105539', source: 'coinGecko' },
            { value: '0.10568031704095113', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.403194', source: 'coinGecko' },
            { value: '0.40416260778958146', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'e2ac51524c65e1c3e47cdcfcdd23bfac3fe47f0a0aace59411d87e975c583c1b',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.9e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089637', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106103', source: 'coinGecko' },
            { value: '0.1059100004352901', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.406396', source: 'coinGecko' },
            { value: '0.40722000001250164', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '32bf4a65a25b5aa2c8a0742fac942eec239592abdcadd0ee643b3ceedeb637fd',
        json_metadata: {
          ADAEUR: [{ value: '0.090084', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106594', source: 'coinGecko' },
            { value: '0.1059100004352901', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.404712', source: 'coinGecko' },
            { value: '0.40722000001250164', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'cca049646b7cf89c5469627b8462486b8f3296dee09d47d7f2418d21eaa74af3',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.9e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.08983', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106328', source: 'coinGecko' },
            { value: '0.10656200288825653', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.410688', source: 'coinGecko' },
            { value: '0.40368000000432747', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '7bf18f4be343b43668e4f6fea20c5ca0362b95a5433c59833c761ca2bca206fa',
        json_metadata: {
          ADAEUR: [{ value: '0.089664', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106057', source: 'coinGecko' },
            { value: '0.10656200288825653', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.403694', source: 'coinGecko' },
            { value: '0.4063960000489951', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '9113c84ff1cded1f269ef3fe2a5ababfa795ae60b4e635f34ceaafedb50e8b4f',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.088984', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105222', source: 'coinGecko' },
            { value: '0.10596650780167817', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.392038', source: 'coinGecko' },
            { value: '0.4040330000336499', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '2bd98d968dfc696f844fc1b0ac9eec6b93752ed1a0201ea8a4481938443c8115',
        json_metadata: {
          ADAEUR: [{ value: '0.089139', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105425', source: 'coinGecko' },
            { value: '0.10596650780167817', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.415716', source: 'coinGecko' },
            { value: '0.4040330000336499', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '564cde4c7ddde6b929ea31b80dd15aa4d58713f1f69e4ec4767f1aa0bd37c1af',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.93e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.08953', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105877', source: 'coinGecko' },
            { value: '0.10532800668537923', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.397698', source: 'coinGecko' },
            { value: '0.4149000001650887', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '7509b406a2b0dfa27eb094d34103ec9c189467afee32060301030848e069c79e',
        json_metadata: {
          ADAEUR: [{ value: '0.090222', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106599', source: 'coinGecko' },
            { value: '0.10555901202676048', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.398204', source: 'coinGecko' },
            { value: '0.4149000001650887', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '47bfaf2686bf8201b8117980ef0b44b1a2637febc3f0a912a13d2984222cc122',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '7.02e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.091467', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.108258', source: 'coinGecko' },
            { value: '0.10714100130765591', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.415394', source: 'coinGecko' },
            { value: '0.39229000012525034', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'a7904ded097103638bf737f22b61ab52aa88ce537dee19cfb548e0f19affa806',
        json_metadata: {
          ADAEUR: [{ value: '0.091284', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.108045', source: 'coinGecko' },
            { value: '0.10714100130765591', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.414262', source: 'coinGecko' },
            { value: '0.39229000012525034', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '8d7c5ab3b10cd572f01980d2930d1024f273b0d11ed95bd1d660662ab5d6dd3a',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '7.02e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.091322', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.108051', source: 'coinGecko' },
            { value: '0.1082551009803582', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.414606', source: 'coinGecko' },
            { value: '0.41358500002642806', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '0bfa3e7add6c1a000a296123739975b3687ca5189a5222d73e72efbb87fa342d',
        json_metadata: {
          ADAEUR: [{ value: '0.091844', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.108408', source: 'coinGecko' },
            { value: '0.1082551009803582', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.4151', source: 'coinGecko' },
            { value: '0.41540400016754736', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '0a03d2d89b09876ec9166368d4bf06f692477beebede34f45f2403c3a93f345a',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '7.03e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.091769', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10827', source: 'coinGecko' },
            { value: '0.10824694505471666', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.413748', source: 'coinGecko' },
            { value: '0.41540400016754736', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'f1d55e8fe12ddc6d8efc3f0fe2319ed90ff2bc28a960d0f9ea4c5363ca5b8404',
        json_metadata: {
          ADAEUR: [{ value: '0.091044', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.107316', source: 'coinGecko' },
            { value: '0.10824694505471666', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.408898', source: 'coinGecko' },
            { value: '0.40433200011056053', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'a833c0bb37cb397f437d51a4b66f95dd448288f1b3f8789226cfa279ad710e14',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.99e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.09038', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106592', source: 'coinGecko' },
            { value: '0.10834200972261196', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.409751', source: 'coinGecko' },
            { value: '0.41267400014913624', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '30baefcd3d5527000bb98965aa42fa0cf491ad9a89708d38acac77bb63d72505',
        json_metadata: {
          ADAEUR: [{ value: '0.090505', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10686', source: 'coinGecko' },
            { value: '0.10610701019306383', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.402767', source: 'coinGecko' },
            { value: '0.41267400014913624', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'c4f49653bfea793f1e84994f6ed7799c2174091ef29e3eaa2b1da557187be455',
        json_metadata: {
          TSLA: [{ value: '429.35', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.97e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090292', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10657', source: 'coinGecko' },
            { value: '0.10610701019306383', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.408464', source: 'coinGecko' },
            { value: '0.4073660001622539', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '8be0ec517f6d3d42cc487e9b4b1e3ed544c28dd727df1928a5526ee89f3f9387',
        json_metadata: {
          ADAEUR: [{ value: '0.090174', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106443', source: 'coinGecko' },
            { value: '0.10725901099040182', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.391895', source: 'coinGecko' },
            { value: '0.4073660001622539', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '8e66f3fc2ce5237fa45e1a05bcd4a39f8f52e79aa45728e2baafb81d0c00f0ae',
        json_metadata: {
          TSLA: [{ value: '421.26', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.95e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089785', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106003', source: 'coinGecko' },
            { value: '0.1063159431281999', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.395026', source: 'coinGecko' },
            { value: '0.40589400008860993', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'c799591d45ba6bcd767970eda0d287c2e06f7f797d4c3f30bae6edcbea913f39',
        json_metadata: {
          ADAEUR: [{ value: '0.090139', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105956', source: 'coinGecko' },
            { value: '0.1063159431281999', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.413114', source: 'coinGecko' },
            { value: '0.3924530000838044', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'ba765517f89d5260754caf270f0c49750d61b6e5925f02d3ce96e07ebc3854be',
        json_metadata: {
          TSLA: [{ value: '417.2', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.95e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089798', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106187', source: 'coinGecko' },
            { value: '0.10613700057897733', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.39617', source: 'coinGecko' },
            { value: '0.3924530000838044', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'af8f77d58c9e25b37ee0e23afcd416a5f1a254754fd2c8f2476d2215924a7704',
        json_metadata: {
          ADAEUR: [{ value: '0.089338', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105531', source: 'coinGecko' },
            { value: '0.10595800820560007', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.395547', source: 'coinGecko' },
            { value: '0.4108730000772643', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '42cb6bba4d6cc5bd490bdb38e66d525ee0fdfb312636e246863a8228b221e930',
        json_metadata: {
          TSLA: [{ value: '408.77', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.088147', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104202', source: 'coinGecko' },
            { value: '0.10595800820560007', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.413005', source: 'coinGecko' },
            { value: '0.39881755094805876', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '1d2b69906e837ce1dd2567503ab8efafdccbe47f8e6cb5b42834188f912f516e',
        json_metadata: {
          ADAEUR: [{ value: '0.088336', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10433', source: 'coinGecko' },
            { value: '0.10560799579257744', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.413786', source: 'coinGecko' },
            { value: '0.39881755094805876', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '4d8bdabf60abe82a8246254ddb56206970ff99b32762a513aac8436fa35379d6',
        json_metadata: {
          TSLA: [{ value: '403.63', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.0888', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104917', source: 'coinGecko' },
            { value: '0.10431100702263424', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.397996', source: 'coinGecko' },
            { value: '0.4155220001650769', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '16f6ecccec35e4ac8c12f1bbfa13363d934d026bbb58b644bf0465514f5f128d',
        json_metadata: {
          ADAEUR: [{ value: '0.088952', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105003', source: 'coinGecko' },
            { value: '0.10431100702263424', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.413786', source: 'coinGecko' },
            { value: '0.4155220001650769', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'ec1726e0ff837b1fd78086264c924302f8dc0ac9483bcdd6ff7a7fe6e4d138ce',
        json_metadata: {
          TSLA: [{ value: '403.63', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.87e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.088619', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104701', source: 'coinGecko' },
            { value: '0.10490450595275375', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.397341', source: 'coinGecko' },
            { value: '0.39791000000791843', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '279cf5c71f1b80ab7415c35d0e63b94f0bd861ca75e54c8684bf93cf322ee06a',
        json_metadata: {
          ADABTC: [{ value: '6.87e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.08892', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105115', source: 'coinGecko' },
            { value: '0.10490450595275375', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.398894', source: 'coinGecko' },
            { value: '0.39791000000791843', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '4e83c40f1f771bd38445b8ee27be0fa40e23d74e4fde0519626618d132b362e3',
        json_metadata: {
          TSLA: [{ value: '413.5', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.86e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.088244', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.104282', source: 'coinGecko' },
            { value: '0.10473999814191243', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.399532', source: 'coinGecko' },
            { value: '0.3988940000090134', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'bdf29b083b7a41ae429cdb688c2c4e156feda780245acdbe13d0b8deb0e278ec',
        json_metadata: {
          ADABTC: [{ value: '6.91e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089271', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105492', source: 'coinGecko' },
            { value: '0.10473999814191243', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.398894', source: 'coinGecko' },
            { value: '0.3988940000090134', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '08c4b6c31d324ccdefffb075e8465317940fc25c4a116d977657e716b6826c70',
        json_metadata: {
          TSLA: [{ value: '410.72', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.9e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089393', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105707', source: 'coinGecko' },
            { value: '0.10441588345182622', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.419372', source: 'coinGecko' },
            { value: '0.4033694908931427', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '55462e4a6663efdb17e2909981f79cc6a77348f01cf0fdde7d8b972015ff5cd0',
        json_metadata: {
          ADABTC: [{ value: '6.92e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089326', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105719', source: 'coinGecko' },
            { value: '0.10577048882783346', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.421356', source: 'coinGecko' },
            { value: '0.4033694908931427', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '7a3be499b1364dae3b6a05d027a558398e4b28b031c8c404fffac67cc6a11770',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.91e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089607', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105816', source: 'coinGecko' },
            { value: '0.10577048882783346', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.421849', source: 'coinGecko' },
            { value: '0.4189792486411699', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '759b777bb7640c36d08527e40cfccba6bdacb9eb19ea7ac8b8f0c39437f6a7a0',
        json_metadata: {
          ADABTC: [{ value: '6.9e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089476', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105649', source: 'coinGecko' },
            { value: '0.10568049573452384', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.420084', source: 'coinGecko' },
            { value: '0.4189792486411699', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '30fd037e49e1efa3e2999cb85cc34e4d81e006c2a51e072b27ba86dba7e2da94',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.92e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089817', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.1061', source: 'coinGecko' },
            { value: '0.10568049573452384', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.423291', source: 'coinGecko' },
            { value: '0.4217574940127939', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'dc544b86c0cd921e41d91d8d2ef170449c2ddb1725180d3e37be23326208fa95',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.92e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090001', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106355', source: 'coinGecko' },
            { value: '0.10606500936554032', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.051997', source: 'coinGecko' }],
          BTCUSD: [{ value: '15375.81', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.401955', source: 'coinGecko' },
            { value: '0.4217574940127939', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'btcCom' }],
        },
      },
      {
        tx_hash:
          '630a1907bad77ba1cc4c5dd0024e49613c1539df2c2c673404c2007ed9328b06',
        json_metadata: {
          ADABTC: [{ value: '6.92e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089991', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106422', source: 'coinGecko' },
            { value: '0.10606500936554032', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.402221', source: 'coinGecko' },
            { value: '0.4217574940127939', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '0c9f7e3bbb303e5cdd0197d8007d28a019917195cb82ef06755c3a6a68dff130',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.92e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089867', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106208', source: 'coinGecko' },
            { value: '0.10606500936554032', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.051691', source: 'coinGecko' }],
          BTCUSD: [{ value: '15344.98', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.39873', source: 'coinGecko' },
            { value: '0.3985400000417989', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
      {
        tx_hash:
          'e63320831231cb6eb6db75cdba2793f426cf05939b6a5d2c8bb8b25ea8c27701',
        json_metadata: {
          ADABTC: [{ value: '6.94e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090165', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106577', source: 'coinGecko' },
            { value: '0.10590450442569628', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.399523', source: 'coinGecko' },
            { value: '0.3985400000417989', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '7c4ac735bd05fc1c94643a28dbf829a4ead840e4d272d98835de5f4a5fd448f7',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.91e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089518', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105788', source: 'coinGecko' },
            { value: '0.10590450442569628', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.051024', source: 'coinGecko' }],
          BTCUSD: [{ value: '15311.32', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.398466', source: 'coinGecko' },
            { value: '0.3987560001089481', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
      {
        tx_hash:
          '2d04578edbdf3f66969a8a6ce6e7abbae9f2aff070c4a57db32f1321906b01a5',
        json_metadata: {
          ADABTC: [{ value: '6.92e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089384', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105628', source: 'coinGecko' },
            { value: '0.1058570045474052', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.399523', source: 'coinGecko' },
            { value: '0.3987560001089481', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '95bed508f15dbf4e42f3c09e3f85e25814fe7e6072f18d808cf42fd8695aed67',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.94e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090305', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106771', source: 'coinGecko' },
            { value: '0.1058570045474052', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.051653', source: 'coinGecko' }],
          BTCUSD: [{ value: '15402.79', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.404766', source: 'coinGecko' },
            { value: '0.3982130000480603', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
      {
        tx_hash:
          'e048cee98da1bd0a2933fb2f9519af4ebc3703e13e3d658b1019a760d6e068e7',
        json_metadata: {
          ADABTC: [{ value: '6.94e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090777', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.107298', source: 'coinGecko' },
            { value: '0.10609843175908017', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.405131', source: 'coinGecko' },
            { value: '0.3982130000480603', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '28e9a65f249ef77766032a52dde8c53db6623d3ca64a2e01f6149c2f1f717033',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.98e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.091096', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.107714', source: 'coinGecko' },
            { value: '0.10609843175908017', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.05035', source: 'coinGecko' }],
          BTCUSD: [{ value: '15436.28', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.406202', source: 'coinGecko' },
            { value: '0.4053516964699549', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
      {
        tx_hash:
          '9772514ae604a10f3914e730a569b8e4528395b4f2265858c50f0fed1394c7b5',
        json_metadata: {
          ADABTC: [{ value: '6.95e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.09066', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.107226', source: 'coinGecko' },
            { value: '0.1073600004122624', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.400131', source: 'coinGecko' },
            { value: '0.4053516964699549', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '51be98cb313dd75f1c63727a322d82e0b0318a0925a684db49c74044ef667366',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.93e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090365', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.10684', source: 'coinGecko' },
            { value: '0.10714350383043383', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.050412', source: 'coinGecko' }],
          BTCUSD: [{ value: '15385.68', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.399782', source: 'coinGecko' },
            { value: '0.40242533183888235', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
      {
        tx_hash:
          '4d658f0bf150b89588c32f991e6ebfba8b0e020cf35347d34d539e40cfb93208',
        json_metadata: {
          ADABTC: [{ value: '6.93e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090186', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106636', source: 'coinGecko' },
            { value: '0.10714350383043383', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.403246', source: 'coinGecko' },
            { value: '0.40242533183888235', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'eb66f97ef8e99b968582431a486b33c78973b3ffe78619ff853263ebd78134d7',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.94e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.090395', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106929', source: 'coinGecko' },
            { value: '0.10714350383043383', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.050611', source: 'coinGecko' }],
          BTCUSD: [{ value: '15399.54', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.401268', source: 'coinGecko' },
            { value: '0.40218040433137775', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
      {
        tx_hash:
          '526f927fd3075df22e8f8ca691d610f1e2d1aef12bd1f783a459dde2e173ddcf',
        json_metadata: {
          ADABTC: [{ value: '6.93e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.09033', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106848', source: 'coinGecko' },
            { value: '0.10667800013740127', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.403246', source: 'coinGecko' },
            { value: '0.40218040433137775', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          '6ab286ca794821237700211bb4699c8dfef88388e3c93243141faee3ef4df6af',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.91e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089719', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106101', source: 'coinGecko' },
            { value: '0.10667800013740127', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.050503', source: 'coinGecko' }],
          BTCUSD: [{ value: '15348.1', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.400514', source: 'coinGecko' },
            { value: '0.3993550001418509', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
      {
        tx_hash:
          'c5c973a505cdaf3af0a3e2790fc58f19761713550c9d2388dd14a4ddd4f59cba',
        json_metadata: {
          ADABTC: [{ value: '6.91e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.08983', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.106234', source: 'coinGecko' },
            { value: '0.1071179789922362', source: 'ergoOracles' },
          ],
          ERGUSD: [
            { value: '0.399447', source: 'coinGecko' },
            { value: '0.3993550001418509', source: 'ergoOracles' },
          ],
        },
      },
      {
        tx_hash:
          'e8ea016ebe61fe5d7e713ddd4febee935c32d0835b366191c3596b41f2898c7f',
        json_metadata: {
          TSLA: [{ value: '409.25', source: 'investorsExchange' }],
          ADABTC: [{ value: '6.88e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.089244', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.105532', source: 'coinGecko' },
            { value: '0.1061170088586479', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.050325', source: 'coinGecko' }],
          BTCUSD: [{ value: '15332.78', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.399117', source: 'coinGecko' },
            { value: '0.4035729426473895', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '16787779609932.66', source: 'blockBook' }],
        },
      },
    ],
  },
] as const;
