import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5173-loulou1994-testingreact-pqz2hrro1s0.ws-eu120.gitpod.io"]
  }
})
