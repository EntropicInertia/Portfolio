import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For EntropicInertia.github.io (user site, not project site)
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
