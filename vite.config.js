/// vitest.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            // optional, allows test(), expect() without import
    environment: 'jsdom',     // use jsdom instead of happy-dom
    reporters: ['default', 'junit'], 
    outputFile: './junit.xml',
  },
})