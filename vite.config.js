// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Watch-Store/', // ✅ IMPORTANT: matches GitHub repo name
  plugins: [react()],
});
