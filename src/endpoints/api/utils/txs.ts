import { paths } from '@blockfrost/openapi';
import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';
import { TxIn, TxOut } from '../../../types/api/utils/txs';
import JSONBig from 'json-bigint';

const betterJSON = JSONBig({ useNativeBigInt: true });

/**
 * Submits a transaction to evaluate how much execution units it requires.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Utilities/paths/~1utils~1txs~1evaluate/post | API docs for Submit a transaction for execution units evaluation}
 *
 * @param transaction - Transaction bytes as Uint8Array or hex-encoded string
 * @returns result of Ogmios EvaluateTx @see {@link https://ogmios.dev/mini-protocols/local-tx-submission/#evaluatetx}
 *
 */
export async function utilsTxsEvaluate(
  this: BlockFrostAPI,
  transaction: Uint8Array | string,
): Promise<paths['/utils/txs/evaluate']['post']['responses']['200']> {
  let tx: string;

  if (typeof transaction === 'string') {
    tx = transaction;
  } else {
    tx = Buffer.from(transaction).toString('hex');
  }

  try {
    const res = await this.instance.post<
      paths['/utils/txs/evaluate']['post']['responses']['200']
    >(`utils/txs/evaluate`, {
      body: tx,
      headers: { 'Content-type': 'application/cbor' },
    });
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Submits a transaction CBOR and additional utxo set to evaluate how much execution units it requires.
 * @see {@link https://docs.blockfrost.io//#tag/Cardano-Utilities/paths/~1utils~1txs~1evaluate~1utxos/post | API docs for Submit a transaction for execution units evaluation (additional UTXO set)}
 *
 * @param transaction - Transaction bytes as Uint8Array or hex-encoded string
 * @param additionalUtxoSet - Additional UTXO as an array of tuples [TxIn, TxOut]. See https://ogmios.dev/mini-protocols/local-tx-submission/#additional-utxo-set.
 * @returns result of Ogmios EvaluateTx @see {@link https://ogmios.dev/mini-protocols/local-tx-submission/#evaluatetx}
 *
 */
export async function utilsTxsEvaluateUtxos(
  this: BlockFrostAPI,
  transaction: string, // base16 or base64
  // Exported types aren't strict enough
  // additionalUtxoSet: paths['/utils/txs/evaluate/utxos']['post']['requestBody']['content']['application/json'],
  additionalUtxoSet: [TxIn, TxOut][],
): Promise<paths['/utils/txs/evaluate']['post']['responses']['200']> {
  try {
    const res = await this.instance.post<
      paths['/utils/txs/evaluate/utxos']['post']['responses']['200']
    >(`utils/txs/evaluate/utxos`, {
      body: betterJSON.stringify({
        cbor: transaction,
        additionalUtxoSet,
      }),
      headers: { 'Content-type': 'application/json' },
    });
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}
