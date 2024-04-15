<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const value = ref();


</script>

<template>
  <h1 class="text-red-600 text-bold">KOKOS</h1>
  <div class="flex flex-column gap-2">
    <label for="username">Email</label>
    <InputText id="username" v-model="value" aria-describedby="username-help" />
    <small id="username-help">Enter your username to reset your password.</small>
  </div>
  <Button label="Submit" />
</template>