import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Index from '@/pages/Index'
import Arr from '@/pages/Arr'
import Str from '@/pages/Str'
import Homestay from '@/pages/Homestay'
import BFC from '@/pages/BFC'
import Video from '@/pages/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Index',
      name: 'Index',
      component: Index
    },{
      path: '/Arr',
      name: 'Arr',
      component: Arr
    },{
      path: '/Str',
      name: 'Str',
      component: Str
    },{
      path: '/Homestay',
      name: 'Homestay',
      component: Homestay
    },{
      path: '/BFC',
      name: 'BFC',
      component: BFC
    },{
      path: '/Video',
      name: 'Video',
      component: Video
    }
  ]
})
