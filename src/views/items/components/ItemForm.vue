<script setup lang="ts">

import FixedFormButtons from "@/components/FixedFormButtons.vue";
import {computed, ref} from "vue";
import type {ItemFormInterface} from "@/interfaces/item";
import InputError from "@/components/Form/InputError.vue";
import type {Errors} from "@/interfaces/interfaces";

const props = defineProps(['item', 'errors'])

const defaultForm = computed(() => props.item ? props.item : {

})

const priceWithVat = computed(() => {
  let partial = props.item.price * (props.item.vat / 100);
  let price = +props.item.price

  return price + partial
})

const data = ref<ItemFormInterface>()

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row gap-4 w-full">
      <div class="flex flex-col w-1/3">
        <label for="">Nazov</label>
        <InputText id="password" v-model="item.name" aria-describedby="password-help" class="w-full"/>
        <InputError />

      </div>

      <div class="flex flex-col w-1/3">
        <label>Price</label>
        <InputNumber id="current_confirmation" v-model="item.price" aria-describedby="password-help" />
      </div>
    </div>

    <div class="flex flex-row gap-4 w-full">
      <div class="flex flex-col w-1/3">
        <label for="">VAT</label>
        <InputNumber id="password" v-model="item.vat" aria-describedby="password-help" class="w-full"/>
      </div>

      <div class="flex flex-col w-1/3">
        <label>Price with vat</label>
        <InputNumber id="current_confirmation" disabled  v-model="priceWithVat" aria-describedby="password-help" />
      </div>
    </div>
  </div>

  <FixedFormButtons @submit="$emit('submit', item)"/>
</template>