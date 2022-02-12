import { getPaginationOptions } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { handleError } from '../../../utils/errors';
import { PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

export async function scriptsByHash(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['script']>(`scripts/${scriptHash}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}

export async function scripts(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['scripts']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['scripts']>(`scripts`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}

export async function scriptsJson(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script_json']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['script_json']>(
      `scripts/${scriptHash}/json`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}

export async function scriptsCbor(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script_cbor']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['script_cbor']>(
      `scripts/${scriptHash}/cbor`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}

export async function scriptsDatum(
  this: BlockFrostAPI,
  datumHash: string,
): Promise<components['schemas']['script_datum']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['script_datum']>(
      `scripts/datum/${datumHash}`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}

export async function scriptsRedeemers(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script_redeemers']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['script_redeemers']>(
      `scripts/${scriptHash}/redeemers`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
}
