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
  // base: process.env.NODE_ENV === 'production' ? '/concecionariaa-drk7q62df-guilherme-andrades-projects/' : '/',
})

