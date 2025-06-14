<template>
  <div
    class="flex items-center gap-2"
    :class="className[props.size || 'md'] + ' ' + props.class"
  >
    <h1 :class="headingClass" >{{ props.title }}</h1>
    <p class="text-sm text-gray-500" v-if="props.description">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const className = {
  sm: "text-sm font-medium",
  md: "text-base font-medium",
  lg: "text-lg font-medium",
  xl: "text-xl font-medium",
  "2xl": "text-2xl font-medium",
};

const props = defineProps<{
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  class?: string;
  headingClass?: string
}>();
</script>
