<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-dvh">
    <div class="flex-1 flex">
      <div class="flex-1 flex flex-col">
        <Header />

        <div class="flex-1 flex">
          <slot />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
