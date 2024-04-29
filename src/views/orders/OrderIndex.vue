<script setup lang="ts">

import { callAxios } from "@/axios/callAxios";
import {onMounted, onUpdated, ref} from "vue";
import {resolveEnvPrefix} from "vite";

const orders = ref()

function getOrders(): void
{
  callAxios('/api/orders')
      ?.then(response => {
        console.log(response.data.data)
        orders.value = response.data.data
      })
}

onMounted(getOrders)
</script>

<template>

  <DataTable :value="orders" tableStyle="min-width: 50rem">
    <PrimeColumn field="id" header="#"></PrimeColumn>
    <PrimeColumn field="number" header="Number"></PrimeColumn>
    <PrimeColumn field="due_date" header="Due date"></PrimeColumn>
    <PrimeColumn field="paid_date" header="Paid date"></PrimeColumn>
  </DataTable>

</template>