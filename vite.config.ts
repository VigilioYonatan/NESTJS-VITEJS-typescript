import { defineConfig, splitVendorChunkPlugin } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  plugins: [
    liveReload([path.resolve(__dirname, './resources/views/**/*.pug')]),
    splitVendorChunkPlugin(),
    vue(),
  ],
  root: 'resources',
  base: '/dist/',
  resolve: {
    // RESOURCES ALIAS
    alias: {
      '~': path.resolve(__dirname, 'resources', 'ts'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'public', 'dist'),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'resources', 'ts', 'index.ts'),
    },
  },
  server: {
    strictPort: true,
    port: Number(process.env.VITE_PORT),
    host: true,
  },
});
