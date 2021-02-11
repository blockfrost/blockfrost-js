import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function accounts(apiUrl: string, projectId: string, stakeAddress: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/accounts/${stakeAddress}`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export function accountsRewards(apiUrl: string, projectId: string, stakeAddress: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/accounts/${stakeAddress}/rewards`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export function accountsDelegations(apiUrl: string, projectId: string, stakeAddress: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/accounts/${stakeAddress}/delegations`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export function accountsRegistrations(apiUrl: string, projectId: string, stakeAddress: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/accounts/${stakeAddress}/registrations`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}
