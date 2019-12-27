import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Home from '../components/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/toliterature',
    name: 'literature',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/literature/Literature.vue')
  },
  {
    path: '/tomycenter',
    name: 'mycenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/mycenter/Mycenter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
