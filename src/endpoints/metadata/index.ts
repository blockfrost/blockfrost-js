import axios from 'axios';
import { getHeaders, handleError } from 'utils';
import { components } from 'types/OpenApi';
import { BlockFrostAPI } from '../..';

export async function metadataTxsLabels(
  this: BlockFrostAPI,
): Promise<components['schemas']['tx_metadata_label_json']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/metadata/txs/labels`, {
        headers: getHeaders(this.projectId),
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
): Promise<components['schemas']['tx_metadata_labels']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/metadata/txs/labels/${label}`, {
        headers: getHeaders(this.projectId),
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
): Promise<components['schemas']['tx_metadata_label_cbor']> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${this.apiUrl}/metadata/txs/labels/${label}/cbor`, {
        headers: getHeaders(this.projectId),
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
