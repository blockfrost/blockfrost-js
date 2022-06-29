module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
      babelConfig: true,
      diagnostics: false,
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/mocks.ts",
    "\\.(css|less|scss|html)$": "<rootDir>/test/mocks.ts",
    "^(types)(.*)$": "<rootDir>/src/types/$2",
    "^(utils)(.*)$": "<rootDir>/src/utils/$2",
  },
  preset: "ts-jest",
};
