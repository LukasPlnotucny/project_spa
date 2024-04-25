import { defineStore } from "pinia";
import { callAxios } from "@/axios/callAxios";
import { ref } from "vue";


export const useItemsStore = defineStore('items', () => {
    const items = ref([])

    const getItems = () => callAxios('/api/items')?.then(response => {
        items.value = response.data.data
    })

    return { items, getItems }
})