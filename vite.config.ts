import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite' // 通过该插件，可以在setup语法中命名组件name
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    DefineOptions(),
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@dkt-plus': resolve(__dirname, 'packages')
    },
    extensions: ['.js', '.json', '.ts']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/dkt-plus/index.ts'),
      name: 'DktPlus',
      fileName: (format) => `dkt-plus.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    },
    outDir: path.resolve(__dirname, 'lib')
  }
})
