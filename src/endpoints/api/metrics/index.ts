import { handleError } from '../../../utils/errors';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';

/**
 * metrics - History of your Blockfrost usage metrics in the past 30 days.
 *
 * @returns History of your usage metrics in the past 30 days.
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
 * metricsEndpoints - History of your Blockfrost usage metrics per endpoint in the past 30 days.
 *
 * @returns History of your usage metrics in the past 30 days per endpoint.
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
