import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityName: 6565
  },
  mutations: {
    changeStr(state) {
      state.cityName='123';
    }
  },
  actions: {
  },
  modules: {
  }
})
