<script setup lang="ts">

import InputNumber from '@/components/Form/InputNumber.vue'
import {ref} from "vue";
import type {Order} from "@/interfaces/order";
import type {DataTableRowDoubleClickEvent} from "primevue/datatable";
import FixedFormButtons from "@/components/FixedFormButtons.vue";
import {useRoute} from "vue-router";

interface Daco {
  data: Order
}

const route = useRoute()

const props = defineProps<Daco>()

defineEmits(['submit'])

const rowToEdit = ref<number>(-1)

const changeEditing = (event: DataTableRowDoubleClickEvent) => {
  rowToEdit.value = (event.index == rowToEdit.value) ? 0 : event.index
}
const resetIndex = () => rowToEdit.value = -1


function removeItem(id: number): void
{
  props.data.items?.forEach((item, index, object) => {
    if (item.id == id) {
      object.splice(index, 1)
    }
  })
}

</script>

<template>

  <RouterLink :to="{name: 'orders.edit', params: { id: route.params.id } }">
    <Button label="Pridaj item" class="mb-4"/>
  </RouterLink>

  <DataTable :value="data.items" @row-dblclick="changeEditing">
    <PrimeColumn field="id" header="#"></PrimeColumn>
    <PrimeColumn field="name" header="Name"></PrimeColumn>
    <PrimeColumn field="price" header="Price"></PrimeColumn>
    <PrimeColumn field="quantity" header="Quantity">

      <template #body="slotProps">
        <InputNumber class="w-full" @dblclick="resetIndex" v-if="slotProps.index == rowToEdit" v-model="slotProps.data.quantity" inputId="integeronly" :fraction="false"/>
        <span v-else>
          {{ slotProps.data.quantity }}
        </span>
      </template>

    </PrimeColumn>
    <PrimeColumn field="action" header="Action">
      <template #body="slotProps">
        <div class="flex flex-row gap-2">

          <RouterLink :to="{ name: 'items.edit', params: { id: slotProps.data.id } }" >
            <Button label="Edit" severity="info" />
          </RouterLink>

          <Button label="Remove" severity="danger" @click="removeItem(slotProps.data.id)"/>

        </div>
      </template>
    </PrimeColumn>
  </DataTable>

  <FixedFormButtons @submit="$emit('submit', data)"/>

</template>