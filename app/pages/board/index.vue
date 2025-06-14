<template>
  <NuxtLayout name="default">
    <template #header>
      <Header>
        <template #header-left>
          <h1 class="text-lg font-semibold">Board</h1>
        </template>
      </Header>
    </template>
    <template #sidebar>
      <Sidebar :navigation-links="KANBAN_SIDEBAR_LINKS" />
    </template>
    <div>
      <div class="flex gap-4">
        <div class="grid grid-cols-4 gap-4">
          <BoardCardItem :board="board" />
          <BoardCardItem :board="board" />
          <BoardCardItem :board="board" />
          <BoardCardItem :board="board" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const board = {
  id: "1",
  title: "Board 1",
};
</script>
