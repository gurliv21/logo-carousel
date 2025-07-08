// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'LogoCarousel',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'framer-motion',
        },
      },
    },
  },
});
