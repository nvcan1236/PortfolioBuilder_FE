<template>
  <UModal>
    <UButton color="error" variant="ghost" icon="lucide:log-out" class="px-4" />
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
        @click="handleLogout"
        icon="lucide:log-out"
        class="px-4 ml-auto"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useLogoutMutation } from "~/api/mutations/auth";

const { logoutDone } = useAuthStore();
const { mutateAsync: logout } = useLogoutMutation();

const handleLogout = async () => {
  try {
    await logout();
    logoutDone();
    navigateTo("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
