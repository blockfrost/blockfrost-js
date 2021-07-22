import { SDK } from '../../utils';
import {
  deriveAddressFixtures,
  //   getAccountFixtures,
} from '../../fixtures/account';

describe('account', () => {
  deriveAddressFixtures.forEach(fixture => {
    test(fixture.toString(), () => {
      const response = SDK.deriveAddress(
        fixture.publicKey,
        fixture.index,
        fixture.type,
      );
      expect(response).toMatchObject(fixture.response);
    });
  });

  //   getAccountFixtures.forEach(fixture => {
  //     test(fixture.toString(), async () => {
  //       const response = await SDK.getAccount(fixture.publicKey, fixture.type);
  //       expect(response).toMatchObject(fixture.response);
  //     });
  //   });
});
