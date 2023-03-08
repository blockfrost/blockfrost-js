import { getPaginationOptions } from '../../../utils';
import { components } from '@blockfrost/openapi';
import { handleError } from '../../../utils/errors';
import { PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains list of all used transaction metadata labels.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Metadata/paths/~1metadata~1txs~1labels/get | API docs for Transaction metadata labels}
 *
 * @param [pagination] - Pagination options
 * @returns List of all used transaction metadata labels
 *
 */
export async function metadataTxsLabels(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['tx_metadata_labels']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['tx_metadata_labels']>(
      `metadata/txs/labels`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
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
 * Obtains transaction metadata for a specific label in JSON format.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Metadata/paths/~1metadata~1txs~1labels~1%7Blabel%7D/get | API docs for Transaction metadata content in JSON}
 *
 * @param label - Metadata label
 * @param [pagination] - Pagination options
 * @returns List of transaction metadata for the specific label
 *
 */
export async function metadataTxsLabel(
  this: BlockFrostAPI,
  label: string | number,
  pagination?: PaginationOptions,
): Promise<components['schemas']['tx_metadata_label_json']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['tx_metadata_label_json']>(
      `metadata/txs/labels/${label}`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
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
 * Obtains transaction metadata for a specific label in CBOR format.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Metadata/paths/~1metadata~1txs~1labels~1%7Blabel%7D~1cbor/get | API docs for Transaction metadata content in CBOR}
 *
 * @param label - Metadata label
 * @param [pagination] - Pagination options
 * @returns List of transaction metadata for the specific label
 *
 */
export async function metadataTxsLabelCbor(
  this: BlockFrostAPI,
  label: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['tx_metadata_label_cbor']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['tx_metadata_label_cbor']>(
      `metadata/txs/labels/${label}/cbor`,
      {
        searchParams: {
          page: paginationOptions.page,
          count: paginationOptions.count,
          order: paginationOptions.order,
        },
      },
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
