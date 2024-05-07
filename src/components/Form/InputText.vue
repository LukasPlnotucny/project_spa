<script setup lang="ts">
interface Defaults {}

const model = defineModel<string>()

withDefaults(defineProps<Defaults>(), {})

</script>

<template>

  <PrimeInputText v-model="model"/>

</template>