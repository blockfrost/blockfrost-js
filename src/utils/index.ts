import { DEFAULT_API_VERSION } from '../config';
import { Headers, Options, ValidatedOptions } from '../types';
import { AxiosError } from 'axios';
import { BlockFrostAPI } from '..';

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
  api?: BlockFrostAPI,
  isTxSubmit = false,
): Headers | null => {
  if (!api?.projectId) {
    return null;
  }

  // headers needed for /tx/submit endpoint
  const cborHeader = isTxSubmit ? { 'Content-type': 'application/cbor' } : null;
  const userAgentHeader = api.userAgent
    ? { 'User-Agent': api.userAgent }
    : null;

  return {
    project_id: api.projectId,
    ...cborHeader,
    ...userAgentHeader,
  };
};

export const handleError = (error: AxiosError): unknown => {
  if (error.response) {
    return error.response;
  } else if (error.request) {
    return error.request;
  } else {
    return error.message;
  }
};

export const getAdditionalParams = (
  from: string | null,
  to: string | null,
): string => {
  // from & to parameters don't have default values
  let additionalParams = '';
  if (from && to) additionalParams = `from=${from}&to=${to}`;
  else if (from) additionalParams = `from=${from}`;
  else if (to) additionalParams = `to=${to}`;
  return additionalParams;
};
