<template>
  <slot />
</template>

<script setup lang="ts">
import { useMeQuery } from "~/api/queries/auth";
import { useAuthStore } from "~/stores/useAuth";
import { watchEffect } from "vue";

const authStore = useAuthStore();
const { data } = useMeQuery();

watchEffect(() => {
  if (data.value?.data.id) {
    authStore.loginDone();
    authStore.setUser(data.value.data);
  }
});
</script>
