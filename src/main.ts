import Vue from 'vue'
import {createRouter} from './router'
import App from './App.vue'
import './assets/css/common.scss'

export function createApp(): any {
  const router = createRouter()

  const app = new Vue({
    router,
    render: (h): any => h(App),
  })

  return {app, router}
}


