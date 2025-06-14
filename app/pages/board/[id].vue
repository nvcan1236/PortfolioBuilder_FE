<template>
  <div class="flex flex-col h-full">
    <Heading :title="`Board ${id}`" size="lg" class="mb-2" />

    <USeparator />

    <div
      class="flex gap-2 bg-gray-50 flex-1 p-2 mt-2 overflow-x-auto justify-start"
    >
      <BoardColumn title="To Do" color="#F43F5E" class="shrink-0">
        <div class="flex flex-col gap-2">
          <BoardTicketItem
            v-for="ticket in [1]"
            :ticket="{
              id: ticket.toString(),
              title: `Board ${ticket}`,
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, provident! ${ticket}`,
            }"
          />
        </div>
      </BoardColumn>
      <BoardColumn title="In Progress" color="#2196F3" class="shrink-0">
        <div class="flex flex-col gap-2">
          <BoardTicketItem
            v-for="ticket in [1, 2, 3]"
            :ticket="{
              id: ticket.toString(),
              title: `Board ${ticket}`,
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, provident! ${ticket}`,
            }"
          />
        </div>
      </BoardColumn>
      <BoardColumn title="Done" color="#4CAF50" class="shrink-0">
        <div class="flex flex-col gap-2">
          <BoardTicketItem
            v-for="ticket in [1, 2, 3, 4]"
            :ticket="{
              id: ticket.toString(),
              title: `Board ${ticket}`,
              description:
                ticket % 2 === 0
                  ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, provident! ${ticket}`
                  : '',
            }"
          />
        </div>
      </BoardColumn>
      <BoardColumn title="Pending và so long text make this can display for you" color="#ffb801" class="shrink-0">
        <div class="flex flex-col gap-2">
          <BoardTicketItem
            v-for="ticket in [1, 2, 3]"
            :ticket="{
              id: ticket.toString(),
              title: `Board ${ticket}`,
              description:
                ticket % 2 === 0
                  ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, provident! ${ticket}`
                  : '',
            }"
          />
        </div>
      </BoardColumn>
      <NewBoardColumn />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
</script>
