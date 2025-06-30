<template>
  <UApp>
    <NuxtLayout default-layout="default">
      <AuthProvider>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </AuthProvider>
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
      href: "/logo_nobg.png",
    },
  ],
});
</script>
