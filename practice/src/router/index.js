import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/view/Login'
import CountDown from '@/view/countDown'
import ChangeColor from '@/view/computedChangeColor'
import Layout from '@/view/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: 'layout',
      component: Layout, // 重定向  // 首页
      children: [{
        path: 'layout',
        component: Layout,
        name: 'layout',
        meta: { title: 'layout', noCache: true } // noCache: 页面不会被缓存，默认false
      },
      {
        path: '/countDown',
        name: 'countDown',
        component: CountDown
      },
      {
        path: '/changeColor',
        name: 'changeColor',
        component: ChangeColor
      }]
    }
  ]
})

