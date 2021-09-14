import { handleError, getPaginationOptions } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { PaginationOptions } from '../../../types';
import { BlockFrostAPI } from '../../../index';

export async function metadataTxsLabels(
  this: BlockFrostAPI,
  pagination?: PaginationOptions,
): Promise<components['schemas']['tx_metadata_labels']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/metadata/txs/labels`, {
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

export async function metadataTxsLabel(
  this: BlockFrostAPI,
  label: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['tx_metadata_label_json']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/metadata/txs/labels/${label}`, {
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

export async function metadataTxsLabelCbor(
  this: BlockFrostAPI,
  label: string,
  pagination?: PaginationOptions,
): Promise<components['schemas']['tx_metadata_label_cbor']> {
  const paginationOptions = getPaginationOptions(pagination);

  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/metadata/txs/labels/${label}/cbor`, {
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
