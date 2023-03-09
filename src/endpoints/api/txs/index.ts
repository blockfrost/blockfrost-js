import { handleError } from '../../../utils/errors';
import { components } from '@blockfrost/openapi';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains a specific transaction
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D/get | API docs for Transaction}
 *
 * @param hash - Transaction hash
 * @returns Transaction
 *
 */
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

/**
 * Obtains the inputs and outputs of the specific transaction.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1utxos/get | API docs for Transaction UTXOs}
 *
 * @param hash - Transaction hash
 * @returns Transaction inputs and outputs
 *
 */
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

/**
 * Obtains information about (de)registration of stake addresses within a transaction.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1stakes/get | API docs for Transaction stake addresses certificates}
 *
 * @param hash - Transaction hash
 * @returns List of (de)registration certificates within the transaction
 *
 */
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

/**
 * Obtains information about delegation certificates of a specific transaction.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1delegations/get | API docs for Transaction stake addresses certificates}
 *
 * @param hash - Transaction hash
 * @returns List of delegation certificates within the transaction
 *
 */
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

/**
 * Obtains information about withdrawals within a specific transaction.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1withdrawals/get | API docs for Transaction withdrawal}
 *
 * @param hash - Transaction hash
 * @returns List of withdrawals within the transaction
 *
 */
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

/**
 * Obtains information about Move Instantaneous Rewards (MIRs) of a specific transaction.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1mirs/get | API docs for Transaction MIRs}
 *
 * @param hash - Transaction hash
 * @returns List of Move Instantaneous Rewards (MIRs) within the transaction
 *
 */
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

/**
 * Obtains information about stake pool registration and update certificates of a specific transaction.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1pool_updates/get | API docs for Transaction stake pool registration and update certificates}
 *
 * @param hash - Transaction hash
 * @returns List of stake pool registration and update certificates within a specific transaction
 *
 */
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

/**
 * Obtains information about stake pool retirements within a specific transaction.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1pool_retires/get | API docs for Transaction stake pool retirement certificates}
 *
 * @param hash - Transaction hash
 * @returns List of stake pool retirement certificates
 *
 */
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

/**
 * Obtains transaction metadata in JSON format.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1metadata/get | API docs for Transaction metadata}
 *
 * @param hash - Transaction hash
 * @returns Transaction metadata in JSON
 *
 */
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

/**
 * Obtains transaction metadata in CBOR format.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1metadata~1cbor/get | API docs for Transaction metadata in CBOR}
 *
 * @param hash - Transaction hash
 * @returns Transaction metadata in CBOR
 *
 */
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

/**
 * Obtains transaction redeemers.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1txs~1%7Bhash%7D~1redeemers/get | API docs for Transaction redeemers}
 *
 * @param hash - Transaction hash
 * @returns Transaction redeemers
 *
 */
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

/**
 * Submits a transaction to the network.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Transactions/paths/~1tx~1submit/post | API docs for Transaction submit}
 *
 * @param transaction - Transaction bytes as Uint8Array or hex-encoded string
 * @returns ID of the submitted transaction
 *
 */
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
