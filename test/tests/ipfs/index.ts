import { expect, describe, test } from 'vitest';
import { IPFS, ipfsUrl } from '../../utils';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

describe('IPFS', () => {
  // mocks
  const restHandlers = [
    rest.post(ipfsUrl('/ipfs/add'), (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          ipfs_hash: 'QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
          name: 'img.svg',
          size: '5617',
        }),
      );
    }),

    rest.post(
      ipfsUrl('/ipfs/pin/add/QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ'),
      (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            ipfs_hash: 'QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
            state: 'pinned',
          }),
        );
      },
    ),

    rest.get(ipfsUrl('/ipfs/pin/list'), (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            time_created: 'time-created',
            time_pinned: 'time-pinned',
            ipfs_hash: 'ipfs-hash',
            size: 'size',
            state: 'pinned',
          },
        ]),
      );
    }),
  ];

  const server = setupServer(...restHandlers);

  beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test('IPFS flow', async () => {
    console.log('bbbbbbb');
    console.log('aaa', `${__dirname}/../../fixtures/ipfs/img.svg`);
    const addedObject = await IPFS.add(
      `${__dirname}/../../fixtures/ipfs/img.svg`,
    );

    expect(addedObject).toMatchObject({
      ipfs_hash: 'QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
      name: 'img.svg',
      size: '5617',
    });

    const pinnedObject = await IPFS.pin(addedObject.ipfs_hash);

    expect(pinnedObject).toMatchObject({
      ipfs_hash: 'QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
      state: 'pinned',
    });

    const list = await IPFS.list();

    expect(list).toEqual([
      {
        time_created: 'time-created',
        time_pinned: 'time-pinned',
        ipfs_hash: 'ipfs-hash',
        size: 'size',
        state: 'pinned',
      },
    ]);
  });
});
