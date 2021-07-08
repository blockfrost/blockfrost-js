module.exports = {
  rootDir: '.',
  resetMocks: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/test/tests/**/*.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  moduleNameMapper: {
    '^(types)(.*)$': '<rootDir>/src/types/$2',
    '^(utils)(.*)$': '<rootDir>/src/utils/$2',
    '^(sql)(.*)$': '<rootDir>/src/sql/$2',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 37,
      functions: 28,
      lines: 50,
      statements: 51,
    },
  },
};
