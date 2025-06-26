<template>
  <UModal>
    <UButton
      label="Logout"
      color="neutral"
      variant="subtle"
      icon="lucide:log-out"
      class="px-4"
    />
    <template #title>
      <h2 class="text-lg font-semibold">Logout</h2>
    </template>
    <template #description>
      <p class="text-sm text-gray-500">Are you sure you want to logout?</p>
    </template>
    <template #footer>
      <UButton
        label="Logout"
        color="error"
        variant="subtle"
        @click="logout"
        icon="lucide:log-out"
        class="px-4 ml-auto"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { logout } = useAuthStore();
</script>
