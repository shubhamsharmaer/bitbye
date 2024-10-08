import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // ... other config options ...
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: 'https://api.coingate.com',
        changeOrigin: true,
        secure: false,
      },
    } : {},
  },
  plugins: [react()],
});
