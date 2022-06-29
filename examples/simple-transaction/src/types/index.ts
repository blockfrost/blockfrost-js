import { Responses } from '@blockfrost/blockfrost-js';

export type UTXO = Responses['address_utxo_content'];

export interface AssetAmount {
  unit: string;
  quantity: string;
}
