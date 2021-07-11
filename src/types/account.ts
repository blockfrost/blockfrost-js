import { Responses } from '@blockfrost/blockfrost-js';

export type Result = {
  address: string;
  path: string;
  data: Responses['address_content'] | 'empty';
};

export interface Balance {
  unit: string;
  quantity: string;
}

export type Type = 1 | 0;

export type Bundle = {
  address: string;
  path: string;
  promise: Promise<Responses['address_content']>;
}[];

type UtxoContent = Responses['address_utxo_content'];

export interface UtxosData extends UtxoContent {
  blockInformation: Responses['block_content'];
}

export interface AddressData {
  address: string;
  path: string;
  transfers: number;
  balance?: string;
  sent?: string;
  received?: string;
}

export interface Utxo {
  tx_hash: string;
  tx_index: number;
  output_index: number;
  amount: {
    unit: string;
    quantity: string;
  }[];
  block: string;
}

export interface UtxosWithBlockResponse {
  address: string;
  utxoData: Utxo;
  blockInfo: Responses['block_content'];
}

export interface UtxosWithBlocksBundle {
  address: string;
  utxoData: Utxo;
  promise: Promise<Responses['block_content']>;
}

export type UtxosWithBlocksParams = {
  address: string;
  data: Responses['address_utxo_content'] | 'empty';
}[];

export type GetAddressDataBundle = {
  address: string;
  path: string;
  promise: Promise<Responses['address_txs_content']>;
};
