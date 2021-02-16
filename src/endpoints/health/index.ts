import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import { BlockFrostAPI } from '../..';

export function health(this: BlockFrostAPI): Promise<{ isHealthy: boolean }> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/health`, {
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

export function healthClock(
  this: BlockFrostAPI,
): Promise<{ server_time: number }> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/health/clock`, {
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
