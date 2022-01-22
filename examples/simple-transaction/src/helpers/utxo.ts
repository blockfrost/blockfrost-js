import * as CardanoWasm from '@emurgo/cardano-serialization-lib-nodejs';
import { UTXO } from '../types';

export const sortUtxos = (utxos: UTXO): UTXO => {
  return utxos.sort((a, b) => {
    const amountA = CardanoWasm.BigNum.from_str(
      a.amount.find(a => a.unit === 'lovelace')?.quantity ?? '0',
    );
    const amountB = CardanoWasm.BigNum.from_str(
      b.amount.find(a => a.unit === 'lovelace')?.quantity ?? '0',
    );
    return amountA.compare(amountB);
  });
};
