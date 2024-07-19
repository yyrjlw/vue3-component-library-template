import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineViteConfigWithDefault } from '@wsjc/configuration'

export default defineViteConfigWithDefault({
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
      fileName: 'index',
      formats: ['es']
    }
  }
})
