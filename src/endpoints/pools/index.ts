import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function pools(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools`, {
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

export function poolsRetired(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/retired`, {
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

export function poolsRetiring(apiUrl: string, projectId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/retiring`, {
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

export function poolsById(
  apiUrl: string,
  projectId: string,
  poolId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/${poolId}`, {
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

export function poolsByIdHistory(
  apiUrl: string,
  projectId: string,
  poolId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/${poolId}/history`, {
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

export function poolMetadata(
  apiUrl: string,
  projectId: string,
  poolId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/${poolId}/metadata`, {
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

export function poolsByIdRelays(
  apiUrl: string,
  projectId: string,
  poolId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/${poolId}/relays`, {
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

export function poolsByIdDelegators(
  apiUrl: string,
  projectId: string,
  poolId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/${poolId}/delegators`, {
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

export function poolsByIdBlocks(
  apiUrl: string,
  projectId: string,
  poolId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/${poolId}/blocks`, {
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

export function poolsByIdUpdates(
  apiUrl: string,
  projectId: string,
  poolId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/pools/${poolId}/updates`, {
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
