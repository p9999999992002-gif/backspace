import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['newton-appraisive-jeanelle.ngrok-free.dev'],
  },
  css: {
    postcss: './postcss.config.js',
  },
})
