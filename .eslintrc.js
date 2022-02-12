module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:unicorn/recommended',
  ],
  rules: {
    'no-console': 'off',
    'arrow-parens': [2, 'as-needed'],
    'prettier/prettier': 2,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'unicorn/prefer-module': 0,
    'unicorn/prefer-node-protocol': 0,
  },
};
