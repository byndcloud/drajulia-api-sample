import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import '@babel/polyfill'

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: 'https://api-production-tyxxtz2vcq-uc.a.run.app/api/v1',
  timeout: 60000
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
