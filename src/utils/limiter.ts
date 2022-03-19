import {
  BurstyRateLimiter,
  RateLimiterMemory,
  RateLimiterQueue,
} from 'rate-limiter-flexible';

export interface RateLimiterConfig {
  burst: {
    points: number;
    duration: number;
  };
  linear: {
    points: number;
    duration: number;
  };
}

// default values are matching https://docs.blockfrost.io/#section/Limits
// burst 500 reqs/50s with 10req/1s cool-off
export const RATE_LIMITER_DEFAULT_CONFIG = {
  burst: {
    points: 500,
    duration: 50,
  },
  linear: {
    points: 10,
    duration: 1,
  },
};

export const getLimiter = (config: RateLimiterConfig) => {
  const burstyLimiter = new BurstyRateLimiter(
    new RateLimiterMemory({
      points: config.linear.points,
      duration: config.linear.duration,
    }),
    new RateLimiterMemory({
      keyPrefix: 'burst',
      points: config?.burst.points,
      duration: config?.burst.points,
    }),
  );

  const limiterQueue = new RateLimiterQueue(burstyLimiter);
  return limiterQueue;
};
