import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "@/stores/auth";
import {storeToRefs} from "pinia";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {auth: true},
      children: []
    },
    {
      path: '/reset-password',
      name: 'reset.password',
      component: () => import('../views/auth/ResetPassword.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    }
  ]
})

router.beforeEach(to => {
  const auth = useAuthStore()
  const { currentUser } = storeToRefs(auth)

  console.log('AKTUAL: ', auth.authenticated)
  if ( !auth.authenticated && to.name !== 'login') {
    return {name: 'login'}
  }

})




export default router
