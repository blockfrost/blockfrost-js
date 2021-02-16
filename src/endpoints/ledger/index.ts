import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import { components } from 'types/OpenApi';
import { BlockFrostAPI } from '../..';

export function ledger(
  this: BlockFrostAPI,
): Promise<components['schemas']['genesis_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/genesis`, {
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
