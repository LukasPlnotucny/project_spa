import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "@/stores/auth";

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
      component: () => import('../views/auth/ResetPassword.vue'),
      meta: {auth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/auth/ProfileView.vue'),
      meta: {auth: true}
    },
    {
      path: '/orders',
      name: 'orders.index',
      component: () => import('../views/orders/OrderIndex.vue'),
      meta: {auth: true}
    },
    {
      path: '/items',
      name: 'items.index',
      component: () => import('../views/items/ItemIndex.vue'),
      meta: {auth: true}
    },
    {
      path: '/items/create',
      name: 'items.create',
      component: () => import('../views/items/ItemCreate.vue'),
      meta: {auth: true}
    }

  ]
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()

  await auth.getAuthenticatedUser()

  if (to.meta.auth && ! auth.authenticated) return { name: 'login' }

  if (auth.authenticated && to.name === 'login') return router.back()

})

export default router
