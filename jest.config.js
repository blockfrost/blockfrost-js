module.exports = {
  rootDir: '.',
  resetMocks: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/test/tests/**/*.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
  coverageThreshold: {
    global: {
      branches: 37,
      functions: 28,
      lines: 50,
      statements: 51,
    },
  },
};
