import { handleError } from '../../../utils/errors';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';

/**
 * genesis - History of your Blockfrost usage metrics in the past 30 days.
 *
 * @returns The information about blockchain genesis.
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
