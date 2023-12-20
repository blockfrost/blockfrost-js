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
  try {
    const res = await this.instance<components['schemas']['script']>(
      `scripts/${scriptHash}`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
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

  try {
    const res = await this.instance<components['schemas']['scripts']>(
      `scripts`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
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
  try {
    const res = await this.instance<components['schemas']['script_json']>(
      `scripts/${scriptHash}/json`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
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
  try {
    const res = await this.instance<components['schemas']['script_cbor']>(
      `scripts/${scriptHash}/cbor`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
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
  try {
    const res = await this.instance<components['schemas']['script_datum']>(
      `scripts/datum/${datumHash}`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
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
  try {
    const res = await this.instance<components['schemas']['script_datum_cbor']>(
      `scripts/datum/${datumHash}/cbor`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
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
  try {
    const res = await this.instance<components['schemas']['script_redeemers']>(
      `scripts/${scriptHash}/redeemers`,
    );
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}
