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
      SDK.scriptsByHash(
        '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      ),
    response: {
      script_hash: '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      type: 'plutusV1',
      serialised_size: 2739,
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsRedeemers(
        '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      ),
    response: [
      {
        fee: expect.any(String),
        purpose: 'spend',
        tx_hash:
          'a95d16e891e51f98a3b1d3fe862ed355ebc8abffb7a7269d86f775553d9e653f',
        tx_index: 0,
        unit_mem: '520448',
        unit_steps: '211535239',
      },
    ],
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsJson(
        'fc7e9a7f604c2cd6a169433fb2de86b183b7cd478f46785701ae23a0',
      ),
    response: {
      json: {
        scripts: [
          {
            keyHash: '33a0f116a62d7e3866ff04d854b4af72b8827b1bb26895123ddd9110',
            type: 'sig',
          },
          { slot: 23069600, type: 'before' },
        ],
        type: 'all',
      },
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsCbor(
        '4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016',
      ),
    response: {
      cbor: '590ab3590ab00100003323322332233322232333222333222333333332222222233223333322222333322223332223322332233223332223322332233223322332232323232323232323232323232323232323232323232323232335500175ceb844888888c01cccc010c01800cc014008c02000494cd4c0b000441344d4060d4c130cd5ce24810250640004d4988c8c8c8c8c8c8cccd5cd19b8735573aa00a90001280112803a4c26603ca002a0042600c6ae8540084c050d5d09aba25001135573ca00226ea80084d405d262323232323232323232323232323232323232323232323333573466e1cd55cea80aa40004a0044a02e9309999999999817a800a8012801a8022802a8032803a8042804a805099a81080b1aba15012133502001635742a0202666aa032eb94060d5d0a8070999aa80c3ae501735742a018266a03a0426ae8540284cd4070cd54078085d69aba15008133501675a6ae8540184cd4069d71aba150041335019335501b75c0346ae8540084c080d5d09aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135573ca00226ea80084d40592623232323232323333573466e1cd55cea802a40004a0044a00e930998102800a8010980b9aba1500213005357426ae8940044d55cf280089baa0021350154988c8c8c8c8c8c8c8c8cccd5cd19b8735573aa00e90001280112804a4c2666046a002a004a006260106ae8540104ccd54029d728049aba15002133500775c6ae84d5d1280089aba25001135573ca00226ea80084d40512623232323232323333573466e1cd55cea802a40004a0044a00e930998112800a8010980a1aba150021335005012357426ae8940044d55cf280089baa002135013498488c8c8c8c8c8c8cccd5cd19b87500448000940089401126135025500113006357426aae79400c4cccd5cd19b875001480089408c9401126135573aa00226ea80084d404d261335500175ceb444888c8c8c004dd58019a80090008918009aa825911919191919191999aab9f0075504b25002050133504c50025001130063574400a266aa09ea002a004260106aae7540084c018d55cf280089aba10011223232323232323333573466e1cd55cea802a40004a0044a00e93099a8122800a801099a8038031aba150021335007005357426ae8940044d55cf280089baa002135010498488c8c8c8c8c8c8cccd5cd19b8735573aa00a90001280112803a4c266a04ea002a004266a01000c6ae8540084c020d5d09aba25001135573ca00226ea80084d403d261223232323232323333573466e1cd55cea802a40004a0044a00e93099a8122800a801099a8038031aba1500213007357426ae8940044d55cf280089baa00213500e498488c8c8c8c8c8c8c8cccd5cd19b87500548010940b4940092613333573466e1d4011200225002250044984d40b140044c018d5d09aab9e500313333573466e1d400520002502a250044984d55cea80089baa00213500d4988c8c8c8cccd5cd19b875002480088094940092613333573466e1d400520002023250034984d55ce9baa00213500b498488c8c8c004dd60019a80090008918009aa822111999aab9f00125042233504130063574200460066ae8800810c800444888c8c8c8c8c8c8cccd5cd19b8735573aa00a90001280112803a4c266aa08ca002a0042600e6ae8540084c014d5d09aba25001135573ca00226ea80084d402926232323232323232323232323232323333573466e1d4029200625002250044984c0cd40044c038d5d09aab9e500b13333573466e1d401d200425002250044984c0b940044c030d5d09aab9e500813333573466e1d4011200225002250044984c0a940044c02cd5d09aab9e500513333573466e1d4005200025003250064984d55cea80189814280089bae357426aae7940044dd500109a803a4c4646464646464646464646464646464646464646464646464646666ae68cdc3a80aa4018408a4a0049309999ab9a3370ea028900510229280124c26666ae68cdc3a809a40104a0044a00c9309981fa800a80109bae35742a00426eb4d5d09aba25001135573ca02426666ae68cdc3a8072400c4a0044a00c9309981da800a80109bae35742a00426eb8d5d09aba25001135573ca01a26666ae68cdc3a804a40084a0044a00c9309981d2800a801098069aba150021375c6ae84d5d1280089aab9e500813333573466e1d4011200225002250044984c0d940044c020d5d09aab9e500513333573466e1d4005200025003250064984d55cea801898182800898021aba135573ca00226ea80084d40192623232323232323232323232323333573466e1d4021200225002250084984ccc0ed40054009400c4dd69aba150041375a6ae8540084dd69aba135744a00226ae8940044d55cf280289999ab9a3370ea0029000128019280324c26aae75400c4c0d140044c010d5d09aab9e50011375400426a00a93119191919191919191999ab9a3370ea0089001128011280224c26072a00226eb8d5d09aab9e500513333573466e1d4005200025003250064984d55cea8018981b280089bae357426aae7940044dd500109a80224c46464646464646666ae68cdc39aab9d500548000940089401d26133029500150021300635742a00426eb4d5d09aba25001135573ca00226ea80084d400d2623232323333573466e1cd55cea801240004a0044a0089309bae357426aae7940044dd500109a80124c24c4424660020060044002444444444424666666666600201601401201000e00c00a00800600440024424660020060044002444246660020080060044002442466002006004400224244600400622440022400224424660020060042400224424660020060042400224424660020060042400224400424400240022424446006008224440042244400224002424444600800a424444600600a424444600400a424444600200a40024424660020060044002424444444600e01044244444446600c012010424444444600a010244444440082444444400644244444446600401201044244444446600201201040024244600400644424466600200a008006400242446004006424460020064002224a00822440042442446600200800624002240024002224424660020060042240022246460020024466006600400400266664446664446666666644444444664466666444446666444466644466446644664466644466446644666444664466446644664464640024444a66a603c6600a0080062040266ae7124104796f6c6f0001f22333573466e3c0080040740708848cc00400c0088004888888888848cccccccccc00402c02802402001c01801401000c00880048848cc00400c008800488848ccc00401000c00880044488008488488cc00401000c48004448848cc00400c0084480048848cc00400c008800448488c00800c44880044800448848cc00400c0084800448848cc00400c0084800448848cc00400c008480044880084880048004484888c00c010448880084488800448004848888c010014848888c00c014848888c008014848888c00401480048848cc00400c0088004848888888c01c0208848888888cc018024020848888888c014020488888880104888888800c8848888888cc0080240208848888888cc00402402080048488c00800c888488ccc00401401000c80048488c00800c8488c00400c800522012b57656c636f6d6520746f20416c6f6e7a6f2045726121202d20466976652042696e6172696573207465616d0001',
    },
  },
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.scriptsDatum(
        '5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
      ),
    response: {
      json_value: {
        bytes: '3c33',
      },
    },
  },
] as const;
