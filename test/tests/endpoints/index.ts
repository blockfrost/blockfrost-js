import { expect, describe, test } from 'vitest';
import { SDK } from '../../utils';
import fixtures from '../../fixtures/endpoints';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { rest, RestHandler, MockedRequest, DefaultBodyType } from 'msw';

describe('endpoints - success', () => {
  const restHandlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [];

  fixtures.forEach(fixture => {
    const handler = rest[fixture.endpointMockMethod ?? 'get'](
      fixture.path,
      (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(fixture.endpointMock));
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
      const response = await fixture.command(SDK());

      expect(response).toStrictEqual(fixture.response);
    });
  });
});
