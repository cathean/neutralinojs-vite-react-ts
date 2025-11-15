import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import neutralino from 'vite-plugin-neutralino';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), neutralino({ rootPath: '../' })],
})
