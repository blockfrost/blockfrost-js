import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import * as Responses from 'types/Responses';

export const accounts = (
  apiUrl: string,
  projectId: string,
  stakeAddress: string,
): Promise<any> => {
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
};

export const accountsRewards = (
  apiUrl: string,
  projectId: string,
  stakeAddress: string,
): Promise<any> => {
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
};

export const accountsDelegations = (
  apiUrl: string,
  projectId: string,
  stakeAddress: string,
): Promise<any> => {
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
};

export const accountsRegistrations = (
  apiUrl: string,
  projectId: string,
  stakeAddress: string,
): Promise<any> => {
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
};
