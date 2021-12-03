import { deriveAddressFixtures } from '../../fixtures/utils/helpers';
import { deriveAddress } from '../../../src/utils/helpers';

describe('helpers', () => {
  deriveAddressFixtures.forEach(fixture => {
    test(JSON.stringify(fixture), () => {
      const response = deriveAddress(
        fixture.publicKey,
        fixture.type,
        fixture.index,
        false,
      );
      expect(response).toStrictEqual(fixture.response);
    });
  });
});
