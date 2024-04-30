<script setup lang="ts">
import {ref} from "vue";
import {callAxios, Method} from "@/axios/callAxios";
import PageContent from "@/components/PageContent.vue";

interface ItemFormInterface {
  name: string,
  price: number
}

const defaultForm = {name: '', price: 0}

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

      <template #content>
        <div class="flex flex-col">
          <div class="flex">
            <label>Name</label>
            <InputText id="password" v-model="data.name" aria-describedby="password-help" />
            <label>Price</label>
            <InputNumber id="current_confirmation" v-model="data.price" aria-describedby="password-help" />

            <Button label="Submit" type="submit"/>
          </div>
        </div>
      </template>

    </LayoutCard>

  </PageContent>
</template>