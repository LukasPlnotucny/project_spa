<script setup lang="ts">
import {onMounted, onUpdated, ref} from "vue";
import {callAxios, Method} from "@/axios/callAxios";
import PageContent from "@/components/PageContent.vue";
import ItemForm from "@/views/items/components/ItemForm.vue";
import {useRoute} from "vue-router";
import type { ItemFormInterface } from "@/interfaces/item";
import type {Errors} from "@/interfaces/interfaces";
const route = useRoute()

const errors = ref<Errors>()

const data = ref<ItemFormInterface>()

function getItemByIt(): void
{
  callAxios(`/api/items/${route.params.id}`)
      .then(response => {
        data.value = response.data.data
      })
}

function updateItem(data: ItemFormInterface): void
{
  callAxios(`/api/items/${route.params.id}`, Method.PUT, data)
      .catch(err => {
        errors.value = err.response.data.errors
      })
}

onMounted(getItemByIt)
onUpdated(getItemByIt)
</script>

<template>
  <PageContent header="Item create">

    <LayoutCard class="w-full">

      <template #title>
        <div class="flex flex-row">
          <h1>{{ data?.name }}</h1>

          <div class="ms-auto">
            <RouterLink :to="{ name: 'items.index' }">
              <Button
                  label="Back to index"
                  severity="secondary"
                  icon="ri-list-check"
              />
            </RouterLink>
        </div>
        </div>
      </template>

      <template #content>
        <ItemForm  v-if="data" :item="data" :errors="errors" @submit="updateItem" />
      </template>

    </LayoutCard>

  </PageContent>
</template>