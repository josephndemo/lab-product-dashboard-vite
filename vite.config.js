/// vitest.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,               // allows using expect, test, etc. globally
    environment: 'happy-dom',    // DOM environment for React testing
    setupFiles: [],              // optional, for global test setup
    reporters: ['default', 'junit'], // default console + JUnit XML
    outputFile: './junit.xml',       // JUnit XML output file
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
})