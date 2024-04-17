<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import {reactive, ref} from "vue";

const auth = useAuthStore()

const data = reactive({
  email: '',
  password: ''
})

</script>

<template>
  <div
      class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 flex justify-center">
    <div class="w-full">
      <div class="text-center">
        <h1 class="text-3xl font-semibold text-gray-900">Sign in</h1>
        <p class="mt-2 text-gray-500">Sign in below to access your account</p>
      </div>
      <div class="mt-5">
        <form @submit.prevent="auth.login(data)">
          <div class="relative mt-6">
            <FloatLabel>
              <InputText v-model="data.email" id="email" aria-describedby="email-help" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 placeholder:text-transparent focus:border-gray-500 focus:outline-none"/>
              <label for="email">Email</label>
            </FloatLabel>
          </div>
          <div class="relative mt-6">
            <FloatLabel>
              <InputText v-model="data.password" id="password" aria-describedby="password-help" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 placeholder:text-transparent focus:border-gray-500 focus:outline-none"/>
              <label for="password">Password</label>
            </FloatLabel>
          </div>
          <div class="my-6 justify-center items-center">
            <Button label="Submit" type="submit"/>
          </div>
          <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
            <a href="#!"
               class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
              up
            </a>.
          </p>
          <p class="text-center text-sm text-gray-500 mt-4">Don&#x27;t have an account yet?
            <a href="#!" class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Forgot password</a>.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>