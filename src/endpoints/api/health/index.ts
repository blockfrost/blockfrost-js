import { handleError } from '../../../utils';
import { BlockFrostAPI } from '../../../index';

export function health(this: BlockFrostAPI): Promise<{ is_healthy: boolean }> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/health`)
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
    this.axiosInstance(`${this.apiUrl}/health/clock`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
