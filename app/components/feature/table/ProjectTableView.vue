<script setup lang="ts">
import { UAvatar, UAvatarGroup, UBadge, UButton, UTooltip } from "#components";
import type { TableColumn } from "@nuxt/ui";
import Heading from "~/components/ui/Heading.vue";

type Task = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: "pending" | "doing" | "done" | "failed";
  assignee: string;
  priority: "high" | "medium" | "low";
};

const table = useTemplateRef("table");

const pagination = ref({
  pageIndex: 0,
  pageSize: 5,
});

const data = ref<Task[]>([
  {
    id: "4600",
    name: "Create a login page",
    startDate: "2024-03-11T15:30:00",
    endDate: "2024-03-11T15:30:00",
    status: "doing",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4599",
    name: "Create a register page",
    startDate: "2024-03-11T10:10:00",
    endDate: "2024-03-11T10:10:00",
    status: "failed",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4598",
    name: "Create a dashboard page",
    startDate: "2024-03-11T08:50:00",
    endDate: "2024-03-11T08:50:00",
    status: "done",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4597",
    name: "Create a profile page",
    startDate: "2024-03-10T19:45:00",
    endDate: "2024-03-10T19:45:00",
    status: "pending",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4596",
    name: "Create a settings page",
    startDate: "2024-03-10T15:55:00",
    endDate: "2024-03-10T15:55:00",
    status: "done",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4595",
    name: "Create a settings page",
    startDate: "2024-03-10T15:55:00",
    endDate: "2024-03-10T15:55:00",
    status: "done",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4594",
    name: "Create a settings page",
    startDate: "2024-03-10T15:55:00",
    endDate: "2024-03-10T15:55:00",
    status: "done",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4593",
    name: "Create a settings page",
    startDate: "2024-03-10T15:55:00",
    endDate: "2024-03-10T15:55:00",
    status: "done",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4593",
    name: "Create a settings page",
    startDate: "2024-03-10T15:55:00",
    endDate: "2024-03-10T15:55:00",
    status: "done",
    assignee: "John Doe",
    priority: "high",
  },
  {
    id: "4593",
    name: "Create a settings page",
    startDate: "2024-03-10T15:55:00",
    endDate: "2024-03-10T15:55:00",
    status: "done",
    assignee: "John Doe",
    priority: "high",
  },
]);

const columns: TableColumn<Task>[] = [
  {
    id: "expand",
    cell: ({ row }) =>
      h(UButton, {
        color: "neutral",
        variant: "ghost",
        size: "sm",
        icon: "i-lucide-chevron-down",
        square: true,
        "aria-label": "Expand",
        ui: {
          leadingIcon: [
            "transition-transform",
            row.getIsExpanded() ? "duration-200 rotate-180" : "",
          ],
        },
        onClick: () => row.toggleExpanded(),
      }),
  },
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "name",
    header: "Name2",
  },
  {
    accessorKey: "name",
    header: "Name3",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => {
      return new Date(row.getValue("startDate")).toLocaleDateString();
    },
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => {
      return new Date(row.getValue("endDate")).toLocaleDateString();
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const color = {
        pending: "warning" as const,
        doing: "info" as const,
        done: "success" as const,
        failed: "error" as const,
      }[row.getValue("status") as string];

      return h(UBadge, { class: "capitalize", variant: "subtle", color }, () =>
        row.getValue("status")
      );
    },
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: ({ row }) => {
      return h(UAvatarGroup, { max: 3 }, [
        h(UTooltip, { text: "John Doe" }, [
          h(UAvatar, {
            alt: "John Doe",
            size: "sm",
            src: "https://i.pravatar.cc/150?img=1",
            class: "hover:ring-2 hover:ring-primary",
          }),
        ]),
        h(UTooltip, { text: "Jane Doe" }, [
          h(UAvatar, {
            alt: "Jane Doe",
            size: "sm",
            src: "https://i.pravatar.cc/150?img=2",
            class: "hover:ring-2 hover:ring-primary",
          }),
        ]),
        h(UTooltip, { text: "John Smith" }, [
          h(UAvatar, {
            alt: "John Smith",
            size: "sm",
            src: "https://i.pravatar.cc/150?img=3",
            class: "hover:ring-2 hover:ring-primary",
          }),
        ]),
      ]);
    },
  },
];

const items = ref([
  {
    label: "Backlog",
  },
  {
    label: "Todo",
  },
  {
    label: "In Progress",
  },
  {
    label: "Done",
  },
]);
const value = ref({
  label: "Todo",
});

const expanded = ref({});
</script>

<template>
  <div class="flex items-center">
    <Heading title="Task List" />
    <div class="flex gap-6 items-center w-1/2 ml-auto">
      <div class="flex-1 flex items-center gap-2">
        <span class="text-sm font-semibold">Epic: </span>
        <USelectMenu v-model="value" :items="items" class="flex-1" />
      </div>
      <div class="flex-1 flex items-center gap-2">
        <span class="text-sm font-semibold">Story: </span>
        <USelectMenu v-model="value" :items="items" class="flex-1" />
      </div>
    </div>
  </div>
  <UTable
    class="flex-1 mt-4 overflow-auto max-h-[calc(100vh-240px)]"
    ref="table"
    v-model:pagination="pagination"
    sticky
    v-model:expanded="expanded"
    :data="data"
    :columns="columns"
  >
    <template #expanded="{ row }">
      <div>
        <div
          class="flex gap-6 justify-between items-center px-4 py-2 hover:bg-yellow-light-hover transition-all rounded-sm"
        >
          <UIcon name="i-lucide-notebook" />
          <div class="flex gap-2 justify-between flex-1">
            <b>
              {{ row.original.name }}
            </b>
            <div>
              {{ row.original.startDate }}
            </div>
            <div>
              {{ row.original.endDate }}
            </div>
            <div>
              {{ row.original.status }}
            </div>
            <div>
              {{ row.original.assignee }}
            </div>
          </div>
        </div>
        <div
          class="flex gap-6 justify-between items-center px-4 py-2 hover:bg-yellow-light-hover transition-all rounded-sm"
        >
          <UIcon name="i-lucide-notebook" />
          <div class="flex gap-2 justify-between flex-1">
            <b>
              {{ row.original.name }}
            </b>
            <div>
              {{ row.original.startDate }}
            </div>
            <div>
              {{ row.original.endDate }}
            </div>
            <div>
              {{ row.original.status }}
            </div>
            <div>
              {{ row.original.assignee }}
            </div>
          </div>
        </div>
        <div
          class="flex gap-6 justify-between items-center px-4 py-2 hover:bg-yellow-light-hover transition-all rounded-sm"
        >
          <UIcon name="i-lucide-notebook" />
          <div class="flex gap-2 justify-between flex-1">
            <b>
              {{ row.original.name }}
            </b>
            <div>
              {{ row.original.startDate }}
            </div>
            <div>
              {{ row.original.endDate }}
            </div>
            <div>
              {{ row.original.status }}
            </div>
            <div>
              {{ row.original.assignee }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </UTable>
  <div class="flex justify-center border-t border-default pt-4">
    <UPagination
      :default-page="
        (table?.tableApi?.getState().pagination.pageIndex || 0) + 1
      "
      :items-per-page="table?.tableApi?.getState().pagination.pageSize"
      :total="table?.tableApi?.getFilteredRowModel().rows.length"
      @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
      variant="ghost"
      size="sm"
      :ui="{

      }"
    />
  </div>
</template>
