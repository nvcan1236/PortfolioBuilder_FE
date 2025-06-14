<template>
  <UModal>
    <UButton
      variant="ghost"
      color="neutral"
      label="Add Epic"
      icon="i-lucide-plus"
    />

    <template #title>
      <h2 class="text-lg font-medium">Add Epic</h2>
    </template>

    <template #description>
      <p class="text-sm text-gray-500">Add a new epic to your project.</p>
    </template>
    <template #body>
      <UCard>Add Epic Content</UCard>
    </template>
  </UModal>
</template>

<script setup lang="ts"></script>
