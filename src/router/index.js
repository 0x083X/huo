import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {path: '/', redirect: '/question'},
  {path: '/question', component: () => import('../views/question/index.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router