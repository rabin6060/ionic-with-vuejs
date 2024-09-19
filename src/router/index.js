import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoryPage from '../pages/MemoryPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path:'/memories',
    component:MemoryPage
  },
  {
    path:'/memories/:id',
    component: () => import("@/pages/MemoryDetail.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
