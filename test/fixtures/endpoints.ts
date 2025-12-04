import { BlockFrostAPI } from '../../src';
import mocks from './blockfrost';
import { mainnetUrl } from '../utils';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.root(),
    path: mainnetUrl('/'),
    endpointMock: mocks.root,
    response: mocks.root,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.health(),
    path: mainnetUrl('/health'),
    endpointMock: mocks.health,
    response: mocks.health,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.healthClock(),
    path: mainnetUrl('/health/clock'),
    endpointMock: mocks.healthClock,
    response: mocks.healthClock,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.network(),
    path: mainnetUrl('/network'),
    endpointMock: mocks.network,
    response: mocks.network,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.networkEras(),
    path: mainnetUrl('/network/eras'),
    endpointMock: mocks.networkEras,
    response: mocks.networkEras,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metrics(),
    path: mainnetUrl('/metrics'),
    endpointMock: mocks.metrics,
    response: mocks.metrics,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metricsEndpoints(),
    path: mainnetUrl('/metrics/endpoints'),
    endpointMock: mocks.metricsEndpoints,
    response: mocks.metricsEndpoints,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.genesis(),
    path: mainnetUrl('/genesis'),
    endpointMock: mocks.ledger,
    response: mocks.ledger,
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accounts(
        'stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w',
      ),
    path: mainnetUrl(
      '/accounts/stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsRewards(
        'stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/rewards',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsHistoryAll(
        'stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk',
      ),
    path: mainnetUrl(
      'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/history',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsDelegations(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f/delegations',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsDelegationsAll(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f/delegations/all',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsRegistrations(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f/registrations',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsRegistrationsAll(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f/registrations/all',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsWithdrawals(
        'stake1u88xakeptjw9jwsytkjal76d07an4thvvrfx3w2kt77pw4sc5rr8k',
        { count: 4, page: 2 },
      ),
    path: mainnetUrl(
      '/accounts/stake1u88xakeptjw9jwsytkjal76d07an4thvvrfx3w2kt77pw4sc5rr8k/withdrawals',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsWithdrawalsAll(
        'stake1u88xakeptjw9jwsytkjal76d07an4thvvrfx3w2kt77pw4sc5rr8k',
      ),
    path: mainnetUrl(
      '/accounts/stake1u88xakeptjw9jwsytkjal76d07an4thvvrfx3w2kt77pw4sc5rr8k/withdrawals/all',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsMirs(
        'stake1uyq7039vutuw8v7femqtktdu9zlhnqh3mkvvhdazft9ga2q8zdfkp',
        { count: 1, page: 1 },
      ),
    path: mainnetUrl(
      '/accounts/stake1uyq7039vutuw8v7femqtktdu9zlhnqh3mkvvhdazft9ga2q8zdfkp/mirs',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsMirsAll(
        'stake1uyq7039vutuw8v7femqtktdu9zlhnqh3mkvvhdazft9ga2q8zdfkp',
      ),
    path: mainnetUrl(
      '/accounts/stake1uyq7039vutuw8v7femqtktdu9zlhnqh3mkvvhdazft9ga2q8zdfkp/mirs',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsAddresses(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f/addresses',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsAddressesAll(
        'stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9a3t4rgddm4expj0ucyxhxg3ft9ugk2ry6r9w69h04ea6cfj887f/addresses',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsAddressesAssets(
        'stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsAddressesAssetsAll(
        'stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja',
      ),
    path: mainnetUrl(
      '/accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsRewardsAll(
        'stake1u8yk3dcuj8yylwvnzz953yups6mmuvt0vtjmxl2gmgceqjqz2yfd2',
      ),
    path: mainnetUrl(
      '/accounts/stake1u8yk3dcuj8yylwvnzz953yups6mmuvt0vtjmxl2gmgceqjqz2yfd2/rewards',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsTransactions(
        'stake1u8yk3dcuj8yylwvnzz953yups6mmuvt0vtjmxl2gmgceqjqz2yfd2',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/accounts/stake1u8yk3dcuj8yylwvnzz953yups6mmuvt0vtjmxl2gmgceqjqz2yfd2/transactions',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accountsTransactionsAll(
        'stake1u8yk3dcuj8yylwvnzz953yups6mmuvt0vtjmxl2gmgceqjqz2yfd2',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/accounts/stake1u8yk3dcuj8yylwvnzz953yups6mmuvt0vtjmxl2gmgceqjqz2yfd2/transactions',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addresses(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addressesTotal(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y/total',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addressesUtxos(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y/utxos',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addressesUtxosAll(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y/utxos',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addressesTransactions(
        'addr1qywvux9d5u4cqyzrhp587sty33gt5pl5hpxmnzrw5nk5j87fdzm3eywgf7uexyytfzfcrp4hhcck7ch9kd753k33jpyqa3mzep',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/addresses/addr1qywvux9d5u4cqyzrhp587sty33gt5pl5hpxmnzrw5nk5j87fdzm3eywgf7uexyytfzfcrp4hhcck7ch9kd753k33jpyqa3mzep/transactions',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addressesTransactionsAll(
        'addr1qywvux9d5u4cqyzrhp587sty33gt5pl5hpxmnzrw5nk5j87fdzm3eywgf7uexyytfzfcrp4hhcck7ch9kd753k33jpyqa3mzep',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/addresses/addr1qywvux9d5u4cqyzrhp587sty33gt5pl5hpxmnzrw5nk5j87fdzm3eywgf7uexyytfzfcrp4hhcck7ch9kd753k33jpyqa3mzep/transactions',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.assets(),
    path: mainnetUrl('/assets'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.assetsById('123'),
    endpointMock: [],
    path: mainnetUrl('/assets/123'),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsHistory(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/history',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsHistoryAll(
        'd894897411707efa755a76deb66d26dfd50593f2e70863e1661e98a07370616365636f696e73',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/assets/d894897411707efa755a76deb66d26dfd50593f2e70863e1661e98a07370616365636f696e73/history',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsTransactions(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/transactions',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsAddresses(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    endpointMock: [],
    path: mainnetUrl(
      '/assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/addresses',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.assetsPolicyById('policyId'),
    path: mainnetUrl('/assets/policy/policyId'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsPolicyByIdAll(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
      ),
    path: mainnetUrl(
      '/assets/policy/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksLatest(),
    path: mainnetUrl('/blocks/latest'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksLatestTxs(),
    path: mainnetUrl('/blocks/latest/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksLatestTxsAll(),
    path: mainnetUrl('/blocks/latest/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.blocks(
        '5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
      ),
    path: mainnetUrl(
      '/blocks/5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksTxs('5360435'),
    path: mainnetUrl('/blocks/5360435/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.blocksPrevious('5360435', { count: 1 }),
    path: mainnetUrl('/blocks/5360435/previous'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksTxs('5360435'),
    path: mainnetUrl('./blocks/5360435/txs'),
    endpointMock: [],
    response: [],
  },

  {
    command: (SDK: BlockFrostAPI) => SDK.blocksTxsAll('5549919'),
    path: mainnetUrl('/blocks/5549919/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksAddresses('6622172'),
    path: mainnetUrl('/blocks/6622172/addresses'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksAddressesAll('6622172'),
    path: mainnetUrl('/blocks/6622172/addresses'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txs(
        '28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026',
      ),
    path: mainnetUrl(
      '/txs/28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsUtxos(
        '927edb96f3386ab91b5f5d85d84cb4253c65b1c2f65fa7df25f81fab1d62987a',
      ),
    path: mainnetUrl(
      '/txs/927edb96f3386ab91b5f5d85d84cb4253c65b1c2f65fa7df25f81fab1d62987a/utxos',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsWithdrawals(
        '9f811b021492a5544207f7b566b4e67c87f0918b9e7055ab3074d552ab18e895',
      ),
    path: mainnetUrl(
      '/txs/9f811b021492a5544207f7b566b4e67c87f0918b9e7055ab3074d552ab18e895/withdrawals',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsMirs(
        '7b57f2cf1c442c563647ab29669c88b9116c2668d31d42526ff27ed614da1252',
      ),
    path: mainnetUrl(
      '/txs/7b57f2cf1c442c563647ab29669c88b9116c2668d31d42526ff27ed614da1252/mirs',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsDelegations(
        'c2120581050a1116ab38a5ac8a62d64df4cf12cf3370d22337201d36eb65fcc4',
      ),
    path: mainnetUrl(
      '/txs/c2120581050a1116ab38a5ac8a62d64df4cf12cf3370d22337201d36eb65fcc4/delegations',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsPoolUpdates(
        '28bd5e8c342ab89d6642e446cb299058ea36256af1718e4af9326898ce4192d7',
      ),
    path: mainnetUrl(
      '/txs/28bd5e8c342ab89d6642e446cb299058ea36256af1718e4af9326898ce4192d7/pool_updates',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsStakes(
        'c2120581050a1116ab38a5ac8a62d64df4cf12cf3370d22337201d36eb65fcc4',
      ),
    path: mainnetUrl(
      '/txs/c2120581050a1116ab38a5ac8a62d64df4cf12cf3370d22337201d36eb65fcc4/stakes',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsPoolRetires(
        '33770d42c7bc8a9a0bc9830ffb97941574dc61dc534796dd8614b99b6aadace4',
      ),
    path: mainnetUrl(
      '/txs/33770d42c7bc8a9a0bc9830ffb97941574dc61dc534796dd8614b99b6aadace4/pool_retires',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsRequiredSigners(
        'b024ad35c6309a71a8e613d8bfea2a8185d81eda379ca9128877adefcde1c515',
      ),
    path: mainnetUrl(
      '/txs/b024ad35c6309a71a8e613d8bfea2a8185d81eda379ca9128877adefcde1c515/required_signers',
    ),
    endpointMock: [
      {
        witness_hash:
          'db7685e2d763133630e1a4afdefc5752d4b1c9be6c102e71242fb06f',
      },
    ],
    response: [
      {
        witness_hash:
          'db7685e2d763133630e1a4afdefc5752d4b1c9be6c102e71242fb06f',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsMetadata(
        'e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d',
      ),
    path: mainnetUrl(
      '/txs/e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d/metadata',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsCbor(
        'e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d',
      ),
    path: mainnetUrl(
      '/txs/e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d/cbor',
    ),
    endpointMock: { cbor: 'deadbeef' },
    response: { cbor: 'deadbeef' },
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.scripts(),
    path: mainnetUrl('/scripts'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsByHash(
        '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      ),
    path: mainnetUrl(
      '/scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.scriptsRedeemers('script-hash'),
    path: mainnetUrl('scripts/script-hash/redeemers'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsJson(
        'fc7e9a7f604c2cd6a169433fb2de86b183b7cd478f46785701ae23a0',
      ),
    path: mainnetUrl(
      '/scripts/fc7e9a7f604c2cd6a169433fb2de86b183b7cd478f46785701ae23a0/json',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsCbor(
        '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      ),
    path: mainnetUrl(
      '/scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016/cbor',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsDatum(
        '5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
      ),
    path: mainnetUrl(
      '/scripts/datum/5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsLatest(),
    path: mainnetUrl('/epochs/latest'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochs(0),
    path: mainnetUrl('/epochs/0'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochs(242),
    path: mainnetUrl('/epochs/242'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsStakes(242),
    path: mainnetUrl('/epochs/242/stakes'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsParameters(267),
    path: mainnetUrl('/epochs/267/parameters'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsLatestParameters(),
    path: mainnetUrl('/epochs/latest/parameters'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsNext(250),
    path: mainnetUrl('/epochs/250/next'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsPrevious(250, { page: 1 }),
    path: mainnetUrl('/epochs/250/previous'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.epochsStakesByPoolId(
        249,
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/epochs/249/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.epochsBlocksByPoolId(
        249,
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/epochs/249/blocks/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsBlocks(230),
    path: mainnetUrl('/epochs/230/blocks'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabels(),
    path: mainnetUrl('/metadata/txs/labels'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabelCbor('1968'),
    path: mainnetUrl('metadata/txs/labels/1968/cbor'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabel('1968'),
    path: mainnetUrl('/metadata/txs/labels/1968'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.mempool(),
    path: mainnetUrl('/mempool'),
    endpointMock: [{ tx_hash: 'abc' }],
    response: [{ tx_hash: 'abc' }],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.mempoolByAddress(
        'addr1qxlem7879m2ly03ljqldhz9jxtlkurc465hqysxr33z2a4ee3t4rc98rhcg4n0a3g60nd9f865gpy4unflgak3we53psrrk85u',
      ),
    path: mainnetUrl(
      '/mempool/addresses/addr1qxlem7879m2ly03ljqldhz9jxtlkurc465hqysxr33z2a4ee3t4rc98rhcg4n0a3g60nd9f865gpy4unflgak3we53psrrk85u',
    ),
    endpointMock: [{ tx_hash: 'abc' }],
    response: [{ tx_hash: 'abc' }],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsRetiring(),
    path: mainnetUrl('/pools/retiring'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsRetired(),
    path: mainnetUrl('/pools/retired'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.pools(),
    path: mainnetUrl('/pools'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsByIdHistory(
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/history',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolMetadata(
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/metadata',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsByIdRelays(
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/relays',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsByIdDelegators(
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/delegators',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsByIdBlocks(
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/blocks',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsByIdUpdates(
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainnetUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/updates',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsById('pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy'),
    path: mainnetUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsExtended(),
    path: mainnetUrl('/pools/extended'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsExtendedAll(),
    path: mainnetUrl('/pools/extended'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkAddress(
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
      ),
    path: mainnetUrl(
      '/nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkAddressTickers(
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
        { count: 3 },
      ),
    path: mainnetUrl(
      '/nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkAddressTickersAll(
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
      ),
    path: mainnetUrl(
      '/nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkAddressTickerAll(
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
        'ADABTC',
      ),
    path: mainnetUrl(
      '/nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers/ADABTC',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkAddressTicker(
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
        'ADAUSD',
        { count: 2, page: 2 },
      ),
    path: mainnetUrl(
      '/nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers/ADAUSD',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkTickers('ADAUSD', { count: 2, page: 2 }),
    path: mainnetUrl('/nutlink/tickers/ADAUSD'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsDatumCbor(
        '5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
      ),
    path: mainnetUrl(
      `scripts/datum/5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4/cbor`,
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.utilsTxsEvaluate(
        '84a8008282582098483df1666d5af7c4aca7ef28f112d225b81a34ef20b0ad4775bab0e41dbb3000825820ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b4300018283581d710449932f9da0258d220c39f803ceb8e2c45fdc605e8dd42f35558b58821a05f5e100a1581c800df05a0cc6b6f0d28aaa1812135bd9eebfbf5e8e80fd47da9989eba14c537061636542756442696431015820419eab3b349f31a776e68b9483668b623ecf2d4895db2955705676393e7eb34d8258390198de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65a3cd1a98844e76c802d75d3271991293a99e4295c00a161521afb3ca1a478ff2e2021a0008e1820758209bf796062b42a22108e1ad01c450d4f3527d936a319a7109d3fd100280a0395e0b582054bcb22a31a100080ffbf7edbac538b1517d99fa85ec77bfac089ab8249e27080d81825820ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b4300108258390198de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65a3cd1a98844e76c802d75d3271991293a99e4295c00a161521afb3ca1a4d6f1abd111a000d5243a30381591974591971010000332332233223232333332222233332222332232333222323332223233333333222222223233322232333322223232332232333222323332223232332233223232333332222233223322332233223322332222323223223232533530343330093333573466e1d401920042304e3055357426aae7940208cccd5cd19b875007480088c140c158d5d09aab9e500923333573466e1d40212000204f235058353059335738921035054310005a49926499263333573466e1d40112006205223333573466e1d40152004205523333573466e1d40192002205323333573466e1d401d2000205623505935305a3357389201035054310005b4992649926498cccd5cd19b8735573aa004900011980619191919191919191919191999ab9a3370e6aae75402920002333333333301a335028232323333573466e1cd55cea8012400046604060766ae854008c0b4d5d09aba25002235066353067335738921035054310006849926135573ca00226ea8004d5d0a80519a8140149aba150093335502f75ca05c6ae854020ccd540bdd728171aba1500733502804435742a00c66a05066aa0aa09aeb4d5d0a8029919191999ab9a3370e6aae754009200023350223232323333573466e1cd55cea80124000466a05466a086eb4d5d0a80118241aba135744a00446a0d46a60d666ae712401035054310006c49926135573ca00226ea8004d5d0a8011919191999ab9a3370e6aae7540092000233502833504375a6ae854008c120d5d09aba2500223506a35306b3357389201035054310006c49926135573ca00226ea8004d5d09aba250022350663530673357389201035054310006849926135573ca00226ea8004d5d0a80219a8143ae35742a00666a05066aa0aaeb88004d5d0a801181d1aba135744a00446a0c46a60c666ae71241035054310006449926135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135573ca00226ea8004d5d0a8011919191999ab9a3370ea00290031180f981e1aba135573ca00646666ae68cdc3a801240084603c608c6ae84d55cf280211999ab9a3370ea00690011180f18189aba135573ca00a46666ae68cdc3a80224000460426eb8d5d09aab9e500623505d35305e3357389201035054310005f49926499264984d55cea80089baa001357426ae8940088d4158d4c15ccd5ce2490350543100058499261057135055353056335738920103505435000574984d55cf280089baa001135573a6ea80044d55cea80089baa0012212330010030022001222222222212333333333300100b00a00900800700600500400300220012212330010030022001122123300100300212001122123300100300212001122123300100300212001212222300400521222230030052122223002005212222300100520011232230023758002640026aa080446666aae7c004940388cd4034c010d5d080118019aba200203f23232323333573466e1cd55cea801a4000466600e6464646666ae68cdc39aab9d5002480008cc034c0c4d5d0a80119a8098169aba135744a00446a0846a608666ae712401035054310004449926135573ca00226ea8004d5d0a801999aa805bae500a35742a00466a01eeb8d5d09aba2500223503e35303f335738921035054310004049926135744a00226aae7940044dd50009110919980080200180110009109198008018011000899aa800bae75a224464460046eac004c8004d540e888c8cccd55cf80112804919a80419aa81718031aab9d5002300535573ca00460086ae8800c0e84d5d08008891001091091198008020018900089119191999ab9a3370ea002900011a80418029aba135573ca00646666ae68cdc3a801240044a01046a06a6a606c66ae7124010350543100037499264984d55cea80089baa001121223002003112200112001232323333573466e1cd55cea8012400046600c600e6ae854008dd69aba135744a00446a05e6a606066ae71241035054310003149926135573ca00226ea80048848cc00400c00880048c8cccd5cd19b8735573aa002900011bae357426aae7940088d40acd4c0b0cd5ce2481035054310002d499261375400224464646666ae68cdc3a800a40084a00e46666ae68cdc3a8012400446a014600c6ae84d55cf280211999ab9a3370ea00690001280511a8171a981799ab9c490103505431000304992649926135573aa00226ea8004484888c00c0104488800844888004480048c8cccd5cd19b8750014800880188cccd5cd19b8750024800080188d4098d4c09ccd5ce2490350543100028499264984d55ce9baa0011220021220012001232323232323333573466e1d4005200c200b23333573466e1d4009200a200d23333573466e1d400d200823300b375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c46601a6eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc048c050d5d0a8049bae357426ae8940248cccd5cd19b875006480088c050c054d5d09aab9e500b23333573466e1d401d2000230133016357426aae7940308d40acd4c0b0cd5ce2481035054310002d49926499264992649926135573aa00826aae79400c4d55cf280109aab9e500113754002424444444600e01044244444446600c012010424444444600a010244444440082444444400644244444446600401201044244444446600201201040024646464646666ae68cdc3a800a400446660106eb4d5d0a8021bad35742a0066eb4d5d09aba2500323333573466e1d400920002300a300b357426aae7940188d4070d4c074cd5ce249035054310001e499264984d55cea80189aba25001135573ca00226ea80048488c00800c888488ccc00401401000c80048c8c8cccd5cd19b875001480088c018dd71aba135573ca00646666ae68cdc3a80124000460106eb8d5d09aab9e500423501635301733573892010350543100018499264984d55cea80089baa001212230020032122300100320011122232323333573466e1cd55cea80124000466aa010600c6ae854008c014d5d09aba25002235013353014335738921035054310001549926135573ca00226ea8004448848cc00400c00844800484888c00c01084888c00801048880048004488880104888800c488880084888800480048c8c8c8cccd5cd19b8735573aa006900011999111998068018010009bae35742a0066eb8d5d0a8011bad357426ae8940088d4018d4c01ccd5ce2481035054310000849926135744a00226aae7940044dd5000893090009000911091998008020018011000889191800800911980198010010009991999111919191991199911191919199119999111191919191999111991191919191919911991199999111119191919199911199911199999999111111119911999991111199991111991199119911991199119911991199119911919191919191919191919191919191919191999911119911919111119191919191a982c0049119119119119111911192999a983c80b909a983f00091129999a983300d099838999a837a83c9840008021a9aa84480a80b11000998389991199ab9a3371200400212402122026604c60c600a605800c60c6a02a660e26601aa02a004a66a611c026604ea03000621200226605a60c66603aa03000660c600a2c2660e26604ea030006660e2666a0dea0f26a6aa11202a02c440020fc6601aa02a0042660e2666a0dea0f26a6aa11202a02c440020fc660e26601aa02a004660e26601e6603aa030006004660106a05c60c600aa028426a60fc002444a6666a60cc0342c2660e26601e6603aa030a028004660e26605a00200e6601000200626604ea0300062c2a6666a60c402c2a66a6114026644666ae68cdc480100084680847009806800a40042a66a6a10402605802a2610e022c442a66a6a1080200226112022c46442a66a6a10e0200226a6aa114026a6aa11402a0044400444a666a610002002426a610a02002444660f06602800c004660f0660686a06a60d400c01c660f0666a0ec0d200290011a9aa848009a9aa84800a80411000912999a98430080090b10b0999a83c0359981a180d00724004603400442c2660e8666a0e40ca6605c60280109001180a0011a9aa846009a9aa84600a80211000912999a984100800909a9843808009111983d1980b0030011983d1981b1a81b9836003008199a83c035800a400442c2c442611c022c266aa11202602c006602c0022a66a6a10402605802a26110022c4646442a66a6a10c020022a666a60fa6a6aa11202a00644002426a610402002444660ea66022a00c004660ea660626a06460cea00c016666a0e60cc002900110b0b1109847008b09a9aa84380a800910010980a0008b0b0b299a9a840809a815091199aa83111299a984680a99a9a83a981418148011084800884700899802181398148010008800800991a981c8009111111111005280a8983f0b110a99a9a841808008801110a99a9a842808008a999a983e00d109a984080800911299a984880998080040010a99a98488099809003001080409843808b0a99a9848809980900300109843808b0803109a984080800911299a984880998090040010a99a98488099808003001080409844008b0a99a9848809980800300109844008b08030b1109842008b1191919191299a98460099815803241012179fa042660de6605660c266036a02ca0126054a004660de6605660c266036a02c6a6aa10e02010440046054a0066605660c266036a02c002605466052660526605200ca004a0066a6aaa0d6a0084440022660de6605660c266036a02ca0126054a00a6605660c266036a02c00260546605200ca00a26a6aaa0d2a00444400626a6aaa0d0a0024440042666aaa0d0660e80046a6aaa0ce00c444002660e80046a6aa1060200844002660e80040062660e60026a6aaa0cc00a44400426a6aaa0c400244400644660446660b200400e666a0cae2800c005200222330203330570020063335063714006002900111991180100099119900099000999aa8011919a81591199a8148018008011a81300099a8151111801980100090009119b8000148008005200030221200133233553022120012253353081013003002133507a00200110015079235355505e001222330653335063029006003333506305600148008d407c488ccd5415c88d4d541f400888ccd5416c88d4d5420404008894cd4c22004ccd5cd19b87001480002280422404400c4cc028ccd5541a001800800400c00c00400400c54cd4d41c8c8d4c0a0004888888888800d40104c19c588854cd4d41d00044008884c1ac584d4d541d140048800854cd4d41c0c06800c4c198588854cd4d41c80044c00c008884c1a8588d4c0acd4c0a400488800c88cd4c12c0089894cd4d418cc058010854cd4d4190c8d4c0a800488888888894cd4d41bcccd54c0ac4800540bc8d4d5420c04004894cd4c22804ccd5cd19b8f00200f08c0108b01135074003150730022135072353550830100122001150705006232323215335350683333333574800846666ae68cdc3a8012400846666aae7d4010941b08cccd55cf9aba25005253353506c306835742a00c426a0de60ec0022a0da4a0da0d40d246666ae68cdc3a801a400446666aae7d4014941b48cccd55cf9aba25006253353506d306935742a00e426a0e060f00022a0dc4a0dc0d60d446666ae68cdc3a8022400046666aae7d40188d41bc1d4941b81ac941b526499262506a2506a2506a2506a06721335507d301b00a00116135573aa00426aae7940044dd50008b0b09a98108009100111199aa980b090009119aa98060900091a9aa8388009119aa83a00119aa98078900091a9aa83a0009119aa83b801199a9aa80700091980a24000002446602a004002466028002900000099aa98060900091a9aa8388009119aa83a001199a9aa805800919aa98080900091a9aa83a8009119aa83c0011aa80900080091199aaa805010801000919aa98080900091a9aa83a8009119aa83c0011aa808000800999aaa80280e001000a8369a98100011111111111199aa981009000911a98180011111a981a8019119a982a8011299a984280999ab9a3371e02600210e0210c02266a0fc00a00e200e400ea0ee012222444666aa602c24002a0d866aa60142400246a6aa0de0024466aa0e40046aa018002666aa602c24002446a6aa0e000444a66a60ee666aa6036240026466a04444666a6a016006440040040026a6a0120024400266a01244a66a60f200420f620020f046a6aa0e6002446601400400a00c2006266a0e0008006a0da00266aa60142400246a6aa0de002446466aa0e6006600200a640026aa0f244a66a6a0e000226aa0180064426a6aa0ea00444a66a60f866018004010266aa02200e0022600c00600424424660020060042400222424446006008224424446600400a00822424446002008224002640026aa0d8442244a66a6a0ca0022a0ce44266a0d0600800466aa600c240020080024466e0000800488d4c05800888888888894cd4d416cccd54c05c48005406c94cd4c1d0ccd5cd19b8f00c00107607513505e0011505d003210761074235301800122200223530170012220012353014001220012233702004002400244666ae68cdc4001000832032890008919a800a82ca82d11a9805000911a98070011111111111299a9a829a9999a981500590a82a90a82a90a82a90999aa980809000a80a11a980e00091299a9837a99a9837999ab9a3371e6a6066004440046a6066008440040e20e02666ae68cdc39a9819801110009a981980211000838838083809a82c8018a82c005909a980d800911a980f800911199aa980a09000911a98120011111a9814804111a98158029119299a983d99a9826002919a98268021299a983e999ab9a3371e0040020fe0fc2a00620fc40fc466a609a00840fc4a66a60fa666ae68cdc780100083f83f0a801883f099a83a00500488048a99a9a83100190a99a9a8318011099a9825001119a9825801119a9827801119a9828001119813801000904080919a98280011040809198138010009110408091119a9826802104080911299a984100999ab9a3370e00c00610802106022a66a610402666ae68cdc3802801042008418089982b002000884180884180883e0a99a9a8310009083e083e283580789931a982899ab9c491024c6600052498c8004d5418088448894cd4d41680044008884cc014008ccd54c01c48004014010004c8004d5417c88448894cd4d41640044d401800c884ccd4024014c010008ccd54c01c4800401401000448d4d40140048800448d4d40100048800888ccd5cd19b8f00200105d05c13350022253353504200221003100150411221233001003002120012212330010030022001222222222212333333333300100b00a009008007006005004003002200122123300100300220012221233300100400300220012212330010030022001122123300100300212001122123300100300212001122123300100300212001121222300300411222002112220011200121222230040052122223003005212222300200521222230010052001221233001003002200121222222230070082212222222330060090082122222223005008122222220041222222200322122222223300200900822122222223300100900820012122300200322212233300100500400320012122300200321223001003200122333573466e1c0080040c00bc8ccc00800522100488100222323230010053200135503122335350280014800088d4d540b4008894cd4c0d0ccd5cd19b8f00200903603513007001130060033200135503022335350270014800088d4d540b0008894cd4c0ccccd5cd19b8f0020070350341001130060031122320013200135502e2253353502500110032213300600230040011222200412222003122220021222200120012222222221233333333300100a00900800700600500400300220011112221233300100400300211120011200112001225335301f002100110202323232323333333574800a46666ae68cdc39aab9d5005480008cccd55cfa8029280691999aab9f50052500e233335573ea00a4a01e46666aae7cd5d128031299a9a807a99a9a807a99a9a80798061aba1500921350122233301e0030020011501021533535010300d35742a012426a02660040022a0222a02042a66a6a020646666666ae900049404c9404c9404c8d4050dd6801128098081aba150082135013300200115011150102501000d00c00b00a2500c4989402c9402c9402c9402c0204d5d1280089aba25001135573ca00226ea80048ccccccd5d20009280312803128031280311a8039bae002003120012001121223002003112200112001122533353006002215333530070022153353019333573466e3cd4c030008888008d4c03000488800806c0684ccd5cd19b8735300c00222200135300c00122200101b01a101a213018161301716213017161533353006001213017162130171610192233223370600400266e08009201400126262122230030042122230020041222001200122212333001004003002200126262611220021221223300100400312001112212330010030021120012626261220021220012001112323001001223300330020020013322332233223333333330024891cd5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc0048811c800df05a0cc6b6f0d28aaa1812135bd9eebfbf5e8e80fd47da9989eb0048810853706163654275640048810b5370616365427564426964003335550044891c826d9fafe1b3acf15bd250de69c04e3fc92c4493785939e069932e8900483001920e209335500648811c88269f8b051a739300fe743a7b315026f4614ce1216a4bb45d7fd0f500482209d20882748203db810920a09c012222222221233333333300100a0090080070060050040030022001111222123330010040030021112001112212330010030021120011049fd87a9fd8799f581c98de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65413101ffffd87980ff0581840000d87b80821a001500c11a16ff8875f5a2190195a1005829d87a9fd8799f581c98de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65413101ffff190196a1676164647265737358390198de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65a3cd1a98844e76c802d75d3271991293a99e4295c00a161521afb3ca',
      ),
    path: mainnetUrl(`utils/txs/evaluate`),
    endpointMockMethod: 'post',
    endpointMock: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: { 'spend:0': { memory: 1376449, steps: 385845365 } },
      },
    },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: { 'spend:0': { memory: 1376449, steps: 385845365 } },
      },
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.utilsTxsEvaluateUtxos(
        '84a8008282582098483df1666d5af7c4aca7ef28f112d225b81a34ef20b0ad4775bab0e41dbb3000825820ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b4300018283581d710449932f9da0258d220c39f803ceb8e2c45fdc605e8dd42f35558b58821a05f5e100a1581c800df05a0cc6b6f0d28aaa1812135bd9eebfbf5e8e80fd47da9989eba14c537061636542756442696431015820419eab3b349f31a776e68b9483668b623ecf2d4895db2955705676393e7eb34d8258390198de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65a3cd1a98844e76c802d75d3271991293a99e4295c00a161521afb3ca1a478ff2e2021a0008e1820758209bf796062b42a22108e1ad01c450d4f3527d936a319a7109d3fd100280a0395e0b582054bcb22a31a100080ffbf7edbac538b1517d99fa85ec77bfac089ab8249e27080d81825820ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b4300108258390198de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65a3cd1a98844e76c802d75d3271991293a99e4295c00a161521afb3ca1a4d6f1abd111a000d5243a30381591974591971010000332332233223232333332222233332222332232333222323332223233333333222222223233322232333322223232332232333222323332223232332233223232333332222233223322332233223322332222323223223232533530343330093333573466e1d401920042304e3055357426aae7940208cccd5cd19b875007480088c140c158d5d09aab9e500923333573466e1d40212000204f235058353059335738921035054310005a49926499263333573466e1d40112006205223333573466e1d40152004205523333573466e1d40192002205323333573466e1d401d2000205623505935305a3357389201035054310005b4992649926498cccd5cd19b8735573aa004900011980619191919191919191919191999ab9a3370e6aae75402920002333333333301a335028232323333573466e1cd55cea8012400046604060766ae854008c0b4d5d09aba25002235066353067335738921035054310006849926135573ca00226ea8004d5d0a80519a8140149aba150093335502f75ca05c6ae854020ccd540bdd728171aba1500733502804435742a00c66a05066aa0aa09aeb4d5d0a8029919191999ab9a3370e6aae754009200023350223232323333573466e1cd55cea80124000466a05466a086eb4d5d0a80118241aba135744a00446a0d46a60d666ae712401035054310006c49926135573ca00226ea8004d5d0a8011919191999ab9a3370e6aae7540092000233502833504375a6ae854008c120d5d09aba2500223506a35306b3357389201035054310006c49926135573ca00226ea8004d5d09aba250022350663530673357389201035054310006849926135573ca00226ea8004d5d0a80219a8143ae35742a00666a05066aa0aaeb88004d5d0a801181d1aba135744a00446a0c46a60c666ae71241035054310006449926135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135573ca00226ea8004d5d0a8011919191999ab9a3370ea00290031180f981e1aba135573ca00646666ae68cdc3a801240084603c608c6ae84d55cf280211999ab9a3370ea00690011180f18189aba135573ca00a46666ae68cdc3a80224000460426eb8d5d09aab9e500623505d35305e3357389201035054310005f49926499264984d55cea80089baa001357426ae8940088d4158d4c15ccd5ce2490350543100058499261057135055353056335738920103505435000574984d55cf280089baa001135573a6ea80044d55cea80089baa0012212330010030022001222222222212333333333300100b00a00900800700600500400300220012212330010030022001122123300100300212001122123300100300212001122123300100300212001212222300400521222230030052122223002005212222300100520011232230023758002640026aa080446666aae7c004940388cd4034c010d5d080118019aba200203f23232323333573466e1cd55cea801a4000466600e6464646666ae68cdc39aab9d5002480008cc034c0c4d5d0a80119a8098169aba135744a00446a0846a608666ae712401035054310004449926135573ca00226ea8004d5d0a801999aa805bae500a35742a00466a01eeb8d5d09aba2500223503e35303f335738921035054310004049926135744a00226aae7940044dd50009110919980080200180110009109198008018011000899aa800bae75a224464460046eac004c8004d540e888c8cccd55cf80112804919a80419aa81718031aab9d5002300535573ca00460086ae8800c0e84d5d08008891001091091198008020018900089119191999ab9a3370ea002900011a80418029aba135573ca00646666ae68cdc3a801240044a01046a06a6a606c66ae7124010350543100037499264984d55cea80089baa001121223002003112200112001232323333573466e1cd55cea8012400046600c600e6ae854008dd69aba135744a00446a05e6a606066ae71241035054310003149926135573ca00226ea80048848cc00400c00880048c8cccd5cd19b8735573aa002900011bae357426aae7940088d40acd4c0b0cd5ce2481035054310002d499261375400224464646666ae68cdc3a800a40084a00e46666ae68cdc3a8012400446a014600c6ae84d55cf280211999ab9a3370ea00690001280511a8171a981799ab9c490103505431000304992649926135573aa00226ea8004484888c00c0104488800844888004480048c8cccd5cd19b8750014800880188cccd5cd19b8750024800080188d4098d4c09ccd5ce2490350543100028499264984d55ce9baa0011220021220012001232323232323333573466e1d4005200c200b23333573466e1d4009200a200d23333573466e1d400d200823300b375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c46601a6eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc048c050d5d0a8049bae357426ae8940248cccd5cd19b875006480088c050c054d5d09aab9e500b23333573466e1d401d2000230133016357426aae7940308d40acd4c0b0cd5ce2481035054310002d49926499264992649926135573aa00826aae79400c4d55cf280109aab9e500113754002424444444600e01044244444446600c012010424444444600a010244444440082444444400644244444446600401201044244444446600201201040024646464646666ae68cdc3a800a400446660106eb4d5d0a8021bad35742a0066eb4d5d09aba2500323333573466e1d400920002300a300b357426aae7940188d4070d4c074cd5ce249035054310001e499264984d55cea80189aba25001135573ca00226ea80048488c00800c888488ccc00401401000c80048c8c8cccd5cd19b875001480088c018dd71aba135573ca00646666ae68cdc3a80124000460106eb8d5d09aab9e500423501635301733573892010350543100018499264984d55cea80089baa001212230020032122300100320011122232323333573466e1cd55cea80124000466aa010600c6ae854008c014d5d09aba25002235013353014335738921035054310001549926135573ca00226ea8004448848cc00400c00844800484888c00c01084888c00801048880048004488880104888800c488880084888800480048c8c8c8cccd5cd19b8735573aa006900011999111998068018010009bae35742a0066eb8d5d0a8011bad357426ae8940088d4018d4c01ccd5ce2481035054310000849926135744a00226aae7940044dd5000893090009000911091998008020018011000889191800800911980198010010009991999111919191991199911191919199119999111191919191999111991191919191919911991199999111119191919199911199911199999999111111119911999991111199991111991199119911991199119911991199119911919191919191919191919191919191919191999911119911919111119191919191a982c0049119119119119111911192999a983c80b909a983f00091129999a983300d099838999a837a83c9840008021a9aa84480a80b11000998389991199ab9a3371200400212402122026604c60c600a605800c60c6a02a660e26601aa02a004a66a611c026604ea03000621200226605a60c66603aa03000660c600a2c2660e26604ea030006660e2666a0dea0f26a6aa11202a02c440020fc6601aa02a0042660e2666a0dea0f26a6aa11202a02c440020fc660e26601aa02a004660e26601e6603aa030006004660106a05c60c600aa028426a60fc002444a6666a60cc0342c2660e26601e6603aa030a028004660e26605a00200e6601000200626604ea0300062c2a6666a60c402c2a66a6114026644666ae68cdc480100084680847009806800a40042a66a6a10402605802a2610e022c442a66a6a1080200226112022c46442a66a6a10e0200226a6aa114026a6aa11402a0044400444a666a610002002426a610a02002444660f06602800c004660f0660686a06a60d400c01c660f0666a0ec0d200290011a9aa848009a9aa84800a80411000912999a98430080090b10b0999a83c0359981a180d00724004603400442c2660e8666a0e40ca6605c60280109001180a0011a9aa846009a9aa84600a80211000912999a984100800909a9843808009111983d1980b0030011983d1981b1a81b9836003008199a83c035800a400442c2c442611c022c266aa11202602c006602c0022a66a6a10402605802a26110022c4646442a66a6a10c020022a666a60fa6a6aa11202a00644002426a610402002444660ea66022a00c004660ea660626a06460cea00c016666a0e60cc002900110b0b1109847008b09a9aa84380a800910010980a0008b0b0b299a9a840809a815091199aa83111299a984680a99a9a83a981418148011084800884700899802181398148010008800800991a981c8009111111111005280a8983f0b110a99a9a841808008801110a99a9a842808008a999a983e00d109a984080800911299a984880998080040010a99a98488099809003001080409843808b0a99a9848809980900300109843808b0803109a984080800911299a984880998090040010a99a98488099808003001080409844008b0a99a9848809980800300109844008b08030b1109842008b1191919191299a98460099815803241012179fa042660de6605660c266036a02ca0126054a004660de6605660c266036a02c6a6aa10e02010440046054a0066605660c266036a02c002605466052660526605200ca004a0066a6aaa0d6a0084440022660de6605660c266036a02ca0126054a00a6605660c266036a02c00260546605200ca00a26a6aaa0d2a00444400626a6aaa0d0a0024440042666aaa0d0660e80046a6aaa0ce00c444002660e80046a6aa1060200844002660e80040062660e60026a6aaa0cc00a44400426a6aaa0c400244400644660446660b200400e666a0cae2800c005200222330203330570020063335063714006002900111991180100099119900099000999aa8011919a81591199a8148018008011a81300099a8151111801980100090009119b8000148008005200030221200133233553022120012253353081013003002133507a00200110015079235355505e001222330653335063029006003333506305600148008d407c488ccd5415c88d4d541f400888ccd5416c88d4d5420404008894cd4c22004ccd5cd19b87001480002280422404400c4cc028ccd5541a001800800400c00c00400400c54cd4d41c8c8d4c0a0004888888888800d40104c19c588854cd4d41d00044008884c1ac584d4d541d140048800854cd4d41c0c06800c4c198588854cd4d41c80044c00c008884c1a8588d4c0acd4c0a400488800c88cd4c12c0089894cd4d418cc058010854cd4d4190c8d4c0a800488888888894cd4d41bcccd54c0ac4800540bc8d4d5420c04004894cd4c22804ccd5cd19b8f00200f08c0108b01135074003150730022135072353550830100122001150705006232323215335350683333333574800846666ae68cdc3a8012400846666aae7d4010941b08cccd55cf9aba25005253353506c306835742a00c426a0de60ec0022a0da4a0da0d40d246666ae68cdc3a801a400446666aae7d4014941b48cccd55cf9aba25006253353506d306935742a00e426a0e060f00022a0dc4a0dc0d60d446666ae68cdc3a8022400046666aae7d40188d41bc1d4941b81ac941b526499262506a2506a2506a2506a06721335507d301b00a00116135573aa00426aae7940044dd50008b0b09a98108009100111199aa980b090009119aa98060900091a9aa8388009119aa83a00119aa98078900091a9aa83a0009119aa83b801199a9aa80700091980a24000002446602a004002466028002900000099aa98060900091a9aa8388009119aa83a001199a9aa805800919aa98080900091a9aa83a8009119aa83c0011aa80900080091199aaa805010801000919aa98080900091a9aa83a8009119aa83c0011aa808000800999aaa80280e001000a8369a98100011111111111199aa981009000911a98180011111a981a8019119a982a8011299a984280999ab9a3371e02600210e0210c02266a0fc00a00e200e400ea0ee012222444666aa602c24002a0d866aa60142400246a6aa0de0024466aa0e40046aa018002666aa602c24002446a6aa0e000444a66a60ee666aa6036240026466a04444666a6a016006440040040026a6a0120024400266a01244a66a60f200420f620020f046a6aa0e6002446601400400a00c2006266a0e0008006a0da00266aa60142400246a6aa0de002446466aa0e6006600200a640026aa0f244a66a6a0e000226aa0180064426a6aa0ea00444a66a60f866018004010266aa02200e0022600c00600424424660020060042400222424446006008224424446600400a00822424446002008224002640026aa0d8442244a66a6a0ca0022a0ce44266a0d0600800466aa600c240020080024466e0000800488d4c05800888888888894cd4d416cccd54c05c48005406c94cd4c1d0ccd5cd19b8f00c00107607513505e0011505d003210761074235301800122200223530170012220012353014001220012233702004002400244666ae68cdc4001000832032890008919a800a82ca82d11a9805000911a98070011111111111299a9a829a9999a981500590a82a90a82a90a82a90999aa980809000a80a11a980e00091299a9837a99a9837999ab9a3371e6a6066004440046a6066008440040e20e02666ae68cdc39a9819801110009a981980211000838838083809a82c8018a82c005909a980d800911a980f800911199aa980a09000911a98120011111a9814804111a98158029119299a983d99a9826002919a98268021299a983e999ab9a3371e0040020fe0fc2a00620fc40fc466a609a00840fc4a66a60fa666ae68cdc780100083f83f0a801883f099a83a00500488048a99a9a83100190a99a9a8318011099a9825001119a9825801119a9827801119a9828001119813801000904080919a98280011040809198138010009110408091119a9826802104080911299a984100999ab9a3370e00c00610802106022a66a610402666ae68cdc3802801042008418089982b002000884180884180883e0a99a9a8310009083e083e283580789931a982899ab9c491024c6600052498c8004d5418088448894cd4d41680044008884cc014008ccd54c01c48004014010004c8004d5417c88448894cd4d41640044d401800c884ccd4024014c010008ccd54c01c4800401401000448d4d40140048800448d4d40100048800888ccd5cd19b8f00200105d05c13350022253353504200221003100150411221233001003002120012212330010030022001222222222212333333333300100b00a009008007006005004003002200122123300100300220012221233300100400300220012212330010030022001122123300100300212001122123300100300212001122123300100300212001121222300300411222002112220011200121222230040052122223003005212222300200521222230010052001221233001003002200121222222230070082212222222330060090082122222223005008122222220041222222200322122222223300200900822122222223300100900820012122300200322212233300100500400320012122300200321223001003200122333573466e1c0080040c00bc8ccc00800522100488100222323230010053200135503122335350280014800088d4d540b4008894cd4c0d0ccd5cd19b8f00200903603513007001130060033200135503022335350270014800088d4d540b0008894cd4c0ccccd5cd19b8f0020070350341001130060031122320013200135502e2253353502500110032213300600230040011222200412222003122220021222200120012222222221233333333300100a00900800700600500400300220011112221233300100400300211120011200112001225335301f002100110202323232323333333574800a46666ae68cdc39aab9d5005480008cccd55cfa8029280691999aab9f50052500e233335573ea00a4a01e46666aae7cd5d128031299a9a807a99a9a807a99a9a80798061aba1500921350122233301e0030020011501021533535010300d35742a012426a02660040022a0222a02042a66a6a020646666666ae900049404c9404c9404c8d4050dd6801128098081aba150082135013300200115011150102501000d00c00b00a2500c4989402c9402c9402c9402c0204d5d1280089aba25001135573ca00226ea80048ccccccd5d20009280312803128031280311a8039bae002003120012001121223002003112200112001122533353006002215333530070022153353019333573466e3cd4c030008888008d4c03000488800806c0684ccd5cd19b8735300c00222200135300c00122200101b01a101a213018161301716213017161533353006001213017162130171610192233223370600400266e08009201400126262122230030042122230020041222001200122212333001004003002200126262611220021221223300100400312001112212330010030021120012626261220021220012001112323001001223300330020020013322332233223333333330024891cd5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc0048811c800df05a0cc6b6f0d28aaa1812135bd9eebfbf5e8e80fd47da9989eb0048810853706163654275640048810b5370616365427564426964003335550044891c826d9fafe1b3acf15bd250de69c04e3fc92c4493785939e069932e8900483001920e209335500648811c88269f8b051a739300fe743a7b315026f4614ce1216a4bb45d7fd0f500482209d20882748203db810920a09c012222222221233333333300100a0090080070060050040030022001111222123330010040030021112001112212330010030021120011049fd87a9fd8799f581c98de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65413101ffffd87980ff0581840000d87b80821a001500c11a16ff8875f5a2190195a1005829d87a9fd8799f581c98de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65413101ffff190196a1676164647265737358390198de7db6b2fb3d50d56a288b27bdcdf1e29c3247a94262dcb5172c65a3cd1a98844e76c802d75d3271991293a99e4295c00a161521afb3ca',
        [
          [
            // this utxo is already spent on blockchain, but it will work for ogmios if passed as additional utxo set
            {
              txId: 'ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b43',
              index: 0,
            },
            {
              address:
                'addr1qxvduldkktan65x4dg5gkfaaehc798pjg755yckuk5tjcedre5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qgcyhcc',
              value: { coins: 1_300_000_000 },
            },
          ],
        ],
      ),
    path: mainnetUrl(`utils/txs/evaluate/utxos`),
    endpointMockMethod: 'post',
    endpointMock: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: { 'spend:0': { memory: 1376449, steps: 385845365 } },
      },
    },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: { 'spend:0': { memory: 1376449, steps: 385845365 } },
      },
    },
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.governance.dreps(),
    path: mainnetUrl(`governance/dreps`),
    endpointMock: [
      {
        drep_id: 'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
        hex: 'db1bc3c3f99ce68977ceaf27ab4dd917123ef9e73f85c304236eab23',
      },
      {
        drep_id: 'drep1cxayn4fgy27yaucvhamsvqj3v6835mh3tjjx6x8hdnr4',
        hex: 'c1ba49d52822bc4ef30cbf77060251668f1a6ef15ca46d18f76cc758',
      },
    ],
    response: [
      {
        drep_id: 'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
        hex: 'db1bc3c3f99ce68977ceaf27ab4dd917123ef9e73f85c304236eab23',
      },
      {
        drep_id: 'drep1cxayn4fgy27yaucvhamsvqj3v6835mh3tjjx6x8hdnr4',
        hex: 'c1ba49d52822bc4ef30cbf77060251668f1a6ef15ca46d18f76cc758',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.drepsById(
        'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
      ),
    path: mainnetUrl(
      `governance/dreps/drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn`,
    ),
    endpointMock: {
      drep_id: 'drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc',
      hex: 'a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d',
      amount: '2000000',
      active: true,
      active_epoch: 420,
      has_script: true,
    },
    response: {
      drep_id: 'drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc',
      hex: 'a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d',
      amount: '2000000',
      active: true,
      active_epoch: 420,
      has_script: true,
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.drepsByIdMetadata(
        'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
      ),
    path: mainnetUrl(
      `governance/dreps/drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn/metadata`,
    ),
    endpointMock: {
      drep_id: 'drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc',
      hex: 'a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d',
      url: 'https://aaa.xyz/drep.json',
      hash: 'a14a5ad4f36bddc00f92ddb39fd9ac633c0fd43f8bfa57758f9163d10ef916de',
      json_metadata: {
        '@context': {
          CIP100:
            'https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#',
          CIP119:
            'https://github.com/cardano-foundation/CIPs/blob/master/CIP-0119/README.md#',
          hashAlgorithm: 'CIP100:hashAlgorithm',
          body: {
            '@id': 'CIP119:body',
            '@context': {
              references: {
                '@id': 'CIP119:references',
                '@container': '@set',
                '@context': {
                  GovernanceMetadata: 'CIP100:GovernanceMetadataReference',
                  Other: 'CIP100:OtherReference',
                  label: 'CIP100:reference-label',
                  uri: 'CIP100:reference-uri',
                },
              },
              paymentAddress: 'CIP119:paymentAddress',
              givenName: 'CIP119:givenName',
              image: {
                '@id': 'CIP119:image',
                '@context': {
                  ImageObject: 'https://schema.org/ImageObject',
                },
              },
              objectives: 'CIP119:objectives',
              motivations: 'CIP119:motivations',
              qualifications: 'CIP119:qualifications',
            },
          },
        },
        hashAlgorithm: 'blake2b-256',
        body: {
          paymentAddress:
            'addr1q86dnpkva4mm859c8ur7tjxn57zgsu6vg8pdetkdve3fsacnq7twy06u2ev5759vutpjgzfryx0ud8hzedhzerava35qwh3x34',
          givenName: 'Ryan Williams',
          image: {
            '@type': 'ImageObject',
            contentUrl: 'https://avatars.githubusercontent.com/u/44342099?v=4',
            sha256:
              '2a21e4f7b20c8c72f573707b068fb8fc6d8c64d5035c4e18ecae287947fe2b2e',
          },
          objectives: 'Buy myself an island.',
          motivations: 'I really would like to own an island.',
          qualifications:
            'I have my 100m swimming badge, so I would be qualified to be able to swim around island.',
          references: [
            {
              '@type': 'Other',
              label: 'A cool island for Ryan',
              uri: "https://www.google.com/maps/place/World's+only+5th+order+recursive+island/@62.6511465,-97.7946829,15.75z/data=!4m14!1m7!3m6!1s0x5216a167810cee39:0x11431abdfe4c7421!2sWorld's+only+5th+order+recursive+island!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n!3m5!1s0x5216a167810cee39:0x11431abdfe4c7421!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n?authuser=0&entry=ttu",
            },
            {
              '@type': 'Link',
              label: "Ryan's Twitter",
              uri: 'https://twitter.com/Ryun1_',
            },
          ],
        },
      },
      bytes:
        '\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6',
    },
    response: {
      drep_id: 'drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc',
      hex: 'a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d',
      url: 'https://aaa.xyz/drep.json',
      hash: 'a14a5ad4f36bddc00f92ddb39fd9ac633c0fd43f8bfa57758f9163d10ef916de',
      json_metadata: {
        '@context': {
          CIP100:
            'https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#',
          CIP119:
            'https://github.com/cardano-foundation/CIPs/blob/master/CIP-0119/README.md#',
          hashAlgorithm: 'CIP100:hashAlgorithm',
          body: {
            '@id': 'CIP119:body',
            '@context': {
              references: {
                '@id': 'CIP119:references',
                '@container': '@set',
                '@context': {
                  GovernanceMetadata: 'CIP100:GovernanceMetadataReference',
                  Other: 'CIP100:OtherReference',
                  label: 'CIP100:reference-label',
                  uri: 'CIP100:reference-uri',
                },
              },
              paymentAddress: 'CIP119:paymentAddress',
              givenName: 'CIP119:givenName',
              image: {
                '@id': 'CIP119:image',
                '@context': {
                  ImageObject: 'https://schema.org/ImageObject',
                },
              },
              objectives: 'CIP119:objectives',
              motivations: 'CIP119:motivations',
              qualifications: 'CIP119:qualifications',
            },
          },
        },
        hashAlgorithm: 'blake2b-256',
        body: {
          paymentAddress:
            'addr1q86dnpkva4mm859c8ur7tjxn57zgsu6vg8pdetkdve3fsacnq7twy06u2ev5759vutpjgzfryx0ud8hzedhzerava35qwh3x34',
          givenName: 'Ryan Williams',
          image: {
            '@type': 'ImageObject',
            contentUrl: 'https://avatars.githubusercontent.com/u/44342099?v=4',
            sha256:
              '2a21e4f7b20c8c72f573707b068fb8fc6d8c64d5035c4e18ecae287947fe2b2e',
          },
          objectives: 'Buy myself an island.',
          motivations: 'I really would like to own an island.',
          qualifications:
            'I have my 100m swimming badge, so I would be qualified to be able to swim around island.',
          references: [
            {
              '@type': 'Other',
              label: 'A cool island for Ryan',
              uri: "https://www.google.com/maps/place/World's+only+5th+order+recursive+island/@62.6511465,-97.7946829,15.75z/data=!4m14!1m7!3m6!1s0x5216a167810cee39:0x11431abdfe4c7421!2sWorld's+only+5th+order+recursive+island!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n!3m5!1s0x5216a167810cee39:0x11431abdfe4c7421!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n?authuser=0&entry=ttu",
            },
            {
              '@type': 'Link',
              label: "Ryan's Twitter",
              uri: 'https://twitter.com/Ryun1_',
            },
          ],
        },
      },
      bytes:
        '\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6',
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.drepsByIdDelegators(
        'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
      ),
    path: mainnetUrl(
      `governance/dreps/drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn/delegators`,
    ),
    endpointMock: [
      {
        address: 'stake1ux4vspfvwuus9uwyp5p3f0ky7a30jq5j80jxse0fr7pa56sgn8kha',
        amount: '1137959159981411',
      },
      {
        address: 'stake1uylayej7esmarzd4mk4aru37zh9yz0luj3g9fsvgpfaxulq564r5u',
        amount: '16958865648',
      },
    ],
    response: [
      {
        address: 'stake1ux4vspfvwuus9uwyp5p3f0ky7a30jq5j80jxse0fr7pa56sgn8kha',
        amount: '1137959159981411',
      },
      {
        address: 'stake1uylayej7esmarzd4mk4aru37zh9yz0luj3g9fsvgpfaxulq564r5u',
        amount: '16958865648',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.drepsByIdUpdates(
        'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
      ),
    path: mainnetUrl(
      `governance/dreps/drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn/updates`,
    ),
    endpointMock: [
      {
        tx_hash:
          'f4097fbdb87ab7c7ab44b30d4e2b81713a058488975d1ab8b05c381dd946a393',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash:
          'dd3243af975be4b5bedce4e5f5b483b2386d5ad207d05e0289c1df0eb261447e',
        cert_index: 0,
        action: 'deregistered',
      },
    ],
    response: [
      {
        tx_hash:
          'f4097fbdb87ab7c7ab44b30d4e2b81713a058488975d1ab8b05c381dd946a393',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash:
          'dd3243af975be4b5bedce4e5f5b483b2386d5ad207d05e0289c1df0eb261447e',
        cert_index: 0,
        action: 'deregistered',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.drepsByIdVotes(
        'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
      ),
    path: mainnetUrl(
      `governance/dreps/drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn/votes`,
    ),
    endpointMock: [
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 2,
        vote: 'yes',
      },
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 3,
        vote: 'abstain',
      },
    ],
    response: [
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 2,
        vote: 'yes',
      },
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 3,
        vote: 'abstain',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.governance.proposals(),
    path: mainnetUrl(`governance/proposals`),
    endpointMock: [
      {
        tx_hash:
          '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
        cert_index: 1,
        governance_type: 'treasury_withdrawals',
      },
      {
        tx_hash: '71317e951b20aa46e9fbf45a46a6e950d5723a481225519655bf6c60',
        cert_index: 4,
        governance_type: 'no_confidence',
      },
    ],
    response: [
      {
        tx_hash:
          '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
        cert_index: 1,
        governance_type: 'treasury_withdrawals',
      },
      {
        tx_hash: '71317e951b20aa46e9fbf45a46a6e950d5723a481225519655bf6c60',
        cert_index: 4,
        governance_type: 'no_confidence',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.proposal(
        '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
        1,
      ),
    path: mainnetUrl(
      `governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1`,
    ),
    endpointMock: {
      tx_hash:
        '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
      cert_index: 1,
      governance_type: 'treasury_withdrawals',
      deposit: 12000,
      return_address:
        'stake_test1urd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgck6nkmz',
      governance_description:
        'TreasuryWithdrawals (fromList [(RewardAcnt {getRwdNetwork = Testnet, getRwdCred = KeyHashObj (KeyHash "71317e951b20aa46e9fbf45a46a6e950d5723a481225519655bf6c60")},Coin 20000000)])',
      ratified_epoch: null,
      enacted_epoch: 123,
      dropped_epoch: null,
      expired_epoch: null,
      expiration: 120,
    },
    response: {
      tx_hash:
        '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
      cert_index: 1,
      governance_type: 'treasury_withdrawals',
      deposit: 12000,
      return_address:
        'stake_test1urd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgck6nkmz',
      governance_description:
        'TreasuryWithdrawals (fromList [(RewardAcnt {getRwdNetwork = Testnet, getRwdCred = KeyHashObj (KeyHash "71317e951b20aa46e9fbf45a46a6e950d5723a481225519655bf6c60")},Coin 20000000)])',
      ratified_epoch: null,
      enacted_epoch: 123,
      dropped_epoch: null,
      expired_epoch: null,
      expiration: 120,
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.proposalParameters(
        '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
        1,
      ),
    path: mainnetUrl(
      `governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1/parameters`,
    ),
    endpointMock: {
      tx_hash: '…',
      cert_index: 1,
      parameters: {
        epoch: 225,
        min_fee_a: 44,
        min_fee_b: 155381,
      },
    },
    response: {
      tx_hash: '…',
      cert_index: 1,
      parameters: {
        epoch: 225,
        min_fee_a: 44,
        min_fee_b: 155381,
      },
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.proposalWithdrawals(
        '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
        1,
      ),
    path: mainnetUrl(
      `governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1/withdrawals`,
    ),
    endpointMock: [
      {
        stake_address:
          'stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7',
        amount: '454541212442',
      },
      {
        stake_address:
          'stake1xx2g2c9dx2nhhehyrezyxpkstoppcqmu9hk63qgfkccw5rqttygt2',
        amount: '97846969',
      },
    ],
    response: [
      {
        stake_address:
          'stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7',
        amount: '454541212442',
      },
      {
        stake_address:
          'stake1xx2g2c9dx2nhhehyrezyxpkstoppcqmu9hk63qgfkccw5rqttygt2',
        amount: '97846969',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.proposalVotes(
        '2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531',
        1,
      ),
    path: mainnetUrl(
      `governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1/votes`,
    ),
    endpointMock: [
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 2,
        voter_role: 'drep',
        voter: 'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
        vote: 'yes',
      },
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 3,
        voter_role: 'constitutional_committee',
        voter: '53a42debdc7ffd90085ab7fd9800b63e6d1c9ac481ba6eb7b6a844e4',
        vote: 'abstain',
      },
    ],
    response: [
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 2,
        voter_role: 'drep',
        voter: 'drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn',
        vote: 'yes',
      },
      {
        tx_hash: 'b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5',
        cert_index: 3,
        voter_role: 'constitutional_committee',
        voter: '53a42debdc7ffd90085ab7fd9800b63e6d1c9ac481ba6eb7b6a844e4',
        vote: 'abstain',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.governance.proposalMetadata(
        '257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8',
        2,
      ),
    path: mainnetUrl(
      `governance/proposals/257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8/2/metadata`,
    ),
    endpointMock: {
      tx_hash:
        '257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8',
      cert_index: 2,
      url: 'https://raw.githubusercontent.com/carloslodelar/proposals/main/pv10.json',
      hash: 'ffa226f3863aca006172d559cf46bb8b883a47233962ae2fc94c158d7de6fa81',
      json_metadata: {
        body: {
          title: 'Hardfork to Protocol version 10',
        },
      },
    },
    response: {
      tx_hash:
        '257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8',
      cert_index: 2,
      url: 'https://raw.githubusercontent.com/carloslodelar/proposals/main/pv10.json',
      hash: 'ffa226f3863aca006172d559cf46bb8b883a47233962ae2fc94c158d7de6fa81',
      json_metadata: {
        body: {
          title: 'Hardfork to Protocol version 10',
        },
      },
    },
  },
] as const;
