<script setup lang="ts">
import FixedFormButtons from "@/components/FixedFormButtons.vue";

import { useItemsStore } from "@/stores/items";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import type { DropdownChangeEvent } from "primevue/dropdown";
import type { ItemOrder } from "@/interfaces/item";
import ItemSelect from "@/views/orders/components/ItemSelect.vue";
import type { OrderFormInterface } from "@/interfaces/order";
import { callAxios } from "@/axios/callAxios";
import { useRoute } from "vue-router";
import InputError from "@/components/Form/InputError.vue";

const itemStore = useItemsStore()
const { items } = storeToRefs(itemStore)
const route = useRoute()

itemStore.getItems()

const selectedItem = ref()

const props = defineProps(['order', 'errors'])
defineEmits(['submit'])

const defaultForm = ref( props.order ? {...props.order} : {
  items: [],
})

const data = ref<OrderFormInterface>({...defaultForm.value})

function addNewItem(selectedItem: ItemOrder): void
{
  let alreadyAdded = data.value.items.find(item => item.id === selectedItem.id)

  if ( alreadyAdded ) return

  selectedItem.quantity++

  data.value.items.push(selectedItem)
}

watch(() => data.value.items, () => {
  data.value.items.forEach((item, index, object) => {
    if (item.quantity  <= 0) {
      object.splice(index, 1)
    }
  })
}, {deep: true});

async function resetForm(): Promise<void>
{
  await callAxios(`/api/orders/${route.params.id}`)
      .then(response => {
        data.value = response.data.data
      })
}

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
        <InputError :errors="errors?.items"/>

        <div class="flex flex-col mt-8">
          <div v-for="(pickedItem, index) in data.items"  :key="index">
            <ItemSelect  v-model="data.items[index]"/>
            <div v-for="(error_message, error_key, error_index) in errors" :key="error_index">
              <InputError v-if="index == error_index" :errors="error_message"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <FixedFormButtons @submit="$emit('submit', data)" @reset="resetForm"/>

</template>