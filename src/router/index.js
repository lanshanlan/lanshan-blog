import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomePage')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})