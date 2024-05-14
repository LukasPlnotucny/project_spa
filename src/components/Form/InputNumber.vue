<script setup lang="ts">
interface Defaults {
  fraction: boolean
}

const model = defineModel()

withDefaults(defineProps<Defaults>(), {
  fraction: true
})

</script>

<template>

  <PrimeInputNumber  v-model="model"
                     :minFractionDigits="fraction ? 2 : 0"/>

</template>