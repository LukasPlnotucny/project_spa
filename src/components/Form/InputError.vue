<script setup lang="ts">
import type { Errors } from "@/interfaces/interfaces";

const props = defineProps<Errors>()
</script>

<template>
  <div class="text-red-500 break-all flex flex-col">
    <span v-for="error in props.erros" :key="error">
      {{ error }}
    </span>
  </div>
</template>