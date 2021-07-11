import { handleError } from '../../utils';
import fs from 'fs';
import { BlockFrostAPI } from '../../index';

export async function IPFSPinAdd(
  this: BlockFrostAPI,
  filePath: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    const data = fs.readFileSync(filePath, 'utf8');
    form.append('file', data);

    this.axiosInstance
      .post(`${this.apiUrl}/ipfs/pin/add`, form, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
