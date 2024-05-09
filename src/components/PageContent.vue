<script setup lang="ts">
interface Props {
  header: string;
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col px-4 py-5 max-w-[100vw] md:max-w-[calc(100vw-80px)]">
    <slot name="header">
      <div v-if="header" class="flex mb-4">
        <h1 class="font-bold text-xl">{{ header }}</h1>
      </div>
    </slot>

    <div class="flex flex-wrap">
      <slot></slot>
    </div>
  </div>
</template>