// import fs from 'fs';
import { IPFS } from '../../utils';

describe('IPFS', () => {
  test('pin add', async () => {
    // const file = fs.readFileSync(`${__dirname}/test-file.txt`);
    const res = await IPFS.ipfsAdd(`${__dirname}/test-file.txt`);
    console.log('res', res);
  });
});
