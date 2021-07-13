import fs from 'fs';
import path from 'path';
import { SDK } from '../../utils';
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

  describe('file', () => {
    fileContent.default.forEach((fixture: TestFixture) => {
      test(fixture.command.toString(), async () => {
        const response = await fixture.command(SDK);
        expect(response).toMatchObject(fixture.response);

        if (fixture.itemsCount) {
          expect(response.length).toBe(fixture.itemsCount);
          // console.log(
          //   `
          //   TEST: itemsCount

          //   Response length:
          //   ${response.length}

          //   Expected equal to:
          //   ${fixture.itemsCount}
          //   `,
          // );
        }

        if (fixture.itemsCountMinimum) {
          expect(response.length).toBeGreaterThanOrEqual(
            fixture.itemsCountMinimum,
          );
          // console.log(
          //   `
          //   TEST: itemsCountMinimum

          //   Response length:
          //   ${response.length}

          //   Expected greater than or equal:
          //   ${fixture.itemsCountMinimum}
          //   `,
          // );
        }
      });
    });
  });
});
