import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';
import { components } from '@blockfrost/openapi';

/**
 * Obtains detailed network information.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Network/paths/~1network/get | API docs for Network information}
 *
 * @returns Detailed network information.
 *
 */
export async function network(
  this: BlockFrostAPI,
): Promise<components['schemas']['network']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['network']>(`network`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
