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
import KeepAliveA from '@/view/keepAlive/a'
import KeepAliveB from '@/view/keepAlive/b'
import KeepAliveC from '@/view/keepAlive/c'
import RadioCheckbox from '@/view/radioCheckbox'
import Validate from '@/view/validate'
import SortTable from '@/view/sortTable'
import LoopForm from '@/view/loopForm'
import TablePageMemory from '@/view/tablePageMemory'
import DialogtablePageMemory from '@/view/dialogtablePageMemory'
import ShoppingCart from '@/view/shoppingCart'


/**
 * 
 * $router 和 $route 的区别：
 * $router: 指的是整个路由实例，可以操控整个路由，通过 '$router.push' 往其中添加任意路由对象
 * 
 */


Vue.use(Router)

export const constantRouterMap = [{
    path: '/login',
    name: 'login',
    component: Login // 可以使通过 Vue.extend() 创建的组件构造器或只是一个组件配置对象
  },
  {
    path: '',
    component: Layout, // 重定向  // 首页
    redirect: 'Wel',
    children: [{
        path: 'Wel',
        component: Wel,
        name: 'Wel',
        meta: {
          title: 'Wel',
          noCache: true
        } // noCache: 页面不会被缓存，默认false
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
      },
      {
        path: '/keepAliveA',
        name: 'keepAliveA',
        component: KeepAliveA,
        meta: {
          keepAlive: true,
        }
      },
      {
        path: '/keepAliveB',
        name: 'KeepAliveB',
        component: KeepAliveB,
        meta: {
          keepAlive: false,
        }
      },
      {
        path: '/keepAliveC',
        name: 'KeepAliveC',
        component: KeepAliveC
      },
      {
        path: '/radioCheckbox',
        name: 'RadioCheckbox',
        component: RadioCheckbox
      },
      {
        path: '/validate',
        name: 'Validate',
        component: Validate
      },
      {
        path: '/sortTable',
        name: 'SortTable',
        component: SortTable
      },
      {
        path: '/loopForm',
        name: 'LoopForm',
        component: LoopForm
      },
      {
        path: '/tablePageMemory',
        name: 'TablePageMemory',
        component: TablePageMemory
      },
      {
        path: '/dialogtablePageMemory',
        name: 'DialogtablePageMemory',
        component: DialogtablePageMemory
      },
      {
        path: '/shoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart
      }
    ]
  }
];

export const asyncRouterMap = [{
  path: '/super_editor',
  component: Layout,
  children: [{
    path: 'index',
    component: roleTestPage,
    name: '权限测试页',
    meta: {
      role: ['admin', 'super_editor']
    } // noCache: 页面不会被缓存，默认false
  }]
}];

export default new Router({
  routes: constantRouterMap // 可以传入其他参数
})
