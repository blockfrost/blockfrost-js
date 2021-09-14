import { handleError, getPaginationOptions } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

export async function script(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/scripts/${scriptHash}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function scripts(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['scripts']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/scripts`, {
      params: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function scriptJson(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script_json']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/scripts/${scriptHash}/json`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function scriptCbor(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script_cbor']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/scripts/${scriptHash}/cbor`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function scriptDatum(
  this: BlockFrostAPI,
  datumHash: string,
): Promise<components['schemas']['script_datum']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/scripts/datum/${datumHash}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function scriptRedeemers(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script_redeemers']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/scripts/${scriptHash}/redeemers`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
