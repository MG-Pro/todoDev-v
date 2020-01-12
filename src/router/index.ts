import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(Router)

export function createRouter(): Router {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', component: Home},
      {path: '/about', component: Home},
    ],
  })
}
