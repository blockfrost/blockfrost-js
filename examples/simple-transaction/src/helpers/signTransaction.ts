import * as CardanoWasm from '@emurgo/cardano-serialization-lib-nodejs';

export const signTransaction = (
  txBody: CardanoWasm.TransactionBody,
  signKey: CardanoWasm.PrivateKey,
): CardanoWasm.Transaction => {
  const txHash = CardanoWasm.hash_transaction(txBody);
  const witnesses = CardanoWasm.TransactionWitnessSet.new();
  const vkeyWitnesses = CardanoWasm.Vkeywitnesses.new();
  vkeyWitnesses.add(CardanoWasm.make_vkey_witness(txHash, signKey));

  witnesses.set_vkeys(vkeyWitnesses);

  const transaction = CardanoWasm.Transaction.new(txBody, witnesses);

  return transaction;
};
