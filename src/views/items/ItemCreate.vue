<script setup lang="ts">
import {ref} from "vue";
import {callAxios, Method} from "@/axios/callAxios";
import PageContent from "@/components/PageContent.vue";
import ItemForm from "@/views/items/components/ItemForm.vue";
import type {Errors} from "@/interfaces/interfaces";

interface ItemFormInterface {
  name: string,
  price: number
}

const errors = ref<Errors>()

function createItem(data: ItemFormInterface): void
{
  callAxios('/api/items', Method.POST, data)
      .then(() => errors.value = {})
      .catch(errorResponse => {
        errors.value = errorResponse.response.data.errors
      })
}
</script>

<template>
  <PageContent header="Item create">

    <LayoutCard class="w-full">

      <template #title>
        <h1>New Item</h1>
      </template>

      <template #content>

        <ItemForm :errors="errors" @submit="createItem"/>

      </template>

    </LayoutCard>

  </PageContent>
</template>