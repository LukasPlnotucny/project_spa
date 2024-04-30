<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from "@/components/SideBar.vue";
</script>

<template>

  <div class="flex h-screen">

    <SideBar/>

    <div class="flex-1">


      <div class="flex-1 ml-24 p-4">

        <RouterView />

      </div>

    </div>

  </div>

</template>
