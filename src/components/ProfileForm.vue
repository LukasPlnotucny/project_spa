<script setup lang="ts">
import PasswordForm from "@/components/PasswordForm.vue";
import {callAxios, Method} from "@/axios/callAxios";
import {ref} from "vue";

interface PasswordFormInterface {
  email: string;
  name: string;
}

const defaultForm = {email: '', name: ''}

const data = ref<PasswordFormInterface>({...defaultForm})
const errors = ref<object>({})

function changeProfileInformation() {
  callAxios('/user/profile-information', Method.PUT, data.value)
      .then(() => errors.value = {})
      .catch(error => {
        throw error
      })
}


</script>

<template>
  <form @submit.prevent="changeProfileInformation">
    <label>Name</label>
    <InputText id="name" v-model="data.name" aria-describedby="password-help" />
    <label>Email</label>
    <InputText id="current_confirmation" v-model="data.email" aria-describedby="password-help" />

    <Button label="Submit" type="submit"/>
  </form>
</template>