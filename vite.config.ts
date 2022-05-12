import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'interface',
        replacement: path.resolve(__dirname, 'src/interface')
      },
    ],
  },
  plugins: [
    vue(),
  ],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:3010/api",          //这个是你要访问得接口地址  测试服
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})

