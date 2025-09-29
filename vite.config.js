import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Flantastic4/',
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.js'],
    globals: true,
  },
})