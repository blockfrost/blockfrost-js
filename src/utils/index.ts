import { DEFAULT_API_VERSION } from '../config';
import { Headers, Options, ValidatedOptions } from '../types';
import { AxiosError } from 'axios';

export const validateOptions = (options?: Options): ValidatedOptions => {
  if (!options || (!options.customBackend && !options.projectId)) {
    throw Error('Missing customBackend or projectId option');
  }

  if (!options.projectId && !options.customBackend) {
    throw Error('Missing param projectId in options');
  }

  if (options.version && isNaN(options.version)) {
    throw Error('Param version is not a number');
  }

  return {
    customBackend: options.customBackend,
    projectId: options.projectId,
    isTestnet: options.isTestnet,
    version: options.version || DEFAULT_API_VERSION,
    retry429: options.retry429 || true,
  };
};

export const getHeaders = (
  projectId?: string,
  isTxSubmit = false,
): Headers | null => {
  if (!projectId) {
    return null;
  }

  // headers needed for /tx/submit endpoint
  const additionalHeaders = isTxSubmit
    ? { 'Content-type': 'application/cbor' }
    : null;

  return {
    project_id: projectId,
    ...additionalHeaders,
  };
};

export const handleError = (error: AxiosError) => {
  if (error.response) {
    return error.response;
  } else if (error.request) {
    return error.request;
  } else {
    return error.message;
  }
};
