import fs from 'fs';
import path from 'path';
import { BlockFrostAPI } from '../../../src';
import { SDKError } from '../../utils';

const fixturesFolder = path.resolve(__dirname, '../../fixtures');
const files = fs.readdirSync(fixturesFolder);

interface Fixture {
  command: (SDK: BlockFrostAPI) => any;
  response: any;
}

files.forEach(file => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fileContent = require(path.resolve(__dirname, '../../fixtures', file));

  describe(file, () => {
    fileContent.default.forEach((fixture: Fixture) => {
      test(`${fixture.command.toString()} error`, async () => {
        try {
          await fixture.command(SDKError);
        } catch (err) {
          expect(err).toMatchObject({
            error: 'Forbidden',
            message: 'Invalid project token.',
            status_code: 403,
          });
        }
      });
    });
  });
});
