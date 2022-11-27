import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 10_000,
    coverage: {
      include: ['src'],
    },
    globalSetup: ['./test/blockfrost-api-server.ts'],
    include: ['./test/tests/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
