import Bottleneck from 'bottleneck';

export interface RateLimiterConfig {
  size: number;
  increaseInterval: number;
  increaseAmount: number;
}

// default values are matching https://docs.blockfrost.io/#section/Limits
// burst 500 reqs/50s with 10req/1s cool-off
export const RATE_LIMITER_DEFAULT_CONFIG = {
  size: 500,
  increaseInterval: 1000,
  increaseAmount: 10,
};

export const getLimiter = (config: RateLimiterConfig) => {
  const limiter = new Bottleneck({
    reservoir: config.size,
    reservoirIncreaseAmount: config.increaseAmount,
    reservoirIncreaseInterval: config.increaseInterval,
    reservoirIncreaseMaximum: config.size,
  });

  limiter.on('error', function (error) {
    console.error(error);
  });

  return limiter;
};
