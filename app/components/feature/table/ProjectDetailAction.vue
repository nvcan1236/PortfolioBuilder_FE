<template>
  <div class="flex gap-2 items-center">
    <InviteMemberModal />
    <UPopover
      :content="{
        side: 'bottom',
        align: 'end',
      }"
    >
      <UButton
        label="Add"
        icon="i-lucide-plus"
        trailing-icon="i-lucide-chevron-down"
      />

      <template #content>
        <div class="flex flex-col gap-2 p-2 w-40">
          <AddEpicModal />
          <UButton variant="ghost" color="neutral" label="Add Story" icon="i-lucide-plus" />
          <UButton variant="ghost" color="neutral" label="Add Task" icon="i-lucide-plus" />
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script setup lang="ts"></script>
