import { getPaginationOptions } from '../../../utils';
import { components } from '@blockfrost/openapi';
import { handleError } from '../../../utils/errors';
import { PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains information about a specific script.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D/get | API docs for Script}
 *
 * @param scriptHash - Hash of the script
 * @returns Information about a specific script
 *
 */
export async function scriptsByHash(
  this: BlockFrostAPI,
  scriptHash: string,
): Promise<components['schemas']['script']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['script']>(`scripts/${scriptHash}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains list of scripts (paginated).
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts/get | API docs for Scripts}
 *
 * @param pagination - Optional, Pagination options
 * @returns List of scripts
 *
 */
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains JSON representation of a timelock script.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D~1json/get | API docs for Script JSON}
 *
 * @param scriptHash - Hash of the script
 * @returns JSON representation of a timelock script
 *
 */
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains CBOR representation of a plutus script.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D~1cbor/get | API docs for Script CBOR}
 *
 * @param scriptHash - Hash of the script
 * @returns CBOR representation of a plutus script
 *
 */
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains JSON value of a datum by its hash.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1datum~1%7Bdatum_hash%7D/get | API docs for Datum value}
 *
 * @param datumHash - Hash of the datum
 * @returns JSON value of a datum specified by its hash
 *
 */
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains CBOR serialized datum by its hash.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1datum~1%7Bdatum_hash%7D~1cbor/get | API docs for Datum CBOR value}
 *
 * @param datumHash - Hash of the datum
 * @returns JSON value of a datum specified by its hash
 *
 */
export async function scriptsDatumCbor(
  this: BlockFrostAPI,
  datumHash: string,
): Promise<components['schemas']['script_datum_cbor']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['script_datum_cbor']>(
      `scripts/datum/${datumHash}/cbor`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Obtains list of redeemers of a specific script
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Scripts/paths/~1scripts~1%7Bscript_hash%7D~1redeemers/get | API docs for Redeemers of a specific script}
 *
 * @param scriptHash - Hash of the script
 * @returns List of redeemers of a specific script
 *
 */
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
      .catch(err => {
        reject(handleError(err));
      });
  });
}
