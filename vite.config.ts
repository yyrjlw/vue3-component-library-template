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
      entry: fileURLToPath(new URL('./lib/index.ts', import.meta.url)),
      fileName: 'index'
    }
  }
})
