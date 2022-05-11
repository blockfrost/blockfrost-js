import { IPFS } from '../../utils';

describe('IPFS', () => {
  test('flow', async () => {
    const addedObject = await IPFS.add(
      `${__dirname}/../../fixtures/files/img.svg`,
    );

    expect(addedObject).toMatchObject({
      ipfs_hash: 'QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
      name: 'img.svg',
      size: '5617',
    });

    const pinnedObject = await IPFS.pin(addedObject.ipfs_hash);

    expect(pinnedObject).toMatchObject({
      ipfs_hash: 'QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
      state: expect.any(String),
    });

    const list = await IPFS.list();

    expect(list).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          time_created: expect.any(Number),
          time_pinned: expect.any(Number),
          ipfs_hash: expect.any(String),
          size: expect.any(String),
          state: expect.any(String),
        }),
      ]),
    );
  });
});
