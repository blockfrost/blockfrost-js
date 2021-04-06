import axios from 'axios';
import { getHeaders, handleError } from '../../utils';
import { components } from '../../types/OpenApi';
import { BlockFrostAPI } from '../../index';

export async function metrics(
    this: BlockFrostAPI,
): Promise<components['schemas']['metrics']> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${this.apiUrl}/metrics`, {
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

export async function metricsEndpoints(
    this: BlockFrostAPI,
): Promise<components['schemas']['metrics']> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${this.apiUrl}/metrics/endpoints`, {
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
