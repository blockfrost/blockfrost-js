import axios from 'axios';
import { getHeaders } from 'utils';

export function accounts(apiUrl: string, projectId: string, stakeAddress: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/accounts/${stakeAddress}`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}
