import type { Plugin } from 'vue'
import MyComponent from './MyComponent.vue'

const components = [MyComponent]

export default {
  install(app, ...options) {
    components.forEach((i) => {
      app.component(i.name, i)
    })
  }
} as Plugin

export { MyComponent }
