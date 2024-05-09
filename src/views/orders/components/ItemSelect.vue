<script setup lang="ts">

import type {ItemOrder} from "@/interfaces/item";
import {computed} from "vue";

const item = defineModel<ItemOrder>({default: {
    name: '',
    price: 0,
    quantity: 0,
    vat: 20
  }})

const totalPrice = computed(() => {
  return item.value.price * item.value.quantity
})


const totalPriceWithVat = computed(() => {
  let total = item.value.price * item.value.quantity
  let percentage_price = total * (item.value.vat / 100)

  return total + percentage_price
})
</script>

<template>
  <slot>
    <div class="flex flex-row gap-8 justify-between mt-2 w-full" v-if="item.quantity > 0">
      <span>{{ item.name }}</span>
      <span>{{ totalPrice }}</span>
      <span>{{ totalPriceWithVat }}</span>
      <div class="w-14 h-8 bg-red-700 text-white" @click="item.quantity = 0">Delete</div>
      <PrimeInputNumber v-model="item.quantity" showButtons buttonLayout="horizontal" style="width: 3rem" :min="0">
        <template #incrementbuttonicon>
          +
        </template>
        <template #decrementbuttonicon>
          -
        </template>
      </PrimeInputNumber>
    </div>
  </slot>

</template>