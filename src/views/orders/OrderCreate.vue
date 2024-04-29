<script setup lang="ts">
import type { Order, CreateOrderForm} from "@/interfaces/order";
import type { ItemFormInterface, Item } from "@/interfaces/item";

import { ref } from "vue";
import { useItemsStore } from "@/stores/items";
import { storeToRefs } from "pinia";
import { callAxios, Method } from "@/axios/callAxios";

const itemsStore = useItemsStore()
const { items } = storeToRefs(itemsStore)

itemsStore.getItems()

const defaultForm = { items: [] }

const data = ref<CreateOrderForm>({...defaultForm})
const errors = ref<object>({})

function createOrder(): void
{
  items.value.forEach(function (item: Item) {
    if (item.quantity !== 0) data.value.items.push(item)
  })

  callAxios('/api/orders', Method.POST, data.value)
      .catch(err => {
        console.log(err)
      })
}

</script>

<template>
  <form @submit.prevent="createOrder">
    <h1>ITEMS</h1>

    <div class="flex-col">
      <div v-for="item in items" :key="item.id">
        <h1>{{item.name}}</h1>
        <span>{{item.price}}</span>
        <br>
        <span>COUNT: {{item.quantity}}</span>
        <Button @click="item.quantity++">Add item</Button>
        <hr>
      </div>
    </div>

    <Button label="Submit" type="submit"/>
  </form>
</template>
