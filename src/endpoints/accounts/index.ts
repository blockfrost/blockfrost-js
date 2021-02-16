import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import { components } from 'types/OpenApi';

export const accounts = (
  apiUrl: string,
  projectId: string,
  stakeAddress: string,
): Promise<components['schemas']['account_content']> => {
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
): Promise<components['schemas']['account_reward_content']> => {
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
): Promise<components['schemas']['account_delegation_content']> => {
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
): Promise<components['schemas']['account_registration_content']> => {
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
