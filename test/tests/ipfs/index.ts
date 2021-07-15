import { IPFS } from '../../utils';

describe('IPFS', () => {
  test('flow', async () => {
    const addedObject = await IPFS.add({
      path: 'https://i.imgur.com/tEaBDoq.jpeg',
      sourceType: 'url',
    });

    expect(addedObject).toMatchObject({ path: expect.any(String) });

    const pinnedObject = await IPFS.pin(addedObject.cid);

    expect(pinnedObject).toMatchObject({
      ipfs_hash: expect.any(String),
      state: expect.any(String),
    });

    const list = await IPFS.list(addedObject.cid);

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
