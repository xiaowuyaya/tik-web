import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 配置 @ 指向 src
    },
  },
  base: './', // 打包路径
  server: {
    port: 7333, // 端口
    open: true, // 是否自动打开浏览器
    cors: true, // 跨域
  },
})
