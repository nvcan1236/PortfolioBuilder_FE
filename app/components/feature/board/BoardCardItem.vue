<template>
  <ULink :to="`/board/${board.id}`">
    <UCard >
      <h2>{{ board.title }}</h2>
    </UCard>
  </ULink>
</template>

<script setup lang="ts">
defineProps<{
  board: {
    id: string;
    title: string;
    // description: string;
    // status: string;
    // createdAt: string;
  };
}>();
</script>
