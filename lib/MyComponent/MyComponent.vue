<template>
  <div class="vue3-tmp">
    <h1 class="text-red">{{ title }}</h1>
  </div>
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
