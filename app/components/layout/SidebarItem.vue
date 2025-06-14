<template>
  <UButton
    :class="status === 'mini' ? 'justify-center' : ''"
    :icon="icon"
    :to="to || '#'"
    variant="ghost"
    color="neutral"
    class="w-full hover:bg-blue-light hover:text-blue-dark transition-all gap-3"
    :label="status !== 'mini' ? label : ''"
  />
</template>

<script setup lang="ts">
type SidebarItem = {
  label: string;
  icon: string;
  to?: string;
  status: string;
};
const { to, label, icon, status } = defineProps<SidebarItem>();
</script>
