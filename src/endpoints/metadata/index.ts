import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function metadataTxsLabels(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/metadata/txs/labels`, {
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

export function metadataTxsLabel(apiUrl: string, projectId: string, label: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/metadata/txs/labels/${label}`, {
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

export function metadataTxsLabelCbor(apiUrl: string, projectId: string, label: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/metadata/txs/labels/${label}/cbor`, {
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
