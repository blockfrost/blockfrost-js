import { handleError } from '../../../utils';
import { BlockFrostAPI } from '../../../index';

export function health(this: BlockFrostAPI): Promise<{ is_healthy: boolean }> {
  return new Promise((resolve, reject) => {
    this.instance<{ is_healthy: boolean }>(`health`)
      .then(resp => {
        resolve(resp.body);
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
    this.instance<{ server_time: number }>(`health/clock`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
