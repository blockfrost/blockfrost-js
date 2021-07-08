import { SDK } from '../utils';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(SDK.axiosInstance);
const path = /.*/;

describe('retry', () => {
  afterEach(() => {
    mock.resetHandlers();
  });

  test('auto retry on 429 (rate limiting)', async () => {
    mock
      .onGet(path)
      .replyOnce(200, 'dummy response')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(200, 'it works after all');

    const response = await SDK.blocksLatest();
    expect(response).toBe('dummy response');
    const rateLimitedResponse = await SDK.blocksLatest();
    expect(rateLimitedResponse).toBe('it works after all');
  });

  test('auto retry on network error (max 3 retries)', async () => {
    mock
      .onGet(path)
      .replyOnce(200, 'dummy response')
      .onGet(path)
      .networkErrorOnce()
      .onGet(path)
      .networkErrorOnce()
      .onGet(path)
      .replyOnce(200, 'it works after all');

    const response = await SDK.blocksLatest();
    expect(response).toBe('dummy response');
    const rateLimitedResponse = await SDK.blocksLatest();
    expect(rateLimitedResponse).toBe('it works after all');
  });

  test('auto retry on network error (exceeded max number of retries)', async () => {
    mock
      .onGet(path)
      .replyOnce(200, 'dummy response')
      .onGet(path)
      .networkErrorOnce()
      .onGet(path)
      .networkErrorOnce()
      .onGet(path)
      .networkErrorOnce()
      .onGet(path)
      .networkErrorOnce()
      .onGet(path)
      .networkErrorOnce()
      .onGet(path)
      .replyOnce(200, 'it works after all');

    const response = await SDK.blocksLatest();
    expect(response).toBe('dummy response');
    try {
      await SDK.blocksLatest();
    } catch (err) {
      expect(err).toBe('Network Error');
    }
  });

  test('auto retry on 429 (rate limiting), should fail because of failed tries > retryCount', async () => {
    mock
      .onGet(path)
      .replyOnce(200, 'dummy response')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(429, 'rate limited')
      .onGet(path)
      .replyOnce(200, 'it works after all');

    const response = await SDK.blocksLatest();
    expect(response).toBe('dummy response');
    try {
      await SDK.blocksLatest();
    } catch (err) {
      expect(err).toMatchObject({
        status_code: 429,
        error: undefined,
        message: '429: undefined',
      });
    }
  });

  test("auto retry shouldn't work for status_code !== 429", async () => {
    mock
      .onGet(path)
      .replyOnce(200, 'dummy response')
      .onGet(path)
      .replyOnce(500, 'internal server error')
      .onGet(path)
      .replyOnce(200, 'it works after all');

    try {
      await SDK.blocksLatest();
    } catch (err) {
      expect(err).toMatchObject({
        status_code: 500,
        error: null,
        message: '500: null',
      });
    }
  });
});
