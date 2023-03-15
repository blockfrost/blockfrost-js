// Exported types from @blockfrost/openapi aren't strict enough

type Quantity = bigint | string | number;
interface Value {
  coins: Quantity;
  assets?: {
    [k: string]: Quantity;
  };
}
interface Native {
  native: ScriptNative;
}
interface Any {
  any: ScriptNative[];
}
export interface All {
  all: ScriptNative[];
}
interface NOf {
  [k: string]: ScriptNative[];
}

type DigestBlake2BVerificationKey = string;
interface ExpiresAt {
  expiresAt: Slot;
}
interface StartsAt {
  startsAt: Slot;
}
declare type Slot = number;
declare type Datum = string;
declare type ScriptPlutus = string;
interface PlutusV1 {
  'plutus:v1': ScriptPlutus;
}
interface PlutusV2 {
  'plutus:v2': ScriptPlutus;
}
type ScriptNative =
  | DigestBlake2BVerificationKey
  | Any
  | All
  | NOf
  | ExpiresAt
  | StartsAt;

type Script = Native | PlutusV1 | PlutusV2;

export interface TxIn {
  txId: string;
  index: number;
}

export interface TxOut {
  address: string;
  value: Value;
  datumHash?: string | null;
  datum?:
    | {
        [k: string]: unknown;
      }
    | Datum
    | null;
  script?: Script | null;
}
