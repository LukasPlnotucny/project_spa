<script setup lang="ts">

defineProps(['data'])

</script>

<template>

  <DataTable :value="data" stripedRows paginator :rows="5" >
    <PrimeColumn field="id" header="#"></PrimeColumn>
    <PrimeColumn field="number" header="Number"></PrimeColumn>
    <PrimeColumn field="due_date" header="Due date"></PrimeColumn>
    <PrimeColumn field="paid_date" header="Paid date"></PrimeColumn>
    <PrimeColumn field="action" header="Action">
      <template #body="slotProps">
        <div class="flex flex-row gap-2">
          <RouterLink :to="{ name: 'orders.edit', params: { id: slotProps.data.id } }" >
            <Button label="Edit" severity="info" />
          </RouterLink>

          <RouterLink :to="{ name: 'orders.items', params: { id: slotProps.data.id } }" >
            <Button label="Show items" severity="info" />
          </RouterLink>

          <Button label="Remove" severity="danger" />

        </div>
      </template>
    </PrimeColumn>
  </DataTable>

</template>

<style scoped>

</style>