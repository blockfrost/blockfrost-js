import { SDK } from '../../utils';
import nock from 'nock';
import { API_URLS } from '../../../src/config';
const path = /.*/;
const BASE_URL = `${API_URLS.mainnet}/v0`;

describe('retry', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  afterAll(() => {
    nock.restore();
  });

  test('auto retry on 429 (rate limiting)', async () => {
    nock(BASE_URL)
      .get(path)
      .reply(200, { message: 'dummy response' })
      .get(path)
      .times(2)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(200, { message: 'it works after all' });

    const response = await SDK().blocksLatest();
    expect(response).toMatchObject({ message: 'dummy response' });
    const rateLimitedResponse = await SDK().blocksLatest();
    expect(rateLimitedResponse).toMatchObject({
      message: 'it works after all',
    });
  });

  test('auto retry on network error (max 3 retries)', async () => {
    nock(BASE_URL)
      .get(path)
      .reply(200, { message: 'dummy response' })
      .get(path)
      .delayConnection(120)
      .reply(200, 'this wont be received')
      .get(path)
      .delayConnection(120)
      .reply(200, 'this wont be received')
      .get(path)
      .reply(200, { message: 'it works after all' });

    const response = await SDK().blocksLatest();
    expect(response).toMatchObject({ message: 'dummy response' });
    const rateLimitedResponse = await SDK({
      requestTimeout: 100,
    }).blocksLatest();
    expect(rateLimitedResponse).toMatchObject({
      message: 'it works after all',
    });
  });

  test('auto retry on network error (exceeded max number of retries)', async () => {
    nock(BASE_URL)
      .get(path)
      .reply(200, { message: 'dummy response' })
      .get(path)
      .delayConnection(100)
      .reply(200, 'this wont be received')
      .get(path)
      .delayConnection(100)
      .reply(200, 'this wont be received')
      .get(path)
      .delayConnection(100)
      .reply(200, 'this wont be received')
      .get(path)
      .delayConnection(100)
      .reply(200, 'this wont be received')
      .get(path)
      .delayConnection(100)
      .reply(200, 'this wont be received')
      .get(path)
      .reply(200, 'this wont be received');

    const response = await SDK().blocksLatest();
    expect(response).toMatchObject({ message: 'dummy response' });
    try {
      await SDK({
        requestTimeout: 10,
      }).blocksLatest();
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Timeout awaiting 'request' for 10ms");
    }
  });

  test('auto retry on 429 (rate limiting), should fail because of failed tries > retryCount', async () => {
    nock(BASE_URL)
      .get(path)
      .reply(200, { message: 'dummy response' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(429, { message: 'rate limited' })
      .get(path)
      .reply(200, { message: 'it works after all' });

    const response = await SDK().blocksLatest();
    expect(response).toMatchObject({ message: 'dummy response' });
    try {
      await SDK().blocksLatest();
    } catch (err) {
      expect(err).toMatchObject({
        status_code: 429,
        error: 'Too Many Requests',
      });
    }
  });

  test("auto retry shouldn't work for status_code other than [408, 413, 429, 500, 502, 503, 504, 521, 522, 524]", async () => {
    nock(BASE_URL)
      .get(path)
      .reply(200, { message: 'dummy response' })
      .get(path)
      .reply(404, { message: '404: not found' })
      .get(path)
      .reply(200, { message: 'it works after all' });

    const response = await SDK().blocksLatest();
    expect(response).toMatchObject({ message: 'dummy response' });
    try {
      await SDK().blocksLatest();
    } catch (err) {
      expect(err).toMatchObject({
        status_code: 404,
      });
    }
  });
});
