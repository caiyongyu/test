import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'movie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/movie/Movie.vue'),
      // children:[
      //   {
      //     path:"/movie/detail",
      //     name:"moviedetail",
      //     component:()=>import("./views/movie/MovieDetail.vue")
      //   }
      // ]
    },{
      path:"/music",
      name:"music",
      component:() => import("./views/music/Music.vue")
    },{
      path:"/book",
      name:"book",
      component:() => import("./views/book/Book.vue")
    },{
      path:"/talk",
      name:"talk",
      component:() => import("./views/talk/Talk.vue")
    },{
      path:"/movie/detail",
      name:"moviedetail",
      component:()=>import("./views/movie/MovieDetail.vue")
    },{
      path:"/book/detail",
      name:"bookdetail",
      component:()=>import("./views/book/BookDetail.vue")
    }
  ]
})
