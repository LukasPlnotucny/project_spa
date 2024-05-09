<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {useAuthStore} from "@/stores/auth";
import PageContent from "@/components/PageContent.vue";

const auth = useAuthStore()

</script>

<template>
  <PageContent header="Home">
    <template #content>
    </template>
  </PageContent>

</template>
