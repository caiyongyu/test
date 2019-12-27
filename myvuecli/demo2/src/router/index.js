import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import Fav from '../components/Fav'
// import Config from '../components/Config'
import A from '../components/A'
// import B from '../components/B'
import C from '../components/C'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: Home
  // },
  // {
  //   path: '/fav',
  //   component: Fav
  // },
  // {
  //   path: '/config',
  //   component: Config
  // }

  {
    path: '/toA',
    // name: 'toA',
    component: A
  },
  {
    path: '/toB/',
    // name: 'toB',
    component: () => import('../components/B.vue'),
    children:[
      {
        path: '/xxx',
        component: A
    }
  ]
  },
  {
    path: '/toC',
    component: C
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
