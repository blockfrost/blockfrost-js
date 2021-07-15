import { handleError } from '../../../utils';
import { BlockFrostAPI } from '../../../index';

export async function root(
  this: BlockFrostAPI,
): Promise<{ url: string; version: string }> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
