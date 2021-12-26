import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';

/**
 * health - Return backend status as a boolean. Your application should handle situations when backend for the given chain is unavailable.
 *
 * @returns backend status as a boolean.
 */
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

/**
 * healthClock - This endpoint provides the current UNIX time. Your application might use this to verify if the client clock is not out of sync.
 *
 * @returns current UNIX time.
 */
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
