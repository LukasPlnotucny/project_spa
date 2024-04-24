<script setup lang="ts">

import { callAxios } from "@/axios/callAxios";
import {onMounted, onUpdated, ref} from "vue";

const orders = ref()

function getItems(): void
{
  callAxios('/api/items')
      ?.then(response => {
        orders.value = response.data.data
      })
}

onMounted(getItems)
onUpdated(getItems)

</script>

<template>

  <DataTable :value="orders" tableStyle="min-width: 50rem">
    <PrimeColumn field="id" header="#"></PrimeColumn>
    <PrimeColumn field="name" header="Name"></PrimeColumn>
    <PrimeColumn field="price" header="Price"></PrimeColumn>
  </DataTable>

</template>