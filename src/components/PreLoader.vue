<script setup lang="ts">

defineProps(['preloading'])

</script>

<template>

  <div class="flex items-center justify-center min-h-screen bg-white" v-if="preloading">
    <div class="flex flex-col">
      <div class="flex space-x-24">
        <div class="container space-y-10 relative">
          <div class="flex flex-col">
            <div class="flex flex-row space-x-4">
              <div class="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>