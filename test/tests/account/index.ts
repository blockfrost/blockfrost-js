import { SDK } from '../../utils';
import { getAccountFixtures } from '../../fixtures/account';

describe('account', () => {
  getAccountFixtures.forEach(fixture => {
    test(`getAccount - publicKey: ${fixture.publicKey} type: ${fixture.type} isTestnet: ${fixture.isTestnet}`, async () => {
      const response = await SDK().getAccount(
        fixture.publicKey,
        fixture.type,
        false,
      );
      expect(response).toStrictEqual(fixture.response);
    });
  });
});
