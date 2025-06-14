<template>
  <NuxtLayout name="default">
    <template #header>
      <Header>
        <template #header-left>
          <!-- <h1 class="text-lg font-semibold">/projects</h1> -->
        </template>
      </Header>
    </template>
    <template #sidebar>
      <Sidebar :navigation-links="PROJECT_SIDEBAR_LINKS" />
    </template>
    <div class="flex-1 space-y-6">
      <div class="flex gap-4 justify-between items-baseline">
        <Heading title="Workspace" size="lg" />
        <div class="flex gap-4">
          <UButton label="New Workspace" icon="lucide:plus"/>
        </div>
      </div>
      <div>
        <Heading title="Workspace của Cảnh" class="mb-2" />
        <div class="flex gap-4">
          <div class="flex-1 grid grid-cols-3 gap-3 pl-2">
            <ProjectListItem :project="{ id: '1', name: 'Project Demo' }" />
            <ProjectListItem :project="{ id: '2', name: 'Project 2' }" />
            <ProjectListItem :project="{ id: '3', name: 'Project 3' }" />
          </div>
        </div>
      </div>

      <div>
        <Heading title="DX Workspace" class="mb-2" />
        <div class="flex gap-4">
          <div class="flex-1 grid grid-cols-3 gap-3 pl-2">
            <ProjectListItem :project="{ id: '1', name: 'Project Demo' }" />
            <ProjectListItem :project="{ id: '2', name: 'Project 2' }" />
            <ProjectListItem :project="{ id: '3', name: 'Project 3' }" />
            <ProjectListItem :project="{ id: '4', name: 'Project 4' }" />
          </div>
        </div>
      </div>

      <div>
        <Heading title="Dự án Triệu Đô $$$$" class="mb-2" />
        <div class="flex gap-4">
          <div class="flex-1 grid grid-cols-3 gap-3 pl-2">
            <ProjectListItem :project="{ id: '1', name: 'Project Demo' }" />
            <ProjectListItem :project="{ id: '2', name: 'Project 2' }" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
