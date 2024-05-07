<script setup lang="ts">
interface Defaults {}

const model = defineModel()

withDefaults(defineProps<Defaults>(), {})

</script>

<template>

  <PrimeInputNumber  v-model="model"
                     :minFractionDigits="2"/>

</template>