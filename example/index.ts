import { BlockFrostAPI } from '../src/index';
async function run() {
  const API = new BlockFrostAPI({
    projectId: 'v4yhZTgZRjJJbLAPMOmMGtZFg3MGIWiT', // see: https://blockfrost.io
  });

  try {
    const response = await API.addressesUtxosAll(
      'addr1qxszx202k6d9hxdfgufta6x6grr9czk4m8kvmgdrg0arut8e32c7akdgzud56kzamm99gtfpq2y3qyfzjj9hrwr0ka4q04xdyq',
    );
    console.log(response);
  } catch (err) {
    console.log('error', err.data);
  }
}

run();
