import nock from 'nock';
import { SDK } from '../utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('axios/lib/adapters/http');

SDK.axiosInstance.defaults.adapter = http;

const baseUrl = `https://cardano-mainnet.blockfrost.io`;
const path = `/api/v0/blocks/latest`;

describe('retry', () => {
  beforeEach(() => {
    if (!nock.isActive()) {
      nock.activate();
    }
  });

  afterEach(() => {
    nock.restore();
  });

  test('auto retry on 429 (rate limiting)', async () => {
    nock(baseUrl).get(path).reply(200, 'dummy response');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(200, 'it works after all');

    const response = await SDK.blocksLatest();
    expect(response).toBe('dummy response');
    const rateLimitedResponse = await SDK.blocksLatest();
    expect(rateLimitedResponse).toBe('it works after all');
  });

  test('auto retry on 429 (rate limiting), should fail because of failed tries > retryCount', async () => {
    nock(baseUrl).get(path).reply(200, 'dummy response');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(429, 'rate limited');
    nock(baseUrl).get(path).reply(200, 'it works after all');

    const response = await SDK.blocksLatest();
    expect(response).toBe('dummy response');
    try {
      await SDK.blocksLatest();
    } catch (e) {
      expect(e).toMatchObject({
        status_code: 429,
        error: null,
        message: '429: null',
      });
    }
  });

  test("auto retry shouldn't work for status_code !== 429", async () => {
    nock(baseUrl).get(path).reply(200, 'dummy response');
    nock(baseUrl).get(path).reply(500, 'internal server error');
    nock(baseUrl).get(path).reply(200, 'it works after all');

    try {
      await SDK.blocksLatest();
    } catch (e) {
      expect(e).toMatchObject({
        status_code: 500,
        error: null,
        message: '500: null',
      });
    }
  });
});
