<script setup lang="ts">


import {callAxios, Method} from "@/axios/callAxios";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import {useItemsStore} from "@/stores/items";
import type { Item } from "@/interfaces/item";
import type { EditOrderForm } from "@/interfaces/order";

const route = useRoute()
const itemsStore = useItemsStore()

const defaultForm = {}
const data = ref<EditOrderForm>({})
const { items } = storeToRefs(itemsStore)

const decreaseQuantity = ( item: Item ) => item.quantity = item.quantity > 0 ? item.quantity - 1 : item.quantity
const increaseQuantity = ( item: Item ) => item.quantity++

function getOrderById(): void
{
  callAxios(`/api/orders/${route.params.id}`)
      .then(response => {
        console.log(response.data.data)
        data.value = response.data.data
      })
}

function updateOrder(): void
{
  items.value.forEach(function (item) {
    if (item.quantity !== 0) data.value.items.push(item)
  })

  console.log(data.value)

  callAxios(`/api/orders/${route.params.id}`, Method.PUT, data.value)
      .catch(err => {
        console.log(err)
      })
}

onMounted(getOrderById)
</script>

<template>

  <form @submit.prevent="updateOrder">
    <label>Due date</label>
    <h1>{{data.number}}</h1>
<!--    <InputDate v-model="data.due_date" />-->

    <div class="flex-col">
      <div v-for="item in data.items" v-bind="item">
        <h1>{{item.name}}</h1>
        <span>{{item.price}}</span>
        <br>
        <span>COUNT: {{item.quantity}}</span>
        <Button @click="increaseQuantity(item)">Add item</Button>
        <Button @click="decreaseQuantity(item)">Remove item</Button>
        <hr>
      </div>
    </div>

    <Button label="Submit" type="submit"/>
  </form>

</template>