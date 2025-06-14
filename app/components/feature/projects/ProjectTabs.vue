<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const items = [
  {
    label: "Table",
    icon: "i-lucide-table",
    slot: "table" as const,
  },
  {
    label: "Board",
    icon: "i-lucide-kanban",
    slot: "board" as const,
  },
  {
    label: "Metrics",
    icon: "i-lucide-bar-chart",
    slot: "metrics" as const,
  },
  {
    label: "Members",
    icon: "i-lucide-users",
    slot: "members" as const,
  },
] satisfies TabsItem[];
</script>

<template>
  <UTabs
    :items="items"
    variant="link"
    class="gap-4 w-full flex-1 h-full"
    :ui="{
      trigger: 'justify-start text-sm pl-3 gap-2',
      content: 'flex flex-col flex-1',
    }"
  >
    <template #table>
      <ProjectTableView />
    </template>

    <template #board>
      <ProjectBoardView />
    </template>

    <template #metrics>
      <ProjectMetricView />
    </template>

    <template #members>
      <ProjectMemberView />
    </template>
  </UTabs>
</template>
