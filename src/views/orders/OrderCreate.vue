<script setup lang="ts">
import type { Order, CreateOrderForm} from "@/interfaces/order";
import type {ItemFormInterface, Item, ItemOrder} from "@/interfaces/item";

import { ref } from "vue";
import { useItemsStore } from "@/stores/items";
import { storeToRefs } from "pinia";
import { callAxios, Method } from "@/axios/callAxios";
import PageContent from "@/components/PageContent.vue";
import ItemForm from "@/views/items/components/ItemForm.vue";
import OrderForm from "@/views/orders/components/OrderForm.vue";

const itemsStore = useItemsStore()
const { items } = storeToRefs(itemsStore)

itemsStore.getItems()

const defaultForm = { items: [] }

const data = ref<CreateOrderForm>({...defaultForm})
const errors = ref<object>({})

function createOrder(): void
{
  items.value.forEach((item: Item) =>  {
    if (item.quantity !== 0) data.value.items.push(item)
  })

  callAxios('/api/orders', Method.POST, data.value)
      .then(() => {
        data.value.items = []
      })
      .catch(err => {
        console.log(err)
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
