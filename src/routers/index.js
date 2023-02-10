import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/main',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
