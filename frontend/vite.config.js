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
  base: 'concecionariaa-drk7q62df-guilherme-andrades-projects.vercel.app',
})

