import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function txs(
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export function txsUtxos(
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/utxos`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export function txsStakes(
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/stakes`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export function txsDelegations(
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/delegations`, {
        headers: getHeaders(projectId),
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
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/withdrawals`, {
        headers: getHeaders(projectId),
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
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/pool_updates`, {
        headers: getHeaders(projectId),
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
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/pool_retires`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export function txxMetadata(
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/metadata`, {
        headers: getHeaders(projectId),
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
  apiUrl: string,
  projectId: string,
  hash: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/txs/${hash}/metadata/cbor`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
