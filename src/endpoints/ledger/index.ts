import { handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export function genesis(
  this: BlockFrostAPI,
): Promise<components['schemas']['genesis_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/genesis`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
