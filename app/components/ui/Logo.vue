<template>
  <NuxtLink to="/">
    <div
      class="text-lg font-bold px-2 text-blue-normal-active min-w-[48px] text-center"
      :class="className"
    >
      {{ variant === "mini" ? "S" : "" }}
      {{ variant === "normal" ? "SPM" : "" }}
      {{ variant === "extend" ? "SMART PROJECT MANAGEMENT" : "" }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { variant = "normal", className } = defineProps<{
  variant?: "mini" | "extend" | "normal";
  className?: string;
}>();
</script>
