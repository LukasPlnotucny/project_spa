<script setup lang="ts">

defineProps(['data'])

</script>

<template>

  <DataTable :value="data">
    <PrimeColumn field="id" header="#"></PrimeColumn>
    <PrimeColumn field="name" header="Name"></PrimeColumn>
    <PrimeColumn field="price" header="Price"></PrimeColumn>
    <PrimeColumn field="action" header="Action">
      <template #body="slotProps">
        <div class="flex flex-row gap-2">

          <RouterLink :to="{ name: 'items.edit', params: { id: slotProps.data.id } }" >
            <Button label="Edit" severity="info" />
          </RouterLink>

          <Button label="Remove" severity="danger" />

        </div>
      </template>
    </PrimeColumn>
  </DataTable>

</template>