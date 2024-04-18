import {ref} from 'vue'
import {defineStore} from 'pinia'
import {type RouteLocationRaw, useRouter} from "vue-router";
import type {User} from "@/interfaces/user";
import {callAxios, Method} from "@/axios/callAxios";


export const useAuthStore = defineStore('user', () => {
    const router = useRouter()

    const authenticated = ref<boolean>(false)
    const redirect = ref<RouteLocationRaw>('/')
    const checkingIfAuthenticated = ref<boolean>(false)

    const currentUser = ref<User | null>(null)

    const setRedirect = (value: string) => redirect.value = value
    const setCheckingIfAuthenticated = () => checkingIfAuthenticated.value = true
    const unsetCheckingIfAuthenticated = () => checkingIfAuthenticated.value = false
    const setCurrentUser = (data: User | null) => currentUser.value = data
    const setAuthenticated = () => authenticated.value = true
    const unsetAuthenticated = () => authenticated.value = false

    async function getAuthenticatedUser()
    {
        await callAxios('/api/user')
            .then(res => {
                setCurrentUser(res.data.data)
                setAuthenticated()
            }).catch(() => {
                console.log("ERROR")
            })
    }

    function resetPassword()
    {
        callAxios('/reset-password', Method.POST)
    }


    function logout()
    {
        callAxios('/logout', Method.POST)
            .then(() => {
                setCurrentUser(null)
                unsetAuthenticated()
                redirect.value = '/'
                router.push({ name: 'login' })
            })
    }


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


    return { authenticated, currentUser, login, getAuthenticatedUser, setRedirect, logout }
})