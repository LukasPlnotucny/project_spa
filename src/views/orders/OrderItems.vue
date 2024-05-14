<script setup lang="ts">

import {callAxios, Method} from "@/axios/callAxios";
import {onMounted, onUpdated, ref} from "vue";
import {resolveEnvPrefix} from "vite";
import PageContent from "@/components/PageContent.vue";
import OrdersTable from "@/views/orders/components/OrdersTable.vue";
import OrderItemsTable from "@/views/orders/components/OrderItemsTable.vue";
import {useRoute} from "vue-router";
import FixedFormButtons from "@/components/FixedFormButtons.vue";
import {OrderFormInterface} from "@/interfaces/order";
import router from "@/router";

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

function updateOrder(data: OrderFormInterface): void
{
  callAxios(`/api/orders/${route.params.id}`, Method.PUT, data)
      .then(() => {
        router.push({name: 'orders.index'})
      })
      .catch(err => {
        console.log('Error')
      })
}

onMounted(getOrderById)
</script>

<template>

  <PageContent header="Orders">

    <LayoutCard class="w-full">

      <template #content>

        <div class="w-full">

          <OrderItemsTable v-if="order" :data="order" @submit="updateOrder"/>

        </div>

      </template>

    </LayoutCard>

  </PageContent>

</template>