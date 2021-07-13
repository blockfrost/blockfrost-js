import { IPFS } from '../../utils';

describe('IPFS', () => {
  test('add + pin + list + remove', async () => {
    const addedObject = await IPFS.add({
      path: 'https://i.imgur.com/tEaBDoq.jpeg',
      sourceType: 'url',
    });
    console.log('addedObject', addedObject);
  });
});
