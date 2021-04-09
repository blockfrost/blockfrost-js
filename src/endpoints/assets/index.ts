import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export async function assets(
  this: BlockFrostAPI,
): Promise<components['schemas']['assets']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/assets/`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsById(
  this: BlockFrostAPI,
  asset: string,
): Promise<components['schemas']['asset']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/assets/${asset}`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsHistory(
  this: BlockFrostAPI,
  asset: string,
): Promise<components['schemas']['asset_history']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/assets/${asset}/history`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsTxs(
  this: BlockFrostAPI,
  asset: string,
): Promise<components['schemas']['asset_txs']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/assets/${asset}/txs`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsAddresses(
  this: BlockFrostAPI,
  asset: string,
): Promise<components['schemas']['asset_addresses']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/assets/${asset}/addresses`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export async function assetsPolicyById(
  this: BlockFrostAPI,
  policy: string,
): Promise<components['schemas']['asset_addresses']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/assets/policy/${policy}`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}
