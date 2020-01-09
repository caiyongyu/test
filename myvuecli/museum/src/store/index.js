import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity='北京';
defaultCity=localStorage.city


export default new Vuex.Store({
  state: {
    cityName: defaultCity
  },
  mutations: {
    changeCity(state,city) {
      // alert(city);
      state.cityName=city
      localStorage.city=city
    }
  },
  actions: {
  },
  modules: {
  }
})
