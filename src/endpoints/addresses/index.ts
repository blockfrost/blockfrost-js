import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export async function addresses(
    this: BlockFrostAPI,
    address: string,
): Promise<components['schemas']['address_content']> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${this.apiUrl}/addresses/${address}`, {
                headers: getHeaders(this.projectId),
            })
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => reject(handleError(err)));
    });
}

export async function addressesTotal(
    this: BlockFrostAPI,
    address: string,
): Promise<components['schemas']['address_content_total']> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${this.apiUrl}/addresses/${address}/total`, {
                headers: getHeaders(this.projectId),
            })
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => reject(handleError(err)));
    });
}

export async function addressesTxs(
    this: BlockFrostAPI,
    address: string,
): Promise<components['schemas']['address_txs_content']> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${this.apiUrl}/addresses/${address}/txs`, {
                headers: getHeaders(this.projectId),
            })
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => reject(handleError(err)));
    });
}

export async function addressesUtxos(
    this: BlockFrostAPI,
    address: string,
): Promise<components['schemas']['address_utxo_content']> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${this.apiUrl}/addresses/${address}/utxos`, {
                headers: getHeaders(this.projectId),
            })
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => reject(handleError(err)));
    });
}
