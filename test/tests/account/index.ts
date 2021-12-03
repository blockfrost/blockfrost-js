import { SDK } from '../../utils';
import {
  deriveAddressFixtures,
  getAccountFixtures,
} from '../../fixtures/account';

describe('account', () => {
  deriveAddressFixtures.forEach(fixture => {
    test(JSON.stringify(fixture), () => {
      const response = SDK().deriveAddress(
        fixture.publicKey,
        fixture.type,
        fixture.index,
        fixture.isTestnet,
      );
      expect(response).toStrictEqual(fixture.response);
    });
  });

  getAccountFixtures.forEach(fixture => {
    test(JSON.stringify(fixture), async () => {
      const response = await SDK().getAccount(
        fixture.publicKey,
        fixture.type,
        false,
      );
      expect(response).toStrictEqual(fixture.response);
    });
  });
});
