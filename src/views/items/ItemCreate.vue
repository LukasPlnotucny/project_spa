<script setup lang="ts">
import {ref} from "vue";
import {callAxios, Method} from "@/axios/callAxios";
import PageContent from "@/components/PageContent.vue";
import ItemForm from "@/views/items/components/ItemForm.vue";

interface ItemFormInterface {
  name: string,
  price: number
}

const defaultForm = {name: '', price: 0, vat: 0}

const data = ref<ItemFormInterface>({...defaultForm})

function createItem() {
  console.log("POSIELAM: ", data.value)
  callAxios('/api/items', Method.POST, data.value)
      .catch(err => {
        console.log(err)
      })
}

</script>

<template>
  <PageContent header="Item create">

    <LayoutCard class="w-full">

      <template #title>
        <h1>TOTOTOTOTOO</h1>
      </template>

      <template #content>
        <ItemForm :item="data"/>
      </template>

    </LayoutCard>

  </PageContent>
</template>