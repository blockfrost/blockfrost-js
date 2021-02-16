import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import { components } from 'types/OpenApi';
import { BlockFrostAPI } from '../..';

export async function epochs(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsLatest(
  this: BlockFrostAPI,
): Promise<components['schemas']['epoch_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/latest`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsNext(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_content_array']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/next`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsPrevious(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_content_array']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/previous`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsStakes(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_stake_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/stakes`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsStakesByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
): Promise<components['schemas']['epoch_block_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/stakes/${poolId}`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsBlocks(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_block_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/blocks`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsBlocksByPoolId(
  this: BlockFrostAPI,
  number: number,
  poolId: string,
): Promise<components['schemas']['epoch_stake_pool_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/blocks/${poolId}`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function epochsParameters(
  this: BlockFrostAPI,
  number: number,
): Promise<components['schemas']['epoch_param_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/epochs/${number}/parameters`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
