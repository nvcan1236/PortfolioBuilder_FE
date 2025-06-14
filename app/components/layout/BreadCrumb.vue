<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";

const items: BreadcrumbItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Components",
    to: "/",
  },
  {
    label: "Breadcrumb",
    to: "/",
  },
];
</script>

<template>
  <UBreadcrumb :items="items" class="ml-4">
    <template #separator>
      <span class="text-muted">/</span>
    </template>
  </UBreadcrumb>
</template>
