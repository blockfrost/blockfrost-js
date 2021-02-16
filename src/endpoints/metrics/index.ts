import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function metrics(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/metrics`, {
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

export function metricsEndpoints(
  apiUrl: string,
  projectId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/metrics/endpoints`, {
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
