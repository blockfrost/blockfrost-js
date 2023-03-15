import { expect, describe, test } from 'vitest';
import { SDK_ERROR } from '../../utils';
import fixtures from '../../fixtures/endpoints';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { rest, RestHandler, MockedRequest, DefaultBodyType } from 'msw';

describe('endpoints - errors', () => {
  const restHandlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [];

  fixtures.forEach(fixture => {
    const handler = rest[fixture.endpointMockMethod ?? 'get'](
      fixture.path,
      (_req, res, ctx) => {
        return res(
          ctx.status(403),
          ctx.json({
            error: 'Forbidden',
            message: 'Invalid project token.',
            status_code: 403,
          }),
        );
      },
    );

    restHandlers.push(handler);
  });

  const server = setupServer(...restHandlers);

  beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  fixtures.forEach(fixture => {
    test(`${fixture.path}`, async () => {
      try {
        await fixture.command(SDK_ERROR);
      } catch (error) {
        expect(error).toMatchObject({
          error: 'Forbidden',
          message: 'Invalid project token.',
          status_code: 403,
        });
      }
    });
  });
});
