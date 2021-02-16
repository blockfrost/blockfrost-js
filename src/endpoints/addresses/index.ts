import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function addresses(
  apiUrl: string,
  projectId: string,
  address: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/addresses/${address}`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export function addressesTotal(
  apiUrl: string,
  projectId: string,
  address: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/addresses/${address}/total`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export function addressesTxs(
  apiUrl: string,
  projectId: string,
  address: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/addresses/${address}/txs`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}

export function addressesUtxos(
  apiUrl: string,
  projectId: string,
  address: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/addresses/${address}/utxos`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(handleError(err)));
  });
}
