import { Responses } from '../';

export type Result = {
  address: string;
  path: [number, number];
  data: Responses['address_content'] | 'empty';
};

export interface Balance {
  unit: string;
  quantity: string;
}

export type Type = 1 | 0;

export type Bundle = {
  address: string;
  path: [number, number];
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

export type GetAddressDataBundle = {
  address: string;
  path: string;
  promise: Promise<Responses['address_txs_content']>;
};
