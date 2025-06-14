<template>
  <UModal>
    <UButton variant="subtle" color="neutral" label="Invite" icon="i-lucide-plus" />

    <template #title>
      <h2 class="text-lg font-medium">Invite Member</h2>
    </template>

    <template #description>
      <p class="text-sm text-gray-500">Invite a new member to your project.</p>
    </template>
    <template #body>
      <UCard>Invite Member Content</UCard>
    </template>
  </UModal>
</template>

<script setup lang="ts"></script>
