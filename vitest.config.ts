import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 5000,
    mockReset: true,
    coverage: {
      reporter: ['json-summary'],
      include: ['src'],
    },
    include: ['./test/tests/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
