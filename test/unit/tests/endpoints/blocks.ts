import fixtures from '../../fixtures/blocks';

describe('blocks', () => {
  fixtures.forEach(fixture => {
    test(fixture.testName, async () => {
      const response = await fixture.command();
      expect(response).toMatchObject(fixture.response);
    });
  });
});
