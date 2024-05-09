import { defineStore } from "pinia";
import { callAxios } from "@/axios/callAxios";
import { ref } from "vue";
import type { Item } from "@/interfaces/item";


export const useItemsStore = defineStore('items', () => {
    const items = ref<Item[]>([])

    const getItems = () => callAxios('/api/items')?.then(response => {
        items.value = response.data.data
    })

    return { items, getItems }
})