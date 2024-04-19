<script setup lang="ts">
import { callAxios, Method } from "@/axios/callAxios";
import {useAuthStore} from "@/stores/auth";
import { ref } from "vue";

const auth = useAuthStore()

interface PasswordFormInterface {
  current_password: string;
  password: string;
  password_confirmation: string;
}

const defaultForm = { current_password: '', password: '', password_confirmation: '' }
const data = ref<PasswordFormInterface>({...defaultForm})
const errors = ref<object>({})

function changePassword() {
  console.log(data.value)
  callAxios('/user/password', Method.PUT, data.value)
      .then(() => errors.value = {})
      .catch(error => {
        throw error
      })
}

</script>

<template>
  <form @submit.prevent="changePassword">
    <label>Current</label>
    <InputText id="password" v-model="data.current_password" aria-describedby="password-help" />
    <label>New password</label>
    <InputText id="current_confirmation" v-model="data.password" aria-describedby="password-help" />
    <label>New password</label>
    <InputText id="current_confirmation" v-model="data.password_confirmation" aria-describedby="password-help" />

    <Button label="Submit" type="submit"/>
  </form>


</template>