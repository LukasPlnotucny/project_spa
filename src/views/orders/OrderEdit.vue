<script setup lang="ts">
import {callAxios, Method} from "@/axios/callAxios";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import type {OrderFormInterface} from "@/interfaces/order";
import PageContent from "@/components/PageContent.vue";
import OrderForm from "@/views/orders/components/OrderForm.vue";
import type {Errors} from "@/interfaces/interfaces";
import router from "@/router";

const route = useRoute()

const errors = ref<Errors>()

const data = ref<OrderFormInterface>()

function getOrderById(): void
{
  callAxios(`/api/orders/${route.params.id}`)
      .then(response => {
        data.value = response.data.data
      })
}

function updateOrder(data: OrderFormInterface): void
{
  callAxios(`/api/orders/${route.params.id}`, Method.PUT, data)
      .then(() => {
        errors.value = {}
        router.push({name: 'orders.index'})
      })
      .catch(err => {
        errors.value = err.response.data.errors
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

        <OrderForm v-if="data" :order="data" :errors="errors" @submit="updateOrder"/>

      </template>


    </LayoutCard>

  </PageContent>

</template>