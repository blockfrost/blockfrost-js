import { getPaginationOptions } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { handleError } from '../../../utils/errors';
import { PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

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

export async function metadataTxsLabel(
  this: BlockFrostAPI,
  label: string,
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
