import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // relative paths so the build works both on surge (/) and GitHub Pages (/mb/)
  base: './',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
});
