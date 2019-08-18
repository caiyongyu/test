import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/connect',
      name: 'connect',
      component: ()=>import('./views/Connect.vue'),
      children: [
        {
          path:"/connect/test1",
          name:"test1",
          component: ()=>import('./views/Test1.vue')
        },
        {
          path:"/connect/test2/:username/:userage",
          name:"test2",
          component: ()=>import('./views/Test2.vue')
        }
      ]
    },
    {
      path    : "/mine",
      redirect: "/"
    }
  ]
})
