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
export async function health(
  this: BlockFrostAPI,
): Promise<{ is_healthy: boolean }> {
  try {
    const res = await this.instance<{ is_healthy: boolean }>(`health`);
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains the current UNIX time. Your application might use this to verify if the client clock is not out of sync.
 * @see {@link https://docs.blockfrost.io/#tag/Health/paths/~1health~1clock/get | API docs for Current backend time}
 *
 * @returns Unix time in the format `{server_time: number}`
 *
 */
export async function healthClock(
  this: BlockFrostAPI,
): Promise<{ server_time: number }> {
  try {
    const res = await this.instance<{ server_time: number }>(`health/clock`);
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}
