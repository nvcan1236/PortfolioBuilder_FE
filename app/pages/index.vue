<script setup lang="ts">
import { storeToRefs } from 'pinia';
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const { user } = storeToRefs(authStore);
</script>

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
        class="w-[360px] lg:w-[500px] mb-8 drop-shadow-lg mt-4"
        :ui="{
          leading: 'ml-4',
          base: 'pl-20',
        }"
      />
      <p class="text-neutral-500 max-w-xl text-center px-6">
        Start building your portfolio today! Manage your projects, skills, and
        experience all in one place.
      </p>
      <div class="flex space-x-4 mt-12">
        <div v-if="isAuthenticated" class="fixed bottom-8 tool-bar">
          <UButton
            label="Your Portfolio"
            variant="ghost"
            color="neutral"
            to="/p/canh"
            icon="lucide:notebook-pen"
            class="px-4 gap-2"
            :ui="{
              label: 'hidden lg:block',
            }"
          />
          <UButton
            label="Manage Jobs"
            variant="ghost"
            to="/applications"
            color="neutral"
            icon="lucide:briefcase"
            class="px-4 gap-2"
            :ui="{
              label: 'hidden lg:block',
            }"
          />
          <UButton
            label="Evaluate Jobs"
            variant="ghost"
            to="/evaluate"
            color="neutral"
            icon="lucide:sparkles"
            class="px-4 gap-2"
            :ui="{
              label: 'hidden lg:block',
            }"
          />
          <div class="flex items-center">
            <UButton
              variant="link"
              color="neutral"
              class="font-semibold gap-2"
              icon="lucide:user-round"
              :ui="{
                label: 'hidden lg:block',
              }"
            >
              {{ authStore.user?.fullName }}
            </UButton>
            <LogoutModal />
          </div>
        </div>

        <AuthModal label="Start building your portfolio" class="px-4" v-else />
      </div>
    </div>
  </div>
</template>
