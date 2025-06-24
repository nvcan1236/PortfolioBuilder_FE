<template>
  <img
    :src="`/icons/${name || 'default'}.png`"
    :alt="name + ' icon'"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script setup lang="ts">
const { name, size = 24 } = defineProps<{
  name?: string;
  size?: number;
}>();
</script>
