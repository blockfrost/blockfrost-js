import { handleError } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';

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
