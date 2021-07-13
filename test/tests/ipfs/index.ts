import { IPFS } from '../../utils';

describe('IPFS', () => {
  test('add + pin + list + remove', async () => {
    const addedObject = await IPFS.add({
      path: 'https://i.imgur.com/tEaBDoq.jpeg',
      sourceType: 'url',
    });

    expect(addedObject).toMatchObject({ path: expect.any(String) });

    const pinnedObject = await IPFS.pin(addedObject.cid);

    expect(pinnedObject).toMatchObject({
      ipfs_hash: expect.any(String), state: expect.any(String)
    });
  });
});
