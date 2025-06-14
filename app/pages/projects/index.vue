<!-- <template>
  <NuxtLayout name="default">
    <template #header>
      <Header>
        <template #header-left>
          <h1 class="text-lg font-semibold">Projects</h1>
        </template>
      </Header>
    </template>
    <template #sidebar>
      <Sidebar :navigation-links="PROJECT_SIDEBAR_LINKS" />
    </template>
    <div class="flex gap-4 flex-1 p-4">
      <div class="flex-1 flex flex-col gap-4">
        <ProjectListItem :project="{ id: '1', name: 'Project Demo' }" />
        <ProjectListItem :project="{ id: '2', name: 'Project 2' }" />
        <ProjectListItem :project="{ id: '3', name: 'Project 3' }" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const count = ref(0);

const increment = () => {
  count.value++;
};

definePageMeta({
  layout: false,
});
</script> -->


<template>
  <div>
    <h1>Projects</h1>
  </div>
</template>

<script setup lang="ts">

</script>