<script setup lang="ts">
import { UPopover } from "#components";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const { logout } = authStore;
const onLoginClick = () => {
  navigateTo("/login");
};
const onLogoutClick = () => {
  logout();
  navigateTo("/login");
};

const searchInput = ref();

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

const handleKeyDown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchInput.value?.input?.focus();
  }
};
</script>

<template>
  <Container class="py-2 flex w-full border-b border-b-blue-light items-center shadow">
    <div class="flex items-center gap-2">
      <UButton variant="ghost" @click="navigateTo('/')">
        <UIcon name="i-lucide-arrow-left" />
      </UButton>
      <UButton variant="ghost" @click="navigateTo('/')">
        <UIcon name="i-lucide-arrow-right" />
      </UButton>

      <BreadCrumb />

      <slot name="header-left" />
    </div>
    <div class="flex items-center justify-end gap-2 flex-1">
      <slot name="header-right" />
      <UInput
        :ref="searchInput"
        icon="i-lucide-search"
        placeholder="Search..."
        class="w-64"
      >
        <template #trailing>
          <UKbd value="Ctrl + K" variant="subtle" />
        </template>
      </UInput>
      <NotificationPopover/>
    </div>
  </Container>
</template>
