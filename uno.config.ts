import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-xy-center': 'flex justify-center items-center'
  }
})
