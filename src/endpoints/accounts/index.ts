import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import { components } from 'types/OpenApi';
import { BlockFrostAPI } from '../../';

export async function accounts(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/accounts/${stakeAddress}`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRewards(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_reward_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/accounts/${stakeAddress}/rewards`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsDelegations(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_delegation_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/accounts/${stakeAddress}/delegations`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function accountsRegistrations(
  this: BlockFrostAPI,
  stakeAddress: string,
): Promise<components['schemas']['account_registration_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/accounts/${stakeAddress}/registrations`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}
