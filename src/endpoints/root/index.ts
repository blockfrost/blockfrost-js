import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { BlockFrostAPI } from '../../index';

export async function root(
  this: BlockFrostAPI,
): Promise<{ url: string; version: number }> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
