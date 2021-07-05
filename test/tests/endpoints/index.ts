import fs from 'fs';
import path from 'path';

const fixturesFolder = path.resolve(__dirname, '../../fixtures');
const files = fs.readdirSync(fixturesFolder);

interface Fixture {
  command: () => any;
  response: any;
}

files.forEach(file => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fileContent = require(path.resolve(__dirname, '../../fixtures', file));

  describe(file, () => {
    fileContent.default.forEach((fixture: Fixture) => {
      test(fixture.command.toString(), async () => {
        const response = await fixture.command();
        expect(response).toMatchObject(fixture.response);
      });
    });
  });
});
