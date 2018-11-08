import router from './router'
import store from './store'

import { getToken } from './util/auth'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/authredirect']; // 免登录名单

router.beforeEach((to, from, next) => {
  const token = store.state.token;
  NProgress.start();
  if (getToken()) {
    if (to.path === '/login') { // 防止登录之后后退直接退出到登录页面
      next({ path: '/' });
      NProgress.done();
    } else {

      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo')
          .then(res => {
            const roles = res.data.role;
            next(); // resolve 钩子
          })

      } else {

      }
      next();
      NProgress.done();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: '/login' });
      NProgress.done();
    }
  }
});

router.afterEach((to, from, next) => {
  NProgress.done();
});