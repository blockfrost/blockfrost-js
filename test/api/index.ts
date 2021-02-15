import BlockFrostAPI from '../../src/index';

describe('Params', () => {
  test('projectId param', () => {
    const obj = new BlockFrostAPI({ projectId: '666' });
    expect(obj.projectId).toBe('666');
  });
});
