import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

import Home from '../components/home/Home'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../components/city/City.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../components/detail/Detail.vue')
  },
  {
    path: '/Shopcar',
    name: 'Shopcar',
    component: () => import('../components/shopcar/Shopcar.vue')
  },
  {
    path: '/My',
    name: 'My',
    component: () => import('../components/my/My.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
