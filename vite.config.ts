import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default defineConfig(({mode}) => {
  return {
    build: {
      target: 'esnext'
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, 'node_modules')
      }
    },
    plugins: [vue()]
  }
})