export const defaultRateLimiterConfig = {
  requestsPerSecond: 10,
  burstCooldownPerSecond: 10,
  maxBurst: 500,
};
export type RateLimiterConfig = typeof defaultRateLimiterConfig;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRateLimiter = ({
  burstCooldownPerSecond,
  maxBurst,
  requestsPerSecond,
} = defaultRateLimiterConfig) => {
  let remainingBurst = maxBurst;
  // eslint-disable-next-line @typescript-eslint/ban-types
  let usedRequests = 0;
  let restoreBurstInterval: NodeJS.Timer | null = null;
  const startRestoreBurstInterval = () => {
    restoreBurstInterval = setInterval(() => {
      remainingBurst = Math.min(
        maxBurst,
        remainingBurst + burstCooldownPerSecond,
      );
      if (remainingBurst === maxBurst) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        clearInterval(restoreBurstInterval!);
        restoreBurstInterval = null;
      }
    }, 1000);
  };

  const _readyForNextRequest = (): Promise<void> => {
    if (usedRequests < requestsPerSecond && remainingBurst === maxBurst) {
      usedRequests++;
      if (usedRequests === requestsPerSecond) {
        setTimeout(() => {
          usedRequests = 0;
        }, 1000);
      }
      return Promise.resolve();
    }
    if (remainingBurst > 0) {
      remainingBurst--;
      if (!restoreBurstInterval) {
        startRestoreBurstInterval();
      }
      return Promise.resolve();
    }
    return new Promise(resolve =>
      setTimeout(() => _readyForNextRequest().then(resolve), 1000),
    );
  };

  let previousRequestReady = Promise.resolve();
  return (): Promise<void> => {
    return (previousRequestReady =
      previousRequestReady.then(_readyForNextRequest));
  };
};
