import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/frontend/src/main.jsx'
    }
  },
  base: '/concecionariaa-6lkl5zbbx-guilherme-andrades-projects/',
})

