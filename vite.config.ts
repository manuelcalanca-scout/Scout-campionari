import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Scout-campionari/' // <-- CAMBIA QUESTO! Es: /spec-sheet-app/
})