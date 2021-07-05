import { SDK } from '../utils';

export default [
  {
    command: () => SDK.root(),
    response: {
      url: 'https://blockfrost.io/',
      version: '0.6.0',
    },
  },
] as const;
