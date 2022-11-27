import { expect, describe, test } from 'vitest';
import { SDK_ERROR } from '../../utils';
import fixtures from '../../fixtures/endpoints';

describe('endpoints - invalid api token error', () => {
  fixtures.forEach(fixture => {
    test(`${fixture.command.toString()} error`, async () => {
      try {
        await fixture.command(SDK_ERROR);
      } catch (err) {
        expect(err).toStrictEqual({
          error: 'Forbidden',
          message: 'Invalid project token.',
          status_code: 403,
        });
      }
    });
  });
});
