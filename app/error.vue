<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <CustomIcon name="error" :size="200" />
    <h1 class="text-4xl font-bold">{{ error?.statusCode }}</h1>
    <p class="text-center mt-4 text-gray-500">{{ error?.message }}</p>
    <UButton to="/" class="mt-4 px-4" color="neutral" variant="subtle">Go back home</UButton>
  </div>
</template>
