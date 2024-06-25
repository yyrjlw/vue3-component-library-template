export default {
  plugins: {
    'postcss-prefix-selector': {
      prefix: '.vue3-tmp', //css类前缀，推荐使用你的库名
      ignoreFiles: ['node_modules']
    }
  }
}
