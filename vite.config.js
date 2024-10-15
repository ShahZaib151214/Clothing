// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Clothing/', // Must match your GitHub Pages repository name
  plugins: [react()],
});
