<script setup lang="ts">

import { callAxios } from "@/axios/callAxios";
import {onMounted, onUpdated, ref} from "vue";
import PageContent from "@/components/PageContent.vue";

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

  <PageContent header="Items">

    <LayoutCard class="w-full">

      <template #content>
        <div class="w-full">
          <DataTable :value="orders">
            <PrimeColumn field="id" header="#"></PrimeColumn>
            <PrimeColumn field="name" header="Name"></PrimeColumn>
            <PrimeColumn field="price" header="Price"></PrimeColumn>
          </DataTable>
        </div>
      </template>

    </LayoutCard>

  </PageContent>

</template>