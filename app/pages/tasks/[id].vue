<template>
  <h1>task: {{ taskId }}</h1>
</template>

<script setup lang="ts">
  const route = useRoute()
  const taskId = route.params.id
</script>