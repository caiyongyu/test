// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';

Vue.config.productionTip = false;



Vue.use(VueRouter);

// let app=Vue.extend(App);

// let router=new VueRouter();

// router.map({
//   '/goods': {
//     components: goods
//   }
// });

// router.start(app, '#app');

const routes = [
  { path: '/goods', component: goods }
  // { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

const app = new Vue({
  router
}).$mount('#app')

