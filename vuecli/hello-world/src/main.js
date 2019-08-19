// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// import store from './store/store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


//实例化 store
// new Vue({
//   el: '#app',
//   store,
//   router,
//   template: '<App/>',
//   components: { App }
// }) 

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
