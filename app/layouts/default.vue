<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-dvh">
    <div class="flex-1 flex">
      <div>
        <slot name="sidebar">
          <Sidebar :navigation-links="[]" />
        </slot>
      </div>
      <div class="flex-1 flex flex-col h-screen overflow-y-auto relative">
        <div class="sticky top-0 z-20 bg-white">
          <slot name="header">
            <Header />
          </slot>
        </div>

        <div class="bg-blue-light p-2 flex-1">
          <div class="p-4 rounded-sm bg-white h-full shadow">
            <slot />
          </div>
        </div>
      </div>
    </div>

    <!-- <Footer /> -->
  </div>
</template>
