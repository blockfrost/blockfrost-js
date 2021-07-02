module.exports = {
  rootDir: '.',
  resetMocks: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
  testMatch: ['<rootDir>/test/unit/tests/**/*.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  moduleNameMapper: {
    '^(types)(.*)$': '<rootDir>/src/types/$2',
    '^(utils)(.*)$': '<rootDir>/src/utils/$2',
    '^(sql)(.*)$': '<rootDir>/src/sql/$2',
  },
  preset: 'ts-jest',
};
