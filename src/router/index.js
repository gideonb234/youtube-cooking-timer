import Vue from 'vue'
import Router from 'vue-router'
import timer from '@/components/timer'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: timer
    },
    {
      path: '/about',
      component: about
    }
  ]
})
