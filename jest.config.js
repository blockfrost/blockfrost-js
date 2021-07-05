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
  moduleNameMapper: {
    '^(types)(.*)$': '<rootDir>/src/types/$2',
    '^(utils)(.*)$': '<rootDir>/src/utils/$2',
    '^(sql)(.*)$': '<rootDir>/src/sql/$2',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  preset: 'ts-jest',
};
