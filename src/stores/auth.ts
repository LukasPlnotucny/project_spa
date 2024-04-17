import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useRouter} from "vue-router";
import type {User} from "@/interfaces/user";
import { callAxios, Method} from "@/axios/callAxios";


export const useAuthStore = defineStore('user', () => {
    const router = useRouter()

    const authenticated = ref<boolean>(false)

    const currentUser = ref<User | null>(null)


    const setCurrentUser = (data: User | null) => {
        console.log("NASTAVUJE USERA: ", data)
        currentUser.value = data
    }
    const setAuthenticated = () => authenticated.value = true


    function login(data: {email: string, password: string}) {

        const getUser = () => callAxios('/api/user')
            .then(response => {
                setCurrentUser(response.data.data)
                setAuthenticated()
                router.push({name: 'home'})
            }).catch((error) => {
                console.log(error)
            })

        const login = () => callAxios('/login', Method.POST, data)
            .then(getUser)
            .catch(() => {
                console.log("LOGIN ERROR")
            })

        callAxios('/sanctum/csrf-cookie')
            .then(login)

    }


    return { authenticated, currentUser, login }
})