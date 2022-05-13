import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: '/bans',
        name: 'Bans',
        component: () => import('@/views/Bans/index.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact/index.vue'),
      },
      {
        path: '/donate',
        name: 'Donate',
        component: () => import('@/views/Donate/index.vue'),
      },
    ],
  },
  // 条款相关
  {
    path: '/agreement',
    name: 'Agreement',
    component: () => import('@/views/Terms/agreement.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/Terms/privacy.vue'),
  },
]

const router = createRouter({
  history,
  routes,
})

export default router
