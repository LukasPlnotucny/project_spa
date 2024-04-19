<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import PasswordForm from "@/components/PasswordForm.vue";

const value = ref<string>();


</script>

<template>
  <h1 class="text-red-600 text-bold">KOKOS</h1>
  <div class="flex flex-column gap-2">
    <PasswordForm />
  </div>
</template>