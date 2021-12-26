import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';
import { components } from '../../../types/OpenApi';

/**
 * network - Obtain network information.
 *
 * @returns detailed network information.
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
