import { expect, describe, test } from 'vitest';
import { SDK_MOCKED } from '../../utils';
import fixtures from '../../fixtures/endpoints';

describe('endpoints - success', () => {
  fixtures.forEach(fixture => {
    test(`${fixture.command.toString()}`, async () => {
      const response = await fixture.command(SDK_MOCKED);

      expect(response).toStrictEqual(fixture.response);
    });
  });
});
