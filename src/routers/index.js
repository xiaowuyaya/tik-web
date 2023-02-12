import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/main',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: [
      {
        path: '/',
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
