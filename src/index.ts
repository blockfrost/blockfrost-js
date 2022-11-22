import { components } from '@blockfrost/openapi';
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

type Responses = components['schemas'];

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

export type { Responses };
