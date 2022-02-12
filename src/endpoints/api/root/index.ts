import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';

export async function root(
  this: BlockFrostAPI,
): Promise<{ url: string; version: string }> {
  return new Promise((resolve, reject) => {
    this.instance<{ url: string; version: string }>(``)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}
