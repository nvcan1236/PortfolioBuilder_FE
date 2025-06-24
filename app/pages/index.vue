<script setup lang="ts"></script>

<template>
  <div
    class="bg-radial from-white to-blue-light from-50% flex-1 w-full relative"
  >
    <div
      class="absolute top-20 left-24 xl:left-54 drop-shadow-xl drop-shadow-blue-light-active hidden lg:block"
    >
      <CustomIcon name="developer" :size="160" />
    </div>
    <div
      class="absolute top-16 right-20 xl:right-40 drop-shadow-xl drop-shadow-blue-light-active hidden lg:block"
    >
      <CustomIcon name="interview" :size="180" />
    </div>
    <div
      class="absolute bottom-10 left-30 xl:left-50 drop-shadow-xl drop-shadow-blue-light-active hidden lg:block"
    >
      <CustomIcon name="cv" :size="200" />
    </div>
    <div
      class="absolute bottom-20 right-30 xl:right-50 drop-shadow-xl drop-shadow-blue-light-active hidden lg:block"
    >
      <CustomIcon name="designer" :size="180" />
    </div>

    <div class="flex flex-col items-center justify-center h-screen">
      <CustomIcon
        name="user-gold"
        :size="200"
        class="drop-shadow-xl drop-shadow-blue-light-active"
      />

      <UInput
        size="xl"
        placeholder="Explore portfolio here..."
        icon="lucide-search"
        class="w-[500px] mb-8 drop-shadow-lg mt-4"
      />
      <p class="text-neutral-500 max-w-md text-center">
        Start building your portfolio today! Manage your projects, skills, and
        experience all in one place.
      </p>
      <div class="flex space-x-4 mt-6">
        <!-- <UButton label="Get Started" color="primary" to="/build" /> -->
        <AuthModal label="Start building your portfolio" class="px-4" />
      </div>
    </div>
  </div>
</template>
