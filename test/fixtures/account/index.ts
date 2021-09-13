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
    response: [
      {
        address:
          'addr1q8u5ktsj5zsmhvwv0ep9zuhfu39x3wyt9wxjnsn3cagsyy59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usrmcafl',
        data: {
          address:
            'addr1q8u5ktsj5zsmhvwv0ep9zuhfu39x3wyt9wxjnsn3cagsyy59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usrmcafl',
          amount: [
            {
              quantity: '1518517',
              unit: 'lovelace',
            },
            {
              quantity: '1',
              unit: '2f712364ec46f0cf707d412106ce71ef3370f76e27fb56b6bb14708776657465726e696b4e657a6a6564656e79',
            },
          ],
          script: false,
          stake_address:
            'stake1uxzutrtmxwv2rf2j3hdpps66ch0jydmkr58vwgnetddcdwg32u4rc',
          type: 'shelley',
        },
        path: "m/1852'/1815'/0'/0/0",
      },
      {
        address:
          'addr1qxnthyxq8x9lv95h74k5av3sy3yzljr56ttxu4lggv8qstv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us8mueja',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/1",
      },
      {
        address:
          'addr1q8qpqk43plruvyhz7ngsh508ensd2qq3xps6w69fsnfv0ly9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uszr3th7',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/10",
      },
      {
        address:
          'addr1qyc70ljp63ngqjhfhkzacwm75kux6acdtscceavmx5sr26v9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usv7wzsv',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/11",
      },
      {
        address:
          'addr1qxpxdm5ca4s6ak9ntc6gp5qeuk2rd6r32969zxzpdfh0crv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us2sdsws',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/12",
      },
      {
        address:
          'addr1q9ws2hpvk37ugm373f2vefsmhpfdklhry37kwf95q9xaqa59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usj0d884',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/13",
      },
      {
        address:
          'addr1q8qgdgrsdaqexce6ns9d3ymeja77kjddc3nw2ptquah32wv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us8rsrd9',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/14",
      },
      {
        address:
          'addr1q8gcnmrvkr6eazepsguvpywhxa36q90fgkkm7mnncuth6ay9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usjttxqj',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/15",
      },
      {
        address:
          'addr1q8lnd3mzs4xjezlva3c30ymka255llwsvlm756g3pgtfd4u9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us493kr8',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/16",
      },
      {
        address:
          'addr1qyydkh0p3xqnssn90sld9dn76cfk62wppcetcexpe87t4059ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usd3xus2',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/17",
      },
      {
        address:
          'addr1q9fy9twcg525fx7se0gl0mg5gl34eazdcq5m0tfmv9764ky9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usqtwn69',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/18",
      },
      {
        address:
          'addr1qxg6n3ysvvnkw7pfmf3849s0z2msephfnaaa7d0lxcdkhx59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usrx9e4q',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/19",
      },
      {
        address:
          'addr1qyqe0pmj2wcz3x6ref4855wunf26fc4vx84tdxluxcu09459ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ustfft9k',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/2",
      },
      {
        address:
          'addr1qx2tpuxgl2g9ang3e52j2eawryuradd6jf0thq9garl2utu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usc8xjap',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/20",
      },
      {
        address:
          'addr1q824npc0ccxsgch6gkr6s0353j5p3m2g7yysaeeyxed8h9u9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usawvdyc',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/21",
      },
      {
        address:
          'addr1q8aamuge9xjphhuq9xc03fhytlvfrv2wx72q2tclly0gv959ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uset4dx7',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/22",
      },
      {
        address:
          'addr1q9rh4vzkmny37xu3x9gs95w830pqttjnw8wdeaw2054l3p59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ushwgqew',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/23",
      },
      {
        address:
          'addr1q9m7mejkyx4naddrvz9av2qh2taunvkj5vef2sugpn0cajv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us5rxgzf',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/24",
      },
      {
        address:
          'addr1q9zhhmg5tfy7280d64j9t4ccdm5uak87c58lhzxneedawp59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usscyxwv',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/25",
      },
      {
        address:
          'addr1q8t4t5jy6xxzhthfzx5rssp6n0jjexse9k2ln2rgqqfpagu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us6rmren',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/26",
      },
      {
        address:
          'addr1qx5wk087juv39mtlwd9agsnj9p0xzfk67z3ksc65x3c5x6v9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usx9wmdr',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/27",
      },
      {
        address:
          'addr1qxmjre5ghutjjvksf7ryc6ywnqwpndvuvn9qu3h2dj0nuzy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usg9y46y',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/28",
      },
      {
        address:
          'addr1qxctf80kem8r0ra6z2e0w8sferlprrvdpvq9e2p35aj06uu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usd544wm',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/29",
      },
      {
        address:
          'addr1qxp7mkumqsl4xpxlp7sz7jv6mwc90m4scwz5hg995m24ey59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uscpt2n8',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/3",
      },
      {
        address:
          'addr1q8p5w5tpkjyc43rr5xc4mtax33vr8lzk6g4s2fd7qaq5h8v9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usy6f404',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/30",
      },
      {
        address:
          'addr1q8e0py2mw0jljlt5yhl2p0ufq3ulpguvul2jyfgqfjzeqyu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uswd46tz',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/31",
      },
      {
        address:
          'addr1q936v8afgffma6fpjx0dm59ut5ata2n9xr99hyn7flta5wu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uskhqjgu',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/32",
      },
      {
        address:
          'addr1qxcef9zd0g7nt460acre7tamrdzg5d9emxl6nmnc4axfpry9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uspzd8m0',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/33",
      },
      {
        address:
          'addr1q85hxavv93agukheqqensqs8d4c4fewxew8gg7hq6nxc2x59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ussyjslu',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/34",
      },
      {
        address:
          'addr1qxmjf00sy32nh7w9fp58l22wxtk58pkw6cuv5992zh0vadu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ush57qql',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/35",
      },
      {
        address:
          'addr1q8asm80f63fd37lhk7vwf69acmmv90aj3alkcdr4ctgz9x59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uswydst8',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/36",
      },
      {
        address:
          'addr1q98qtce077h0kkgvy2pn8rf7r6v2u8qg6538afpzgtny2h59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usqutq9d',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/37",
      },
      {
        address:
          'addr1q9tddzshduj454j3z7q49ydu8g7h79ml09tg4n8dtffxh859ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usvhyxc2',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/38",
      },
      {
        address:
          'addr1qykydsesm3kn78n4hj2wphfmkk3zeaf2fdaklkqu30k6jcy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usp904z3',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/39",
      },
      {
        address:
          'addr1qx0n2np4cxx2wx2qdt0pl9n4zctj2e5j7gz70mlmkk88u859ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us3mtqqn',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/4",
      },
      {
        address:
          'addr1qxdr0k9nvqlycwkwtzcrtqc2v7zapncq6zhxsgsppcyvhf59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ushm8zc9',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/5",
      },
      {
        address:
          'addr1q8agxy2xc2rwt0chvprvx7nxeh5tst3ekf24kggs9xuq7dv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uslpypuu',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/6",
      },
      {
        address:
          'addr1q9g27g8gq47aggv90ew8cdh2xnxp909pf5pqvvaun7t2pty9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uspjtj9g',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/7",
      },
      {
        address:
          'addr1qx7cn3u8vd6fc2g3t4k7ntqap7mkw5httgdlq9aa06d2uey9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uswmwl2n',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/8",
      },
      {
        address:
          'addr1qx2j2tsmqasn66nkqqcfvm328f7sxnujqklkx5uq0l224fu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us63u6rn',
        data: 'empty',
        path: "m/1852'/1815'/0'/0/9",
      },
    ],
  },
  {
    publicKey:
      '6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2',
    type: 1,
    response: [
      {
        address:
          'addr1q9f9jr6e48u63ym65esmrwgle84zspnrsew37gwe88e0zfy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usxwwdwc',
        data: {
          address:
            'addr1q9f9jr6e48u63ym65esmrwgle84zspnrsew37gwe88e0zfy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usxwwdwc',
          amount: [
            {
              quantity: expect.any(String),
              unit: 'lovelace',
            },
          ],
          script: false,
          stake_address:
            'stake1uxzutrtmxwv2rf2j3hdpps66ch0jydmkr58vwgnetddcdwg32u4rc',
          type: 'shelley',
        },
        path: "m/1852'/1815'/0'/1/0",
      },
      {
        address:
          'addr1q99hnk2vnx708l86mujpfs9end50em9s95grhe3v4933m259ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usr7qlze',
        data: {
          address:
            'addr1q99hnk2vnx708l86mujpfs9end50em9s95grhe3v4933m259ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usr7qlze',
          amount: [
            {
              quantity: expect.any(String),
              unit: 'lovelace',
            },
          ],
          script: false,
          stake_address:
            'stake1uxzutrtmxwv2rf2j3hdpps66ch0jydmkr58vwgnetddcdwg32u4rc',
          type: 'shelley',
        },
        path: "m/1852'/1815'/0'/1/1",
      },
      {
        address:
          'addr1q8dmmr9uk0x36l2z9rfz7cwl57vw5qnq6h3aw8ksqffg0y59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usdpp54s',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/10",
      },
      {
        address:
          'addr1q8meujxhwrf2st676aa72jj2hgqwltnzpgq7n08vp7r2ks59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usw4xjuc',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/11",
      },
      {
        address:
          'addr1q88yq8arujn83lqpscvu5qj7kpmzrf9yr9sjq83h3uxfwlu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ushak94w',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/12",
      },
      {
        address:
          'addr1q9u3a0kkp0yajgphmcxa6hjps4hl4ayrzkgf5qwygjq8xhu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usmuh9ak',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/13",
      },
      {
        address:
          'addr1qyhwcahfutjf4h3lmtul9n8uksehrcj99pljhus34ds08ty9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usm2hmxc',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/14",
      },
      {
        address:
          'addr1qy622qhrt8aphmkqmk5t0zc9ndmkausfyxje6slm2lldksu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us0exjnk',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/15",
      },
      {
        address:
          'addr1q8xfmc6kmsljc7yrqp6d68z83c05867fhtlzuvsmhc4gugu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us5eaxtm',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/16",
      },
      {
        address:
          'addr1qy23mzcvssn3maqnkr9wj9tg73lq662du0xmcdwgcgea85y9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ush6f3wj',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/17",
      },
      {
        address:
          'addr1q89kdxufzakwvy0v2p3dra4xnsj0nay4kg5sjtvy7n8z5j59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us5mm6c9',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/18",
      },
      {
        address:
          'addr1qysca0g3f259gghfq3etwvhtygylqy9qtntdhfxqhnkzmhy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usselsgq',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/19",
      },
      {
        address:
          'addr1qxv0q8r02xlrea3nr3p0zthpg5slg2sk263rszm6cmgnx259ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usyu5v2j',
        data: {
          address:
            'addr1qxv0q8r02xlrea3nr3p0zthpg5slg2sk263rszm6cmgnx259ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usyu5v2j',
          amount: [
            {
              quantity: '0',
              unit: 'lovelace',
            },
          ],
          script: false,
          stake_address:
            'stake1uxzutrtmxwv2rf2j3hdpps66ch0jydmkr58vwgnetddcdwg32u4rc',
          type: 'shelley',
        },
        path: "m/1852'/1815'/0'/1/2",
      },
      {
        address:
          'addr1qxgkaygw54uf09xfdfjadcm25plaz0qlsdw9mcnyeurkwg59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usv59zgf',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/20",
      },
      {
        address:
          'addr1q9lmlgh2rcyug3cnyyevwwqte6a2n3kf9gqvl444n3sjzfv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uswryfng',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/21",
      },
      {
        address:
          'addr1q9k7cf53rxcuvxfs7snlh6njhuj0ulfdy8ndqnq49frs2ry9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usgn2ssl',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/22",
      },
      {
        address:
          'addr1qxvpm4mvh57z43wwddh4hxqsvdexyj6h53s5s6grtn6435u9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us78vk9w',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/23",
      },
      {
        address:
          'addr1qxz4pcj2wlajvrwpnu5c4xrcr4ka8zf5ldpl567g9m5vt8u9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usqll5he',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/24",
      },
      {
        address:
          'addr1qxhnkv04juuax667xfsggzghga9par078s0e7vuyf9p53nu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us8zagkp',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/25",
      },
      {
        address:
          'addr1q8a4pcnct0vffucjc4dyalllhmveq68pv4l2l3hcy2k7qyv9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usah68dy',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/26",
      },
      {
        address:
          'addr1q92g0lssmqzdg5qpmn3r7f7rujld5dqwkpt6qgtujxxms359ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uszl7av8',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/27",
      },
      {
        address:
          'addr1q9efyhghnu4seg3vs9gm49kqjkn0evrwud4jf7882gm7k7y9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usn6yr5r',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/28",
      },
      {
        address:
          'addr1qytw4mee2f39whsmpw2xg3alnkarmdukupkp4cpjgx5qkmy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us9e4ygv',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/29",
      },
      {
        address:
          'addr1q93el09nevlnzm2td5e3g508lv9axhn2xzxevc9m6khfqny9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usq4u26u',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/3",
      },
      {
        address:
          'addr1qxxgzx9mlu2gs0lht742mky08wa655sa63q84apw74wz8yy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us37kn60',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/30",
      },
      {
        address:
          'addr1q9j9z2h7ad89emy7s3gnxfsp6tevlv54czugcqugdekyrs59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us2p4qfc',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/31",
      },
      {
        address:
          'addr1q8z5d47apdty46gwaae4n56n4e9wct2q7gwjn0ly2rfch4u9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usne7uvm',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/32",
      },
      {
        address:
          'addr1qy2342nremaezp89snz2cjt8j632qgvj77r5aslqgk2xaw59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us2vr3fd',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/33",
      },
      {
        address:
          'addr1qyv2tcfazmv476hsx0cq3tuh5uzhfr7pm7q5sdq3x0yh3t59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6ush3tm95',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/34",
      },
      {
        address:
          'addr1q87xahl9atmp076lpshkn759nvh34r47tzfxnwnr36tr0t59ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usevj6wl',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/35",
      },
      {
        address:
          'addr1q9jehaw6hnnnsrhpppadsya2y9qyg278gscalfq7g7c4yxy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us7e8cld',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/36",
      },
      {
        address:
          'addr1qx5cfdwg35cngnrvvtgldg7wh3h05skjycr7asd5dfmmvpy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us6cnlc5',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/37",
      },
      {
        address:
          'addr1qxzh2euzftquyxetwtspn5pdy53ss90r66gdcnvcmrw9g459ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us87a206',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/38",
      },
      {
        address:
          'addr1qxrpxcrkjpgl6l4z09tgt2naawwe47wmm7kq8dh7jl2a32u9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uspt50cg',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/39",
      },
      {
        address:
          'addr1q8gs22r0m9se5zedcchgwu0udtakd9eh5m4fn54hte6wu0y9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us7v0s48',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/4",
      },
      {
        address:
          'addr1q99ts5lj5wnx4lxh6varz0z2j705zwq8tpdwscjsqx9yvtu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6uskfn7lw',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/5",
      },
      {
        address:
          'addr1qxl0h2f6v4fdsd97qdc44fuzwy045u52y73vzxh6tz94x8y9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usggqeu7',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/6",
      },
      {
        address:
          'addr1q8rg26gtcv37mch828zsakry37e73uh9ghmfkpwugn9trau9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us5lecdu',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/7",
      },
      {
        address:
          'addr1qywhamzedt87fw8wgj899mmttsha38hf2s80jfg5ge009gu9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6usm38r9f',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/8",
      },
      {
        address:
          'addr1q8q7000x9y0zhm39a2ctn6ggng3mna888d76kp6aeszw3dy9ckxhkvuc5xj49rw6zrp443wlygmhv8gwcu38jk6ms6us4azjjp',
        data: 'empty',
        path: "m/1852'/1815'/0'/1/9",
      },
    ],
  },
] as const;
