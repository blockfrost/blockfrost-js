import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import { HashOrNumber } from 'types';

export function blocks(apiUrl: string, projectId: string, hashOrNumber: HashOrNumber): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/blocks/${hashOrNumber}`, {
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

export const blocksLatest = (apiUrl: string, projectId: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/blocks/latest`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
};

export const blocksNext = (apiUrl: string, projectId: string, hashOrNumber: HashOrNumber): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/blocks/${hashOrNumber}/next`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
};

export const blocksPrevious = (apiUrl: string, projectId: string, hashOrNumber: HashOrNumber): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/blocks/${hashOrNumber}/previous`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
};

export const blocksTxs = (apiUrl: string, projectId: string, hashOrNumber: HashOrNumber): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/blocks/${hashOrNumber}/txs`, {
        headers: getHeaders(projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
};
