import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue(), vueJsx(), cssInjectedByJs()],
  resolve: {
    alias: {}
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'my-component',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
