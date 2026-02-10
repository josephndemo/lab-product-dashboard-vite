/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,               // allows using `describe`, `it`, `expect` without imports
    environment: 'happy-dom',    // lightweight DOM environment
    setupFiles: './src/setupTests.js', // optional, for setup like React Testing Library
    css: true,                   // process CSS modules if you use them
    coverage: {
      provider: 'c8',            // coverage provider
      reporter: ['text', 'lcov'],// coverage reports
    },
  },
});