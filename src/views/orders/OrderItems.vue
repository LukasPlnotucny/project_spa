<script setup lang="ts">

import { callAxios } from "@/axios/callAxios";
import {onMounted, onUpdated, ref} from "vue";
import {resolveEnvPrefix} from "vite";
import PageContent from "@/components/PageContent.vue";
import OrdersTable from "@/views/orders/components/OrdersTable.vue";
import OrderItemsTable from "@/views/orders/components/OrderItemsTable.vue";
import {useRoute} from "vue-router";

const route = useRoute()

const order = ref()

function getOrderById(): void
{
  callAxios(`/api/orders/${route.params.id}`)
      .then(response => {
        console.log(response.data.data)
        order.value = response.data.data
      })
}

onMounted(getOrderById)
</script>

<template>

  <PageContent header="Orders">

    <LayoutCard class="w-full">

      <template #content>

        <div class="w-full">

          <OrderItemsTable v-if="order" :data="order" />

        </div>

      </template>

    </LayoutCard>

  </PageContent>

</template>