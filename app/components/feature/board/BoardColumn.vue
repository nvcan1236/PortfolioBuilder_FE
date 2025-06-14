<template>
  <div class="w-[320px] flex flex-col rounded-sm" :class="classname">
    <div
      class="mb-2 border-l-3 pl-4 rounded-sm mx-2 flex items-center"
      :style="{ borderColor: color }"
    >
      <div class="py-2 flex items-center gap-2 flex-1">
        <div
          class="w-5 h-5 rounded-sm"
          :style="{ backgroundColor: color }"
        ></div>
        <Heading
          :title="title"
          class="font-medium flex-1"
          headingClass="line-clamp-1 overflow-ellipsis"
          size="sm"
        />
        <UBadge
          variant="outline"
          class="rounded-full mr-2"
          color="neutral"
          size="md"
          >2</UBadge
        >
      </div>

      <UButton variant="ghost" color="neutral" icon="lucide:plus" />
    </div>

    <div class="flex-1 flex flex-col justify-between">
      <div
        class="overflow-y-auto hide-scrollbar max-h-[500px] rounded-lg p-2 flex-1"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  title,
  color,
  class: classname,
} = defineProps<{
  title: string;
  color: string;
  class: string;
}>();
</script>
