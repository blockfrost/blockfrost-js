import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';
import {
  DEFAULT_PAGINATION_PAGE_COUNT,
  DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  DEFAULT_ORDER,
} from '../../config';

export async function metadataTxsLabels(
  this: BlockFrostAPI,
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['tx_metadata_label_json']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/metadata/txs/labels?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
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
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['tx_metadata_labels']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/metadata/txs/labels/${label}?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
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
  page = DEFAULT_PAGINATION_PAGE_COUNT,
  count = DEFAULT_PAGINATION_PAGE_ITEMS_COUNT,
  order = DEFAULT_ORDER,
): Promise<components['schemas']['tx_metadata_label_cbor']> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${this.apiUrl}/metadata/txs/labels/${label}/cbor?page=${page}&count=${count}&order=${order}`,
        {
          headers: getHeaders(this),
        },
      )
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
