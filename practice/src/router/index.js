import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/view/Login'
import CountDown from '@/view/countDown'
import ChangeColor from '@/view/computedChangeColor'
import DepthSelector from '@/view/depthSelector'
import roleTestPage from '@/view/roleTestPage'
import Layout from '@/view/Layout'
import Wel from '@/view/wel'
import Tree from '@/view/tree'
import DynamicRender from '@/view/dynamicRender'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '',
    component: Layout, // 重定向  // 首页
    redirect: 'Wel',
    children: [{
      path: 'Wel',
      component: Wel,
      name: 'Wel',
      meta: { title: 'Wel', noCache: true } // noCache: 页面不会被缓存，默认false
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
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/dynamicRender',
      name: 'dynamicRender',
      component: DynamicRender
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

