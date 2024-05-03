<script setup lang="ts">

</script>

<template>
  <div class="flex fixed left-[80px] right-0 bottom-0 bg-white h-[64px] z-10 shadow-[0_0px_6px_-1px_rgba(0,0,0,0.1)]">
    <div class="m-auto">
      <Button label="Save" @click="$emit('submit')" />

      <Button label="Reset" severity="secondary" class="ms-2" @click="$emit('reset')" />
    </div>
  </div>
</template>