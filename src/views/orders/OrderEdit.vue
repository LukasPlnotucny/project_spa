<script setup lang="ts">


import {callAxios, Method} from "@/axios/callAxios";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import {useItemsStore} from "@/stores/items";
import type { Item } from "@/interfaces/item";
import type { EditOrderForm } from "@/interfaces/order";
import PageContent from "@/components/PageContent.vue";
import OrderForm from "@/views/orders/components/OrderForm.vue";

const route = useRoute()
const itemsStore = useItemsStore()

const data = ref<EditOrderForm>()

function getOrderById(): void
{
  callAxios(`/api/orders/${route.params.id}`)
      .then(response => {
        data.value = response.data.data
      })
}

function updateOrder(data: EditOrderForm): void
{
  callAxios(`/api/orders/${route.params.id}`, Method.PUT, data)
      .catch(err => {
        console.log(err)
      })
}

onMounted(getOrderById)
</script>

<template>

  <PageContent header="Item create">

    <LayoutCard class="w-full">

      <template #title>
        <h1>Order number: {{ data?.number }}</h1>
      </template>

      <template #content>

        <OrderForm v-if="data" :order="data" @submit="updateOrder"/>

      </template>


    </LayoutCard>

  </PageContent>

</template>