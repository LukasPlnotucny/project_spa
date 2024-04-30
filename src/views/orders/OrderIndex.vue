<script setup lang="ts">

import { callAxios } from "@/axios/callAxios";
import {onMounted, onUpdated, ref} from "vue";
import {resolveEnvPrefix} from "vite";
import PageContent from "@/components/PageContent.vue";

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

  <PageContent header="Orders">

    <LayoutCard class="w-full">

      <template #content>

        <div class="w-full">
          <DataTable :value="orders" stripedRows paginator :rows="5" >
            <PrimeColumn field="id" header="#"></PrimeColumn>
            <PrimeColumn field="number" header="Number"></PrimeColumn>
            <PrimeColumn field="due_date" header="Due date"></PrimeColumn>
            <PrimeColumn field="paid_date" header="Paid date"></PrimeColumn>
          </DataTable>
        </div>

      </template>

    </LayoutCard>

  </PageContent>

</template>