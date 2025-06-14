<template>
  <UApp>
    <NuxtLayout default-layout="default">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
useHead({
  title: " Project Management App",
  meta: [
    {
      name: "description",
      content: "Project Management App",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/spm.png",
    },
  ],
});
</script>
