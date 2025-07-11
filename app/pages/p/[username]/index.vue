<template>
  <div class="flex flex-col min-h-screen relative">
    <Template :template-key="value" />
    <div class="fixed bottom-8 tool-bar z-50 left-1/2 -translate-x-1/2">
      <UButton
        label="Home"
        variant="ghost"
        color="neutral"
        icon="lucide:home"
        to="/"
        class="px-4 gap-2"
        :ui="{
          label: 'hidden lg:block',
        }"
      />
      <div class="flex items-center">
        <USelect v-model="value" :items="items" class="w-48" icon="lucide:layout" />
      </div>
      <UButton
        label="Edit"
        variant="ghost"
        color="neutral"
        icon="lucide:edit"
        to="/build"
        class="px-4 gap-2"
        :ui="{
          label: 'hidden lg:block',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TemplateKey } from "~/components/templates/templatesConfig";
const value = ref<TemplateKey>("default");
const items: { value: TemplateKey; label: string }[] = [
  { value: "modern", label: "Modern" },
  { value: "classic", label: "Classic" },
  { value: "minimal", label: "Minimal" },
  { value: "default", label: "Default" },
];
</script>
