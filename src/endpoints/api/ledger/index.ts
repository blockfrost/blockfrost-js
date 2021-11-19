import { handleError } from '../../../utils/errors';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';

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
