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
  // see Bottleneck docs https://www.npmjs.com/package/bottleneck#constructor=

  const limiter = new Bottleneck({
    /* 
      How many jobs can be executed before the limiter stops executing jobs. 
      If reservoir reaches 0, no jobs will be executed until it is no longer 0. 
      New jobs will still be queued up. 
    */
    reservoir: config.size,
    /*
      The increment applied to reservoir when reservoirIncreaseInterval is in use.
    */
    reservoirIncreaseAmount: config.increaseAmount,
    /* Every reservoirRefreshInterval milliseconds, the reservoir value will be automatically updated to the value of reservoirRefreshAmount. 
       The reservoirRefreshInterval value should be a multiple of 250(5000 for Clustering).
    */
    reservoirIncreaseInterval: config.increaseInterval,
    /* 
      The maximum value that reservoir can reach when reservoirIncreaseInterval is in use.
    */
    reservoirIncreaseMaximum: config.size,
  });

  limiter.on('error', function (error) {
    console.error(error);
  });

  return limiter;
};
