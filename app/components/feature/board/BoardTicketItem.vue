<template>
  <UModal>
    <UCard
      variant="subtle"
      class="shadow hover:shadow-lg focus:shadow-md transition-all"
      :ui="{
        footer: '!px-4 !py-2',
        body: '!px-4 !py-2',
      }"
    >
      <div class="flex items-center gap-2 justify-between">
        <h2 class="font-medium flex-1">{{ ticket.title }}</h2>
        <UBadge variant="soft" color="success">Badge</UBadge>
      </div>

      <p
        class="text-xs font-medium text-gray-500 mt-2"
        v-if="ticket.description"
      >
        {{ ticket.description }}
      </p>

      <template #footer>
        <div class="flex items-center justify-between">
          <UAvatarGroup size="2xs">
            <UAvatar
              src="https://github.com/benjamincanac.png"
              alt="Benjamin Canac"
            />
            <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
            <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          </UAvatarGroup>
          <div class="space-x-2">
            <UButton
              icon="lucide:message-circle"
              variant="outline"
              color="neutral"
              size="sm"
            />
            <UButton
              icon="lucide:pencil-line"
              variant="outline"
              color="neutral"
              size="sm"
            />
          </div>
        </div>
      </template>
    </UCard>

    <template #content>
      <DetailTicket />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  ticket: {
    id: string;
    title: string;
    description: string;
    // status: string;
    // createdAt: string;
  };
}>();
</script>
