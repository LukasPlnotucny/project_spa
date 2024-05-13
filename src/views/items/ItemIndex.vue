<script setup lang="ts">

import { callAxios } from "@/axios/callAxios";
import {onMounted, onUpdated, ref} from "vue";
import PageContent from "@/components/PageContent.vue";
import ItemsTable from "@/views/items/components/ItemsTable.vue";

const items = ref()

function getItems(): void
{
  callAxios('/api/items')
      ?.then(response => {
        items.value = response.data.data
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
          <ItemsTable :data="items" />
        </div>
      </template>

    </LayoutCard>

  </PageContent>

</template>