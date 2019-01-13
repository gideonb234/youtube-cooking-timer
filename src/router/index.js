import Vue from 'vue'
import Router from 'vue-router'
import videoplayer from '@/components/videoplayer'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: videoplayer
    },
    {
      path: '/about',
      component: about
    }
  ]
})
