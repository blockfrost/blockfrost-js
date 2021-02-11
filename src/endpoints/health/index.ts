import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function health(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/health`, {
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

export function healthClock(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/health/clock`, {
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
