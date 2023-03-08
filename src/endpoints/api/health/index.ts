import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains backend status
 * @remarks
 * Your application should handle situations when backend for the given chain is unavailable.
 * @see {@link https://docs.blockfrost.io/#tag/Health/paths/~1health/get | API docs for Backend health status}
 *
 * @returns Backend status in the format `{is_healthy: boolean}`
 *
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
 * Obtains the current UNIX time. Your application might use this to verify if the client clock is not out of sync.
 * @see {@link https://docs.blockfrost.io/#tag/Health/paths/~1health~1clock/get | API docs for Current backend time}
 *
 * @returns Unix time in the format `{server_time: number}`
 *
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
