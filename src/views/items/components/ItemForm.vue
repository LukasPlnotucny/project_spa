<script setup lang="ts">

import FixedFormButtons from "@/components/FixedFormButtons.vue";
import {computed, ref} from "vue";
import type {ItemFormInterface} from "@/interfaces/item";
import InputError from "@/components/Form/InputError.vue";
import InputText from '@/components/Form/InputText.vue'
import InputNumber from '@/components/Form/InputNumber.vue'


const props = defineProps(['item', 'errors'])
defineEmits(['submit'])

const defaultForm = computed(() => props.item ? {...props.item} : {
  name: '',
  price: 0,
  vat: 20
})

const data = ref<ItemFormInterface>({...defaultForm.value})

const priceWithVat = computed(() => {
  let percentage_price = data.value.price * (data.value.vat / 100);

  return +data.value.price + percentage_price
})

const resetForm = () => data.value = {...defaultForm.value}

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row gap-4 w-full">
      <div class="flex flex-col w-1/3">
        <label for="">Nazov</label>
        <InputText v-model="data.name"  class="w-full"/>
        <InputError :errors="errors?.name" />

      </div>

      <div class="flex flex-col w-1/3">
        <label>Price</label>
        <InputNumber  v-model="data.price" />
        <InputError :errors="errors?.price" />
      </div>
    </div>

    <div class="flex flex-row gap-4 w-full">
      <div class="flex flex-col w-1/3">
        <label for="">VAT</label>
        <InputNumber  v-model="data.vat" class="w-full"/>
        <InputError :errors="errors?.vat" />
      </div>

      <div class="flex flex-col w-1/3">
        <label>Price with vat</label>
        <InputNumber  disabled  v-model="priceWithVat" />
      </div>
    </div>
  </div>

  <FixedFormButtons @submit="$emit('submit', data)" @reset="resetForm"/>
</template>