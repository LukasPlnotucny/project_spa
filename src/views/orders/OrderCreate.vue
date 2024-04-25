<script setup lang="ts">

import { ref } from "vue";

import { useItemsStore } from "@/stores/items";
import {storeToRefs} from "pinia";
import {callAxios, Method} from "@/axios/callAxios";

interface OrderFormInterface {
  due_date: string,
  items: []
}

const itemsStore = useItemsStore()
const { items } = storeToRefs(itemsStore)

itemsStore.getItems()


const defaultForm = {due_date: '1983-02-14', items: []}

const data = ref({...defaultForm})
const errors = ref<object>({})

function createOrder() {
  items.value.forEach(function (item) {
    if (item.quantity !== 0) data.value.items.push(item)
  })

  console.log("Vysledok: ", data.value)

  callAxios('/api/orders', Method.POST, data)
      .catch(err => {
        console.log(err)
      })
}

</script>

<template>
  <form @submit.prevent="createOrder">
    <label>Due date</label>
    <InputDate v-model="data.due_date" />

    <div class="flex-col">
      <div v-for="item in items" v-bind="item">
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

<style scoped>

</style>