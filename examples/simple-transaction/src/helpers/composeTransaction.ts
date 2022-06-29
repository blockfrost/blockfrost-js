import * as CardanoWasm from '@emurgo/cardano-serialization-lib-nodejs';
import { UTXO } from '../types';

export const CARDANO_PARAMS = {
  COINS_PER_UTXO_WORD: '34482',
  MAX_TX_SIZE: 16384,
  MAX_VALUE_SIZE: 5000,
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
    throw Error(`No utxo on address ${address}`);
  }

  const txBuilder = CardanoWasm.TransactionBuilder.new(
    CardanoWasm.TransactionBuilderConfigBuilder.new()
      .fee_algo(
        CardanoWasm.LinearFee.new(
          CardanoWasm.BigNum.from_str('44'),
          CardanoWasm.BigNum.from_str('155381'),
        ),
      )
      .pool_deposit(CardanoWasm.BigNum.from_str('500000000'))
      .key_deposit(CardanoWasm.BigNum.from_str('2000000'))
      .coins_per_utxo_word(
        CardanoWasm.BigNum.from_str(CARDANO_PARAMS.COINS_PER_UTXO_WORD),
      )
      .max_value_size(CARDANO_PARAMS.MAX_VALUE_SIZE)
      .max_tx_size(CARDANO_PARAMS.MAX_TX_SIZE)
      .build(),
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
    (u: any) => !u.amount.find((a: any) => a.unit !== 'lovelace'),
  );

  // Create TransactionUnspentOutputs from utxos fetched from Blockfrost
  const unspentOutputs = CardanoWasm.TransactionUnspentOutputs.new();
  for (const utxo of lovelaceUtxos) {
    const amount = utxo.amount.find(
      (a: any) => a.unit === 'lovelace',
    )?.quantity;

    if (!amount) continue;

    const inputValue = CardanoWasm.Value.new(
      CardanoWasm.BigNum.from_str(amount.toString()),
    );

    const input = CardanoWasm.TransactionInput.new(
      CardanoWasm.TransactionHash.from_bytes(Buffer.from(utxo.tx_hash, 'hex')),
      utxo.output_index,
    );
    const output = CardanoWasm.TransactionOutput.new(changeAddr, inputValue);
    unspentOutputs.add(CardanoWasm.TransactionUnspentOutput.new(input, output));
  }

  txBuilder.add_inputs_from(
    unspentOutputs,
    CardanoWasm.CoinSelectionStrategyCIP2.LargestFirst,
  );

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
