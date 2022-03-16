import { createRouter, createWebHistory } from 'vue-router'

const routers = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../views/index.vue')
  }
]


const router = createRouter({
  history:   createWebHistory(),
  routes: routers
})

export default router