<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>

  <div class="flex">

    <div class="flex-1">


      <div class="flex flex-col bg-gray-100 mt-[70px] min-h-[calc(100vh-70px)]">

        <RouterView />

      </div>

    </div>

  </div>

</template>
