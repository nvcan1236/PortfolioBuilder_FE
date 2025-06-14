<template>
  <UPopover :content="{ side: 'bottom', align: 'end' }">
    <UButton variant="ghost" class="rounded-full">
      <UChip color="error" class="p-px">
        <UIcon size="18px" name="i-lucide-bell" />
      </UChip>
    </UButton>

    <template #content>
      <div class="w-[400  px] p-4 rounded-sm">
        <div>
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium">Notifications</span>
            <UButton variant="ghost" size="sm">
              <UIcon name="i-lucide-check" /> Mark all as read
            </UButton>
          </div>
          <ul class="mt-2 text-xs space-y-2">
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
          </ul>
        </div>
        <div></div>
      </div>
    </template>
  </UPopover>
</template>
