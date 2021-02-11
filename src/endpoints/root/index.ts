import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function version(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
