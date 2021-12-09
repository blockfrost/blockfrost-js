module.exports = {
  rootDir: '.',
  resetMocks: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/test/tests/**/*.ts'],
  coverageReporters: ['json-summary', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  transformIgnorePatterns: [`/node_modules/(?!serialize-error)`],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
