import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {vitePluginForArco} from "@arco-plugins/vite-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginForArco()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
