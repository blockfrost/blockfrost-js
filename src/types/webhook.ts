import { Responses } from '..';

export type BlockPayload = Omit<Responses['block_content'], 'height'> & {
  height: number;
};

export type TransactionPayload = {
  tx: Responses['tx_content'];
  inputs: Responses['tx_content_utxo']['inputs'];
  outputs: Responses['tx_content_utxo']['outputs'];
};

export type StakeDelegationPayload = {
  tx: Responses['tx_content'];
  // delegations with pool data
  delegations: (Responses['tx_content_delegations'][number] & {
    pool: Responses['pool'];
  })[];
};

export type EpochPayload = {
  previous_epoch: Responses['epoch_content'];
  current_epoch: Pick<
    Responses['epoch_content'],
    'epoch' | 'start_time' | 'end_time'
  >;
};

interface WebhookEventCommon {
  id: string;
  webhook_id: string;
  created: number;
  api_version: number;
}

export type WebhookEventBlock = WebhookEventCommon & {
  type: 'block';
  payload: BlockPayload;
};
export type WebhookEventTransaction = WebhookEventCommon & {
  type: 'transaction';
  payload: TransactionPayload[];
};
export type WebhookEventEpoch = WebhookEventCommon & {
  type: 'epoch';
  payload: EpochPayload;
};
export type WebhookEventDelegation = WebhookEventCommon & {
  type: 'delegation';
  payload: StakeDelegationPayload[];
};

export type WebhookEvent =
  | WebhookEventBlock
  | WebhookEventTransaction
  | WebhookEventEpoch
  | WebhookEventDelegation;
