import { createRateLimiter } from '../../src/utils/ratelimiter';

describe('ratelimiter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('limits requests rate', async () => {
    jest.spyOn(global, 'setTimeout');
    jest.spyOn(global, 'setInterval');

    const rateLimiterConfig = {
      requestsPerSecond: 1,
      burstCooldownPerSecond: 1,
      maxBurst: 2,
    };

    const readyForNextRequest = createRateLimiter(rateLimiterConfig);
    const requests = Array.from({ length: 5 }).map(readyForNextRequest);
    await Promise.all(requests);
    await new Promise(r => setTimeout(r, 2010));
    const requests2 = Array.from({ length: 5 }).map(readyForNextRequest);
    await Promise.all(requests2);

    expect(setTimeout).toHaveBeenCalledTimes(7); // 3 + 3 + 1 (delay in test)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(setInterval).toHaveBeenCalledTimes(2); // number of bursts
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
