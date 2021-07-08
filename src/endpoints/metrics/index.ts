import { handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export async function metrics(
  this: BlockFrostAPI,
): Promise<components['schemas']['metrics']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/metrics`)
      .then(resp => {
        resolve(resp.data);
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
    this.axiosInstance(`${this.apiUrl}/metrics/endpoints`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
