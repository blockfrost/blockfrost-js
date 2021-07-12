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
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 37,
      functions: 25,
      lines: 40,
      statements: 40,
    },
  },
};
