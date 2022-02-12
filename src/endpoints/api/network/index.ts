import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';
import { components } from '../../../types/OpenApi';

export async function network(
  this: BlockFrostAPI,
): Promise<components['schemas']['network']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['network']>(`network`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}
