import axios from 'axios';
import { getHeaders, handleError } from 'utils';

export function epochs(apiUrl: string, projectId: string, number: number): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}`, {
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

export const epochsLatest = (apiUrl: string, projectId: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/latest`, {
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

export const epochsNext = (apiUrl: string, projectId: string, number: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}/next`, {
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

export const epochsPrevious = (apiUrl: string, projectId: string, number: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}/previous`, {
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

export const epochsStakes = (apiUrl: string, projectId: string, number: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}/stakes`, {
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

export const epochsStakesByPoolId = (
  apiUrl: string,
  projectId: string,
  number: number,
  poolId: string,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}/stakes/${poolId}`, {
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

export const epochsBlocks = (apiUrl: string, projectId: string, number: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}/blocks`, {
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

export const epochsBlocksByPoolId = (
  apiUrl: string,
  projectId: string,
  number: number,
  poolId: string,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}/blocks/${poolId}`, {
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

export const epochsParameters = (apiUrl: string, projectId: string, number: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/epochs/${number}/parameters`, {
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
