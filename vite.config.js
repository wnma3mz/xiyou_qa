import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path - change 'xiyou_qa' to match your repository name
  base: process.env.NODE_ENV === 'production' ? '/xiyou_qa/' : '/',
  server: {
    port: 8888
  }
})
