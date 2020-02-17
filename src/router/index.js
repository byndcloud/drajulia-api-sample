import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const cordova = window.cordova

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/doc',
    name: 'doc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/FillDocument.vue')
  }
]

const router = new VueRouter({
  mode: cordova ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
