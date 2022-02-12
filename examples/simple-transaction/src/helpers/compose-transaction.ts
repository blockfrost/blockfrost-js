import * as CardanoWasm from '@emurgo/cardano-serialization-lib-nodejs';
import { sortUtxos } from './utxo';
import { UTXO } from '../types';

export const CARDANO_PARAMS = {
  COINS_PER_UTXO_WORD: '34482',
  MAX_TX_SIZE: 16_384,
  MAX_VALUE_SIZE: 5000,
  MIN_UTXO_VALUE: '1000000',
} as const;

export const composeTransaction = (
  address: string,
  outputAddress: string,
  outputAmount: string,
  utxos: UTXO,
  currentSlot: number,
): {
  txHash: string;
  txBody: CardanoWasm.TransactionBody;
} => {
  if (!utxos || utxos.length === 0) {
    throw new Error(`No utxo on address ${address}`);
  }

  const txBuilder = CardanoWasm.TransactionBuilder.new(
    CardanoWasm.LinearFee.new(
      CardanoWasm.BigNum.from_str('44'),
      CardanoWasm.BigNum.from_str('155381'),
    ),
    CardanoWasm.BigNum.from_str(CARDANO_PARAMS.MIN_UTXO_VALUE),
    // pool deposit
    CardanoWasm.BigNum.from_str('500000000'),
    // key deposit
    CardanoWasm.BigNum.from_str('2000000'),
    CARDANO_PARAMS.MAX_VALUE_SIZE,
    CARDANO_PARAMS.MAX_TX_SIZE,
  );

  const outputAddr = CardanoWasm.Address.from_bech32(outputAddress);
  const changeAddr = CardanoWasm.Address.from_bech32(address);

  // Set TTL to +2h from currentSlot
  // If the transaction is not included in a block before that slot it will be cancelled.
  const ttl = currentSlot + 7200;
  txBuilder.set_ttl(ttl);

  // Add output to the tx
  txBuilder.add_output(
    CardanoWasm.TransactionOutput.new(
      outputAddr,
      CardanoWasm.Value.new(CardanoWasm.BigNum.from_str(outputAmount)),
    ),
  );

  // Filter out multi asset utxo to keep this simple
  const lovelaceUtxos = utxos.filter(
    u => !u.amount.find(a => a.unit !== 'lovelace'),
  );

  // Sort from largest to smallest
  const sortedUtxos = sortUtxos(lovelaceUtxos);
  let totalUtxoAda = CardanoWasm.BigNum.from_str('0');

  // Prepare TransactionUnspentOutputs (inputs)
  const usedUtxos = [];
  for (const utxo of sortedUtxos) {
    const amount = utxo.amount.find(a => a.unit === 'lovelace')?.quantity;
    if (!amount) continue;

    // Create Input from fetched utxo
    const input = CardanoWasm.TransactionInput.new(
      CardanoWasm.TransactionHash.from_bytes(Buffer.from(utxo.tx_hash, 'hex')),
      utxo.output_index,
    );

    const inputValue = CardanoWasm.Value.new(
      CardanoWasm.BigNum.from_str(amount.toString()),
    );

    // Add the utxo to the transaction
    txBuilder.add_input(outputAddr, input, inputValue);

    // Keep track of used utxo
    usedUtxos.push(utxo);

    // Set required fee
    const fee = txBuilder.min_fee();

    // add utxo amount to total
    totalUtxoAda = totalUtxoAda.checked_add(
      CardanoWasm.BigNum.from_str(amount.toString()),
    );

    if (
      totalUtxoAda.compare(
        CardanoWasm.BigNum.from_str(outputAmount).checked_add(fee),
      ) >= 0
    ) {
      // break the loop since we have enough ADA to cover the output + fee
      break;
    }
  }

  // Adds a change output if there are more ADA in utxo than we need for the transaction,
  // these coins will be returned to change address
  txBuilder.add_change_if_needed(changeAddr);

  // Build transaction
  const txBody = txBuilder.build();
  const txHash = Buffer.from(
    CardanoWasm.hash_transaction(txBody).to_bytes(),
  ).toString('hex');

  return {
    txHash,
    txBody,
  };
};
