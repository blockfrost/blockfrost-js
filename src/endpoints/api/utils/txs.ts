import { paths } from '@blockfrost/openapi';
import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';

export async function utilsTxsEvaluate(
  this: BlockFrostAPI,
  transaction: Uint8Array | string,
): Promise<paths['/utils/txs/evaluate']['post']['responses']['200']> {
  let tx: Buffer;

  if (typeof transaction === 'string') {
    tx = Buffer.from(transaction, 'hex');
  } else {
    tx = Buffer.from(transaction);
  }

  return new Promise((resolve, reject) => {
    this.instance
      .post<paths['/utils/txs/evaluate']['post']['responses']['200']>(
        `utils/txs/evaluate`,
        {
          body: tx,
          headers: { 'Content-type': 'application/cbor' },
        },
      )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
