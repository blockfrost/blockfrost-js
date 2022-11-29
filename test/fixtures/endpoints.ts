import { BlockFrostAPI } from '../../src';
import mocks from './blockfrost';
import { mainentUrl } from '../utils';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.root(),
    path: mainentUrl('/'),
    endpointMock: mocks.root,
    response: mocks.root,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.health(),
    path: mainentUrl('/health'),
    endpointMock: mocks.health,
    response: mocks.health,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.healthClock(),
    path: mainentUrl('/health/clock'),
    endpointMock: mocks.healthClock,
    response: mocks.healthClock,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.network(),
    path: mainentUrl('/network'),
    endpointMock: mocks.network,
    response: mocks.network,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metrics(),
    path: mainentUrl('/metrics'),
    endpointMock: mocks.metrics,
    response: mocks.metrics,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metricsEndpoints(),
    path: mainentUrl('/metrics/endpoints'),
    endpointMock: mocks.metricsEndpoints,
    response: mocks.metricsEndpoints,
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.genesis(),
    path: mainentUrl('/genesis'),
    endpointMock: mocks.ledger,
    response: mocks.ledger,
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.accounts(
        'stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w',
      ),
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
      '/accounts/stake1u8yk3dcuj8yylwvnzz953yups6mmuvt0vtjmxl2gmgceqjqz2yfd2/rewards',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.addresses(
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      ),
    endpointMock: [],
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
      '/addresses/addr1qywvux9d5u4cqyzrhp587sty33gt5pl5hpxmnzrw5nk5j87fdzm3eywgf7uexyytfzfcrp4hhcck7ch9kd753k33jpyqa3mzep/transactions',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.assets(),
    path: mainentUrl('/assets'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.assetsById('123'),
    endpointMock: [],
    path: mainentUrl('/assets/123'),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsHistory(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    endpointMock: [],
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
      '/assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/addresses',
    ),
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.assetsPolicyById('policyId'),
    path: mainentUrl('/assets/policy/policyId'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.assetsPolicyByIdAll(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
      ),
    path: mainentUrl(
      '/assets/policy/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksLatest(),
    path: mainentUrl('/blocks/latest'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksLatestTxs(),
    path: mainentUrl('/blocks/latest/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksLatestTxsAll(),
    path: mainentUrl('/blocks/latest/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.blocks(
        '5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
      ),
    path: mainentUrl(
      '/blocks/5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksTxs('5360435'),
    path: mainentUrl('/blocks/5360435/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.blocksPrevious('5360435', { count: 1 }),
    path: mainentUrl('/blocks/5360435/previous'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksTxs('5360435'),
    path: mainentUrl('./blocks/5360435/txs'),
    endpointMock: [],
    response: [],
  },

  {
    command: (SDK: BlockFrostAPI) => SDK.blocksTxsAll('5549919'),
    path: mainentUrl('/blocks/5549919/txs'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksAddresses('6622172'),
    path: mainentUrl('/blocks/6622172/addresses'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.blocksAddressesAll('6622172'),
    path: mainentUrl('/blocks/6622172/addresses'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txs(
        '28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026',
      ),
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
      '/txs/33770d42c7bc8a9a0bc9830ffb97941574dc61dc534796dd8614b99b6aadace4/pool_retires',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.txsMetadata(
        'e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d',
      ),
    path: mainentUrl(
      '/txs/e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d/metadata',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.scripts(),
    path: mainentUrl('/scripts'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsByHash(
        '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      ),
    path: mainentUrl(
      '/scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.scriptsRedeemers('script-hash'),
    path: mainentUrl('scripts/script-hash/redeemers'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsJson(
        'fc7e9a7f604c2cd6a169433fb2de86b183b7cd478f46785701ae23a0',
      ),
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
      '/scripts/datum/5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsLatest(),
    path: mainentUrl('/epochs/latest'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochs(0),
    path: mainentUrl('/epochs/0'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochs(242),
    path: mainentUrl('/epochs/242'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsStakes(242),
    path: mainentUrl('/epochs/242/stakes'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsParameters(267),
    path: mainentUrl('/epochs/267/parameters'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsNext(250),
    path: mainentUrl('/epochs/250/next'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsPrevious(250, { page: 1 }),
    path: mainentUrl('/epochs/250/previous'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.epochsStakesByPoolId(
        249,
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainentUrl(
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
    path: mainentUrl(
      '/epochs/249/blocks/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.epochsBlocks(230),
    path: mainentUrl('/epochs/230/blocks'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabels(),
    path: mainentUrl('/metadata/txs/labels'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabelCbor('1968'),
    path: mainentUrl('metadata/txs/labels/1968/cbor'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabel('1968'),
    path: mainentUrl('/metadata/txs/labels/1968'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsRetiring(),
    path: mainentUrl('/pools/retiring'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsRetired(),
    path: mainentUrl('/pools/retired'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.pools(),
    path: mainentUrl('/pools'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsByIdHistory(
        'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      ),
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/updates',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.poolsById('pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy'),
    path: mainentUrl(
      '/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsExtended(),
    path: mainentUrl('/pools/extended'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) => SDK.poolsExtendedAll(),
    path: mainentUrl('/pools/extended'),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkAddress(
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
      ),
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
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
    path: mainentUrl(
      '/nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers/ADAUSD',
    ),
    endpointMock: [],
    response: [],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkTickers('ADAUSD', { count: 2, page: 2 }),
    path: mainentUrl('/nutlink/tickers/ADAUSD'),
    endpointMock: [],
    response: [],
  },
] as const;
