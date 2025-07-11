<template>
  <NuxtLink to="/">
    <div
      class="text-lg font-bold px-2 text-blue-normal-active min-w-[48px] text-center"
      :class="className"
    >
      {{ variant === "mini" ? "PB" : "" }}
      {{ variant === "normal" ? "Portfolio Builder" : "" }}
      {{ variant === "extend" ? "PORTFOLIO BUILDER" : "" }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { variant = "normal", className } = defineProps<{
  variant?: "mini" | "extend" | "normal";
  className?: string;
}>();
</script>
