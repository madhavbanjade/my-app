import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
    build: {
    outDir: 'dist', // Make sure the output directory is dist (default)
  },
  plugins: [react()],
})
