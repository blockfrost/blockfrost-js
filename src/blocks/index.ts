import axios from 'axios';
import config from 'config';

export function blocks(hashOrNumber: string | number): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/block/${hashOrNumber}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export const blocksLatest = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/block/latest`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(reject);
  });
};

export function blocksNext(hashOrNumber: string | number): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/block/${hashOrNumber}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function blocksPrevious(hashOrNumber: string | number): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/block/${hashOrNumber}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}
