import got from 'got';
import nock from 'nock';
import { serializeError } from 'serialize-error';
import { describe, expect, test } from 'vitest';

import { handleError } from '../../../src/utils/errors';
import * as fixtures from '../../fixtures/utils/errors';

// eslint-disable-next-line @typescript-eslint/no-var-requires

describe('errors', () => {
  fixtures.handleError.forEach(f => {
    test(`handleError: ${f.description}`, async () => {
      // Set up the mock request.
      const scope = nock('http://localhost');

      if (f.payload.code === 'ETIMEDOUT') {
        scope.get('/test').delayConnection(1000).reply(200);
      } else {
        scope
          .get('/test')
          .reply(f.payload.response?.statusCode, f.payload.response?.body);
      }
      await got('http://localhost/test', {
        retry: 0,
        timeout: {
          lookup: 100,
          connect: 50,
          secureConnect: 50,
          socket: 1000,
          send: 10000,
          response: f.payload.code === 'ETIMEDOUT' ? 1 : 1000,
        },
      }).catch(err => {
        const handledError = handleError(err);
        const serializedError = serializeError(handledError);
        expect(handledError).toBeInstanceOf(Error);
        expect(serializedError).toMatchObject(f.result);
      });

      // Assert that the expected request was made.
      scope.done();
    });
  });
});
