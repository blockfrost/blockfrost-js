import { handleError } from '../../../utils';
import { components } from '../../../types/OpenApi';
import { BlockFrostAPI } from '../../../index';

export async function txs(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsUtxos(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_utxo']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/utxos`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsStakes(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_stake_addr']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/stakes`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsDelegations(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_delegations']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/delegations`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsWithdrawals(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_withdrawals']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/withdrawals`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsMirs(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_mirs']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/mirs`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsPoolUpdates(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_pool_certs']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/pool_updates`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsPoolRetires(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_pool_retires']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/pool_retires`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsMetadata(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_metadata_label_json']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/metadata`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsMetadataCbor(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_metadata_cbor']> {
  return new Promise((resolve, reject) => {
    this.axiosInstance(`${this.apiUrl}/txs/${hash}/metadata/cbor`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txSubmit(
  this: BlockFrostAPI,
  transaction: Uint8Array | string,
): Promise<string> {
  let tx = transaction;

  if (typeof transaction === 'string') {
    tx = Uint8Array.from(Buffer.from(transaction, 'hex'));
  }

  return new Promise((resolve, reject) => {
    this.axiosInstance
      .post(`${this.apiUrl}/tx/submit`, tx, {
        headers: { 'Content-type': 'application/cbor' },
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
