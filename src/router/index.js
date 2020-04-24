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
import Breadcrumb from '@/pages/Breadcrumb'

//解决路由重复push报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },{
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
        keepAlive: true,
        breadcrumb:[
          {
            name:'Arr',
            path:'/Arr'
          }
        ]
      }
    },{
      path: '/Str',
      name: 'Str',
      component: Str,
      meta: {
        keepAlive: true,
        breadcrumb:[
          {
            name:'Arr',
            path:'/Arr'
          },
          {
            name:'Str',
            path:'/Str'
          }
        ]
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
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb,
      meta: {
        keepAlive: true,
        breadcrumb:[
          {
            name:'Arr',
            path:'/Arr'
          },
          {
            name:'Str',
            path:'/Str'
          },
          {
            name:'Breadcrumb',
            path:'/Breadcrumb'
          }
        ]
      }
    }
  ]
})
