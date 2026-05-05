import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/link': path.resolve(__dirname, './src/shims/next-link.jsx'),
      'next/image': path.resolve(__dirname, './src/shims/next-image.jsx'),
      'next/navigation': path.resolve(__dirname, './src/shims/next-navigation.js'),
      'next/head': path.resolve(__dirname, './src/shims/next-head.jsx')
    }
  }
});
