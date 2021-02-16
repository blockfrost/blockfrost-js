import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export async function txs(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}`, {
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

export async function txsUtxos(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_utxo']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/utxos`, {
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

export async function txsStakes(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_stake_addr']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/stakes`, {
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

export async function txsDelegations(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_delegations']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/delegations`, {
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

export function txsWithdrawals(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_withdrawals']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/withdrawals`, {
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

export function txsPoolUpdates(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_pool_certs']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/pool_updates`, {
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

export function txsPoolRetires(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_pool_retires']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/pool_retires`, {
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

export function txsMetadata(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_metadata_label_json']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/metadata`, {
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

export function txsMetadataCbor(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_metadata_cbor']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/txs/${hash}/metadata/cbor`, {
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
