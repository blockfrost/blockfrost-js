import { deriveAddressFixtures } from '../../fixtures/utils/helpers';
import {
  deriveAddress,
  getFingerprint,
  parseAsset,
  hexToString,
} from '../../../src/utils/helpers';

describe('helpers', () => {
  deriveAddressFixtures.forEach(fixture => {
    test(`deriveAddress - publicKey: ${fixture.publicKey} role: ${fixture.role} index: ${fixture.index}`, () => {
      const response = deriveAddress(
        fixture.publicKey,
        fixture.role,
        fixture.index,
        false,
      );
      expect(response).toStrictEqual(fixture.response);
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
      fingerprint: 'asset12h3p5l3nd5y26lr22am7y7ga3vxghkhf57zkhd',
      policyId: '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae',
    });
  });
});
