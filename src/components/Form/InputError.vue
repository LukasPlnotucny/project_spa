<script setup lang="ts">
interface Props {
  errors?: string[];
}

const props = defineProps<Props>()

</script>

<template>
  <div class="text-red-500 break-all flex flex-col">
    <span v-for="error in props.errors" :key="error">
      {{ error }}
    </span>
  </div>
</template>