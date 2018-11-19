import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/view/Login'
import CountDown from '@/view/countDown'
import ChangeColor from '@/view/computedChangeColor'
import DepthSelector from '@/view/depthSelector'
import roleTestPage from '@/view/roleTestPage'
import Layout from '@/view/Layout'

Vue.use(Router)

export const constantRouterMap = [
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
    },
    {
      path: '/depthSelector',
      name: 'depthSelector',
      component: DepthSelector
    }]
  }
];

export const asyncRouterMap = [{
  path: '/super_editor',
  component: Layout,
  children: [{
    path: 'index',
    component: roleTestPage,
    name: '权限测试页',
    meta: { role: ['admin', 'super_editor'] } // noCache: 页面不会被缓存，默认false
  }]
}];

export default new Router({
  routes: constantRouterMap
})

