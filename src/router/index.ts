import DetailProduct from '@/page/DetailProduct.vue'
import Home1 from '@/page/Home1.vue'
import Homepage from '@/page/Homepage.vue'
import ListProduct from '@/page/ListProduct.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home1,
    },
    {
      path: '/home',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/shoe',
      name: 'shoe',
      component: ListProduct,
    },
    {
      path: '/detail/:id',
      name: 'shoe-detail',
      component: DetailProduct,
    },
  ],
  scrollBehavior() {
    return { top: 0 } // 🔥 sure scroll on top when router
  },
})

export default router
