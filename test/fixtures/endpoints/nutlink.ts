import { BlockFrostAPI } from '../../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) =>
      SDK.nutlinkAddress(
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
      ),
    response: {
      address:
        'addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t',
      metadata_url: 'https://nut.link/metadata.json',
      metadata_hash:
        '9586368825d39caf48bc64b2ca8a8db7bffa9227a5dad8464ce499be4516498f',
      metadata: {},
    },
  },
] as const;
