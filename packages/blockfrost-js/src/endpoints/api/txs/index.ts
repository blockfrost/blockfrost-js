import { handleError } from '../../../utils/errors';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';

export async function txs(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['tx_content']>(`txs/${hash}`)
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_utxo']>(`txs/${hash}/utxos`)
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_stake_addr']>(
      `txs/${hash}/stakes`,
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_delegations']>(
      `txs/${hash}/delegations`,
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_withdrawals']>(
      `txs/${hash}/withdrawals`,
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_mirs']>(`txs/${hash}/mirs`)
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_pool_certs']>(
      `txs/${hash}/pool_updates`,
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_pool_retires']>(
      `txs/${hash}/pool_retires`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsMetadata(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_metadata']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['tx_content_metadata']>(
      `txs/${hash}/metadata`,
    )
      .then(resp => {
        resolve(resp.body);
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
    this.instance<components['schemas']['tx_content_metadata_cbor']>(
      `txs/${hash}/metadata/cbor`,
    )
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

export async function txsRedeemers(
  this: BlockFrostAPI,
  hash: string,
): Promise<components['schemas']['tx_content_redeemers']> {
  return new Promise((resolve, reject) => {
    this.instance<components['schemas']['tx_content_redeemers']>(
      `txs/${hash}/redeemers`,
    )
      .then(resp => {
        resolve(resp.body);
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
  let tx: Buffer;

  if (typeof transaction === 'string') {
    tx = Buffer.from(transaction, 'hex');
  } else {
    tx = Buffer.from(transaction);
  }

  return new Promise((resolve, reject) => {
    this.instance
      .post(`tx/submit`, {
        body: tx,
        headers: { 'Content-type': 'application/cbor' },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
