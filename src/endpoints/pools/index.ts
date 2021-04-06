import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export async function pools(
  this: BlockFrostAPI,
): Promise<components['schemas']['metrics_endpoints']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools`, {
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

export async function poolsRetired(
  this: BlockFrostAPI,
): Promise<components['schemas']['pool_list_retire']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/retired`, {
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

export async function poolsRetiring(
  this: BlockFrostAPI,
): Promise<components['schemas']['pool_list_retire']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/retiring`, {
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

export async function poolsById(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/${poolId}`, {
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

export async function poolsByIdHistory(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_history']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/${poolId}/history`, {
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

export async function poolMetadata(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_metadata']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/${poolId}/metadata`, {
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

export async function poolsByIdRelays(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_relays']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/${poolId}/relays`, {
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

export async function poolsByIdDelegators(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_delegators']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/${poolId}/delegators`, {
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

export async function poolsByIdBlocks(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_blocks']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/${poolId}/blocks`, {
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

export async function poolsByIdUpdates(
  this: BlockFrostAPI,
  poolId: string,
): Promise<components['schemas']['pool_updates']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/pools/${poolId}/updates`, {
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
