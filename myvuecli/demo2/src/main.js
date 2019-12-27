import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Home from './'

Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.axios=axios

import './assets/swiper.css'

import share from 'vue-shares'
Vue.use(share)
Vue.component('V-share',share)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, )

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
