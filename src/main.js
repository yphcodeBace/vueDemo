// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { setCookie, getCookie, delCookie } from '@/assets/js/cookie'

Vue.prototype.$cookieStore = {setCookie,getCookie,delCookie}
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  // console.log(to.matched.some(record => record.meta.requireAuth));
  if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
      if (getCookie("userName")) { // 判断当前的token是否存在
        next();
      }
      else {
        next({
          path: '/noPermission',
        })
     }
  }
  else {
      next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
