import fs from 'fs';
import path from 'path';
import { SDK_ERROR } from '../../utils';
import { TestFixture } from '../../types';

const fixturesFolder = path.resolve(__dirname, '../../fixtures/endpoints');
const files = fs.readdirSync(fixturesFolder);

files.forEach(file => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fileContent = require(path.resolve(
    __dirname,
    '../../fixtures/endpoints',
    file,
  ));

  describe(file, () => {
    fileContent.default.forEach((fixture: TestFixture) => {
      test(`${fixture.command.toString()} error`, async () => {
        try {
          await fixture.command(SDK_ERROR);
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
