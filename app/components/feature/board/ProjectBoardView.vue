<template>
  <div class="grid grid-cols-3 gap-4">
    <NuxtLink v-for="board in [1, 2, 3, 4]" :to="`/board/${board}`">
      <UCard :key="board" variant="subtle" class="shadow hover:shadow-lg transition-all">
        <h3 class="text-xl font-bold mb-2">Board</h3>
        <p class="text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iure
          pariatur voluptate sed velit deleniti ea quo excepturi, facilis quia?
        </p>
      </UCard>
    </NuxtLink>
  </div>
</template>
