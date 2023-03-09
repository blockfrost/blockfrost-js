import { handleError } from '../../../utils/errors';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains the information about blockchain genesis.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Ledger/paths/~1genesis/get| API docs for Blockchain genesis}
 *
 * @returns Genesis parameters
 *
 */
export function genesis(
  this: BlockFrostAPI,
): Promise<components['schemas']['genesis_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['genesis_content']>(`genesis`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
