<!-- <script setup lang="ts">
  const router = useRouter();
  definePageMeta({
    layout: "no-sidebar",
  });
</script>

<template>
  <div class="flex w-full justify-center items-center gap-2">
    <UCard @click="router.push('/projects')">
      <template #header>
        <h1 class="font-bold">Project</h1>
      </template>
      <p>
        Manage your projects and tasks
      </p>
    </UCard>
    <UCard @click="router.push('/board')">
      <template #header>
        <h1 class="font-bold">Board</h1>
      </template>
      <p>
        Manage your projects and tasks
      </p>
    </UCard>
  </div>
</template> -->

<template></template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const { isAuthenticated } = useAuthStore();

if (!isAuthenticated) {
  navigateTo("/login");
} else {
  navigateTo("/workspace");
}
</script>
