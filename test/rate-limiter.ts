import { BlockFrostAPI } from '../src/index';

describe('rate limiting', async () => {
  test('no rate limiting - 100 requests', async () => {
    const requestCount = 100;

    const api = new BlockFrostAPI({
      projectId: process.env.PROJECT_ID,
    });

    const promises: any[] = [];

    [...Array(requestCount)].map(() => {
      promises.push(api.blocksLatest());
    });

    const result = await Promise.all(promises);
    expect(result.length).toEqual(requestCount);
  });
});
