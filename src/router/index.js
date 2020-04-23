import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Index from '@/pages/Index'
import Arr from '@/pages/Arr'
import Str from '@/pages/Str'
import Homestay from '@/pages/Homestay'
import BFC from '@/pages/BFC'
import Video from '@/pages/Video'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    },{
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true
      }
    },{
      path: '/Arr',
      name: 'Arr',
      component: Arr,
      meta: {
        keepAlive: true
      }
    },{
      path: '/Str',
      name: 'Str',
      component: Str,
      meta: {
        keepAlive: true
      }
    },{
      path: '/Homestay',
      name: 'Homestay',
      component: Homestay,
      meta: {
        keepAlive: true
      }
    },{
      path: '/BFC',
      name: 'BFC',
      component: BFC,
      meta: {
        keepAlive: true
      }
    },{
      path: '/Video',
      name: 'Video',
      component: Video,
      meta: {
        keepAlive: true
      }
    },{
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    }
  ]
})
