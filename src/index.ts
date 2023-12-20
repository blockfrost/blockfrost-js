import { Schemas } from './types/open-api';
import { BlockFrostAPI } from './BlockFrostAPI';
import { BlockFrostIPFS } from './BlockFrostIPFS';
import {
  deriveAddress,
  getFingerprint,
  parseAsset,
  verifyWebhookSignature,
} from './utils/helpers';
import {
  BlockfrostClientError,
  BlockfrostServerError,
  SignatureVerificationError,
} from './utils/errors';
import {
  WebhookEvent,
  WebhookEventBlock,
  WebhookEventDelegation,
  WebhookEventEpoch,
  WebhookEventTransaction,
} from './types/webhook';

type Responses = Schemas;

export {
  BlockFrostAPI,
  BlockFrostIPFS,
  BlockfrostClientError,
  BlockfrostServerError,
  SignatureVerificationError,
  parseAsset,
  getFingerprint,
  deriveAddress,
  verifyWebhookSignature,
};

export type {
  Responses,
  WebhookEvent,
  WebhookEventBlock,
  WebhookEventTransaction,
  WebhookEventEpoch,
  WebhookEventDelegation,
};
