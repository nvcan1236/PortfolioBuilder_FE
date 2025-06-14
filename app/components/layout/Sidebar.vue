<template>
  <div
    v-if="sideBarStatus !== 'hide'"
    class="px-4 py-2 flex flex-col justify-between h-full transition-all"
    :class="sideBarStatus === 'mini' ? 'w-[80px]' : 'w-[200px]'"
  >
    <div>
      <div class="flex items-center justify-between mb-12">
        <Logo :variant="sideBarStatus === 'mini' ? 'mini' : 'normal'" />
        <UButton
          :variant="sideBarStatus === 'mini' ? 'outline' : 'ghost'"
          icon="i-lucide-panel-left"
          class="ml-auto bg-blue-light relative z-30"
          @click="toggleSidebar"
        />
      </div>

      <nav class="space-y-2">
        <!-- <UButton
          variant="ghost"
          class="w-full text-xs text-muted-foreground text-blue-normal-active font-semibold"
          :label="sideBarStatus === 'mini' ? '' : 'Main'"
        /> -->
        <SidebarItem
          v-for="link in mainItems"
          :key="link.to"
          :to="link.to"
          :status="sideBarStatus"
          :icon="link.icon"
          :label="link.label"
        />

        <USeparator class="mt-2 mb-4 px-2" />

        <UCollapsible :unmount-on-hide="false" default-open>
          <UButton
            variant="ghost"
            class="w-full text-xs text-muted-foreground flex items-center mb-2"
            :class="
              sideBarStatus === 'mini' ? 'justify-center' : 'justify-between'
            "
            trailing-icon="i-lucide-chevron-down"
            :label="sideBarStatus !== 'mini' ? 'Recent' : ''"
          />

          <template #content>
            <SidebarItem
              v-for="link in recentItems"
              :to="link.to"
              :status="sideBarStatus"
              :icon="link.icon"
              :label="link.label"
              :key="link.to"
            />
          </template>
        </UCollapsible>

        <UCollapsible :unmount-on-hide="false">
          <UButton
            variant="ghost"
            class="w-full text-xs text-muted-foreground flex items-center mb-2"
            :class="
              sideBarStatus === 'mini' ? 'justify-center' : 'justify-between'
            "
            trailing-icon="i-lucide-chevron-down"
            :label="sideBarStatus !== 'mini' ? 'Workspace A' : ''"
          />

          <template #content>
            <SidebarItem
              v-for="link in recentItems"
              :key="link.to"
              :to="link.to"
              :status="sideBarStatus"
              :icon="link.icon"
              :label="link.label"
            />
          </template>
        </UCollapsible>

        <UCollapsible :unmount-on-hide="false">
          <UButton
            variant="ghost"
            class="w-full text-xs text-muted-foreground flex items-center mb-2"
            :class="
              sideBarStatus === 'mini' ? 'justify-center' : 'justify-between'
            "
            trailing-icon="i-lucide-chevron-down"
            :label="sideBarStatus !== 'mini' ? 'Dự án triệu $' : ''"
          />

          <template #content>
            <SidebarItem
              v-for="link in recentItems"
              :key="link.to"
              :to="link.to"
              :status="sideBarStatus"
              :icon="link.icon"
              :label="link.label"
            />
          </template>
        </UCollapsible>
      </nav>
    </div>

    <UPopover
      :content="{
        side: 'bottom',
        align: 'start',
      }"
    >
      <div
        class="px-2 py-1 text-sm flex items-center gap-2 border border-gray-200 rounded-lg bg-white"
      >
        <UAvatar size="sm"> C </UAvatar>
        <span
          v-if="sideBarStatus === 'extend'"
          class="font-semibold flex-1 text-blue-normal-active"
          >Username</span
        >
        <UButton
          v-if="sideBarStatus === 'extend'"
          variant="ghost"
          icon="i-lucide-chevron-down"
        />
      </div>

      <template #content>
        <div class="px-4 py-2 rounded-sm w-[200px]">
          <UButton
            variant="ghost"
            color="neutral"
            class="w-full gap-3"
            label="Profile"
            icon="i-lucide-user"
          >
          </UButton>
          <UButton
            variant="ghost"
            color="error"
            class="w-full gap-3"
            icon="i-lucide-log-out"
            label="Logout"
            @click="logout"
          >
          </UButton>
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script setup lang="ts">
import { USeparator } from "#components";

const sideBarStatus = ref("extend");
type SidebarItem = {
  label: string;
  icon: string;
  to: string;
};
defineProps<{
  navigationLinks?: SidebarItem[];
}>();

const mainItems = ref<SidebarItem[]>([
  {
    label: "Workspace",
    icon: "i-lucide-home",
    to: "/workspace",
  },
]);

const recentItems = ref<SidebarItem[]>([
  {
    label: "Project 1",
    icon: "i-lucide-folder",
    to: "/projects/1",
  },
  {
    label: "Project 2",
    icon: "i-lucide-folder",
    to: "/projects/2",
  },
  {
    label: "Project 3",
    icon: "i-lucide-folder",
    to: "/projects/3",
  },
]);

const toggleSidebar = () => {
  sideBarStatus.value = sideBarStatus.value === "mini" ? "extend" : "mini";
};
const {logout} = useAuthStore()
</script>
