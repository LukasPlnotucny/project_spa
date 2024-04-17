<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {useAuthStore} from "@/stores/auth";

const auth = useAuthStore()

</script>

<template>
  <main>
    <h1>SOM TUUUUUUUUUUU: {{auth.authenticated}}</h1>
    <TheWelcome />
  </main>
</template>
