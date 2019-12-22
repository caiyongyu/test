import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/js/font'
import './assets/css/reset.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper, )

import FastClick from 'fastclick'
FastClick.attach(document.body);

import './assets/css/iconfont.css'

import axios from 'axios'
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
