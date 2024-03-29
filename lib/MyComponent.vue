<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyComponent'
})
defineProps({
  title: {
    type: String,
    default: 'hello world'
  }
})
</script>

<style scoped></style>
