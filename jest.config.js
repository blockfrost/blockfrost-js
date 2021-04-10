module.exports = {
  rootDir: '.',
  globals: {
    'ts-jest': {
      PROJECT_ID: true,
      api: true,
    },
  },
  resetMocks: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  setupFiles: ['<rootDir>/test/setup/index.ts'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
  testMatch: ['<rootDir>/test/tests/**/*.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  moduleNameMapper: {
    '^(types)(.*)$': '<rootDir>/src/types/$2',
    '^(utils)(.*)$': '<rootDir>/src/utils/$2',
    '^(sql)(.*)$': '<rootDir>/src/sql/$2',
  },
  preset: 'ts-jest',
};
