<script setup lang="ts">

import { ref } from "vue";
import { useItemsStore } from "@/stores/items";

const itemsStore = useItemsStore()
const { items } = itemsStore()

itemsStore.getItems()


console.log("HELLO: ", items)

interface OrderFormInterface {
  due_date: string,
  items: object
}

const defaultForm = {due_date: '1983-02-14', items: []}

const data = ref<OrderFormInterface>({...defaultForm})
const errors = ref<object>({})

function createOrder() {

}

</script>

<template>

  <form @submit.prevent="createOrder">
    <label>Due date</label>
    <InputDate v-model="data.due_date" />



    <Button label="Submit" type="submit"/>
  </form>

</template>