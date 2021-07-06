import { BlockFrostAPI } from '../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.metadataTxsLabels(),
    response: expect.arrayContaining([
      expect.objectContaining({
        label: expect.any(String),
        count: expect.any(String),
        cip10: expect.toBeTypeOrNull(String),
      }),
    ]),
  },
] as const;
