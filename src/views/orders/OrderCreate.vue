<script setup lang="ts">
import type { OrderFormInterface } from "@/interfaces/order";
import { ref } from "vue";
import { callAxios, Method } from "@/axios/callAxios";
import PageContent from "@/components/PageContent.vue";
import OrderForm from "@/views/orders/components/OrderForm.vue";
import type { Errors } from "@/interfaces/interfaces";

const errors = ref<Errors>()

function createOrder(data: OrderFormInterface): void
{
  callAxios('/api/orders', Method.POST, data)
      .catch(err => {
        errors.value = err.response.data.errors
      })
}

</script>

<template>

  <PageContent header="Item create">

    <LayoutCard class="w-full">

      <template #title>
        <h1>New Order</h1>
      </template>

      <template #content>

        <OrderForm :errors="errors" @submit="createOrder"/>

      </template>


    </LayoutCard>

  </PageContent>

</template>
