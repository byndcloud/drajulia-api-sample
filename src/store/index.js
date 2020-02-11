import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import { getField, updateField } from 'vuex-map-fields'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersistence({
  // Application initial key for store data on localStorage could be based on route / pathaname
  key: `drajulia-api-sample`,
  storage: window.localStorage,
  modules: [
    'auth'
  ]
})

export default new Vuex.Store({
  strict: true,
  getters: {
    getField
  },
  mutations: {
    updateField
  },
  modules: modules,
  plugins: [vuexPersist.plugin]
})
