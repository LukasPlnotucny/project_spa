<script setup lang="ts">
import FixedFormButtons from "@/components/FixedFormButtons.vue";
import InputError from "@/components/Form/InputError.vue";
import InputNumber from "@/components/Form/InputNumber.vue";
import InputText from "@/components/Form/InputText.vue";

import {useItemsStore} from "@/stores/items";
import {storeToRefs} from "pinia";
import {computed, ref, watch} from "vue";
import type {DropdownChangeEvent} from "primevue/dropdown";
import type {Item, ItemOrder} from "@/interfaces/item";
import ItemSelect from "@/views/orders/components/ItemSelect.vue";
import OrderForm from "@/views/orders/components/OrderForm.vue";
import type {CreateOrderForm} from "@/interfaces/order";

const itemStore = useItemsStore()
const { items } = storeToRefs(itemStore)

itemStore.getItems()

const selectedItem = ref()

const props = defineProps(['order'])

const data = ref<CreateOrderForm>(props.order ? {...props.order} : {
  number: '',
  items: []
})

function addNewItem(selectedItem: ItemOrder) {
  let alreadyAdded = data.value.items.find(item => item.id === selectedItem.id)

  if ( alreadyAdded ) return

  selectedItem.quantity++

  data.value.items.push(selectedItem)
}

watch(data.value.items, () => {
  data.value.items.forEach((item, index, object) => {
    if (item.quantity  <= 0) {
      object.splice(index, 1)
    }
  })
}, {deep: true});



</script>

<template>

  <div class="flex flex-col gap-4">
    <div class="flex flex-row gap-4 w-1/2">
      <div class="flex flex-col">
        <label for="">Items</label>



        <SelectInput v-model="selectedItem" :options="items" filter optionLabel="name" placeholder="Select an Item" class="w-full md:w-14rem"
                     @change="(event: DropdownChangeEvent) => addNewItem(event.value)">
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex align-items-center">
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
            {{ slotProps.placeholder }}
        </span>
          </template>
          <template #option="slotProps">
            <div class="flex align-items-center">
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </SelectInput>

        <div class="flex flex-col mt-8">
          <ItemSelect v-for="(pickedItem, index) in data.items" v-model="data.items[index]" :key="index" />
        </div>


      </div>
    </div>
  </div>

  <FixedFormButtons @submit="$emit('submit', data)"/>

</template>