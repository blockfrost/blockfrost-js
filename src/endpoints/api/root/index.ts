import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';

/**
 * root - Root endpoint has no other function than to point end users to documentation.
 *
 * @returns url and version of blockfrost API
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
