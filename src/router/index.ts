import CheckOutComponent from '@/components/CheckOutComponent.vue'
import Cart from '@/page/Cart.vue'
import CheckOut from '@/page/CheckOut.vue'
import DetailProduct from '@/page/DetailProduct.vue'
import Favourite from '@/page/Favourite.vue'
import Home1 from '@/page/Home1.vue'
import ListProduct from '@/page/ListProduct.vue'
import SignIn from '@/page/SignIn.vue'
import SignUp from '@/page/SignUp.vue'

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
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
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
    {
      path: '/favorite',
      name: 'favorite',
      component: Favourite,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOut,
    },
  ],
  scrollBehavior() {
    return { top: 0 } // 🔥 sure scroll on top when router
  },
})

export default router
