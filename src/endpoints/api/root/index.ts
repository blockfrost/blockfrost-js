import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains backend version number.
 *
 * @returns Backend version in a format `{ url: string; version: string }`
 *
 */
export async function root(
  this: BlockFrostAPI,
): Promise<{ url: string; version: string }> {
  return new Promise((resolve, reject) => {
    this.instance<{ url: string; version: string }>(``)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
