import { handleError } from '../../../utils/errors';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains history of your Blockfrost usage metrics in the past 30 days.
 * @see {@link https://docs.blockfrost.io/#tag/Metrics/paths/~1metrics/get | API docs for Blockfrost usage metrics}
 *
 * @returns Usage metrics for the last 30 days
 *
 */
export async function metrics(
  this: BlockFrostAPI,
): Promise<components['schemas']['metrics']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['metrics']>(`metrics`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains history of your Blockfrost usage metrics, grouped per endpoint, in the past 30 days.
 * @see {@link https://docs.blockfrost.io/#tag/Metrics/paths/~1metrics~1endpoints/get | API docs for Blockfrost endpoint usage metrics}
 *
 * @returns Usage metrics for the last 30 days
 *
 */
export async function metricsEndpoints(
  this: BlockFrostAPI,
): Promise<components['schemas']['metrics']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['metrics']>(`metrics/endpoints`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
