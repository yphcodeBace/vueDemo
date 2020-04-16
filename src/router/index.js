import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Index from '@/pages/Index'
import Arr from '@/pages/Arr'
import Str from '@/pages/Str'
import Homestay from '@/pages/Homestay'

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
    }
  ]
})
