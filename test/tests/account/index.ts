import { SDK } from '../../utils';
import { getAccountFixtures } from '../../fixtures/account';

describe('account', () => {
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
