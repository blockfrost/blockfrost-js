export default {
  root: {
    url: 'https://blockfrost.io/',
    version: '0.1.0',
  },
  health: {
    is_healthy: true,
  },
  healthClock: {
    server_time: 1603400958947,
  },
  network: {
    supply: {
      max: '45000000000000000',
      total: '35175678980413095',
      circulating: '34421466059446983',
      locked: '123379533215720',
      treasury: '1068123742127903',
      reserves: '9824321019586905',
    },
    stake: {
      live: '25111069252731874',
      active: '25197315592272395',
    },
  },
  networkEras: [
    {
      start: {
        time: 0,
        slot: 0,
        epoch: 0,
      },
      end: {
        time: 0,
        slot: 0,
        epoch: 0,
      },
      parameters: {
        epoch_length: 4320,
        slot_length: 20,
        safe_zone: 864,
      },
    },
    {
      start: {
        time: 0,
        slot: 0,
        epoch: 0,
      },
      end: {
        time: 0,
        slot: 0,
        epoch: 0,
      },
      parameters: {
        epoch_length: 86400,
        slot_length: 1,
        safe_zone: 25920,
      },
    },
  ],
  metrics: [{ a: 'a' }],
  metricsEndpoints: [{ a: 'a' }],
  ledger: {
    active_slots_coefficient: 0.05,
    update_quorum: 5,
    max_lovelace_supply: '45000000000000000',
    network_magic: 764824073,
    epoch_length: 432000,
    system_start: 1506203091,
    slots_per_kes_period: 129600,
    slot_length: 1,
    max_kes_evolutions: 62,
    security_param: 2160,
  },
};
