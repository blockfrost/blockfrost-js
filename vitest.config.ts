import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 60_000,
    coverage: {
      include: ['src'],
      functions: 37,
      lines: 37,
      statements: 37,
      branches: 60,
    },
    include: ['./test/tests/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
