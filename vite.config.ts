import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue(), vueJsx(), cssInjectedByJs(), UnoCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url))
    }
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'my-component',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', /^@?element-plus/, /^@wsjc\//, /^@zmn\//, /^@bee\//, /^@ant\//],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
