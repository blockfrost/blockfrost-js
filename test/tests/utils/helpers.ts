import { expect, describe, test, vi } from 'vitest';
import {
  deriveAddressFixtures,
  verifyWebhookSignatureFixtures,
} from '../../fixtures/utils/helpers';
import {
  deriveAddress,
  verifyWebhookSignature,
  getFingerprint,
  parseAsset,
  hexToString,
} from '../../../src/utils/helpers';
import { SignatureVerificationError } from '../../../src/utils/errors';

describe('helpers', () => {
  deriveAddressFixtures.forEach(fixture => {
    test(`deriveAddress - publicKey: ${fixture.publicKey} role: ${fixture.role} index: ${fixture.index} isByron: ${fixture.isByron}`, () => {
      const response = deriveAddress(
        fixture.publicKey,
        fixture.role,
        fixture.index,
        fixture.isTestnet,
        fixture.isByron,
      );
      expect(response).toStrictEqual(fixture.response);
    });
  });

  verifyWebhookSignatureFixtures.forEach(fixture => {
    test(`verifyWebhookSignature: ${fixture.description}`, () => {
      if (fixture.mockCurrentTimestamp) {
        vi.useFakeTimers().setSystemTime(
          new Date(fixture.mockCurrentTimestamp * 1000),
        );
      }
      const response = () =>
        verifyWebhookSignature(
          fixture.webhookPayload,
          fixture.signatureHeader,
          fixture.secret,
          fixture.timestampToleranceSeconds,
        );

      if (fixture.result === true) {
        expect(response()).toStrictEqual(fixture.result);
      } else {
        expect(response).toThrowError(SignatureVerificationError);
      }

      vi.useRealTimers();
    });
  });

  test('getFingerprint', () => {
    expect(
      getFingerprint(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
        '6e7574636f696e',
      ),
    ).toEqual('asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd');

    expect(
      getFingerprint(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
      ),
    ).toEqual('asset1g42eufadhfpr3uqjet2atds648gp3aew8unq5h');
  });

  test('hexToString', () => {
    expect(hexToString('6a65737573')).toEqual('jesus');
  });

  test('parseAsset', () => {
    expect(
      parseAsset(
        '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
      ),
    ).toMatchObject({
      assetName: 'nutcoin',
      assetNameHex: '6e7574636f696e',
      fingerprint: 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd',
      policyId: '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
    });
  });
});
