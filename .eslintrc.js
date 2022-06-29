module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-console": "off",
    "arrow-parens": [2, "as-needed"],
    "prettier/prettier": 2,
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "prefer-destructuring": ["error", { object: true, array: false }],
  },
  settings: {
    next: {
      rootDir: ["packages/*/", "examples/*/"],
    },
  },
};
