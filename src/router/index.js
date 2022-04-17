import { createRouter, createWebHistory } from 'vue-router'

const routers = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/download',
    component: () => import('../views/download.vue')
  },
  {
    path: '/open-source',
    component: () => import('../views/open_source.vue')
  },
  {
    path: '/connect',
    component: () => import('../views/connect.vue')
  },
  {
    name: 'Feat',
    path: '/feat',
    component: () => import('../views/feat.vue')
  },
  {
    name: 'Qa',
    path: '/qa',
    component: () => import('../views/qa.vue')
  },
  {
    name:'VersionLog',
    path:"/versionLog",
    component: () => import('../views/version_log.vue')
  }
  ,
  {
    name:'Blacklist',
    path:"/blacklist",
    component: () => import('../views/blacklist.vue')
  }
]


const router = createRouter({
  history:   createWebHistory(),
  routes: routers
})

export default router