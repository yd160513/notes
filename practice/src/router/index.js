
/**
 * 
 * 编写路由步骤：
 *  1. 在 main.js 中引入 router.js 挂载到 Vue 实例中
 *  2. 配置路由实例：在 route.js 中引入 Vue、vue-router、配置路由实例
 *  3. 组件内配置：就是配置 router-link 、router-view
 * 
 */

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
 * $route: 指当前路由实例（'router'）跳转到的路由对象
 * 路由实例可以包含多个路由对象，它们是父子关系
 * reoutes: 指 router 路由实例的 routes API. 用来配置多个 route 路由对象
 */


Vue.use(Router) // 加载全局组件 Router

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
    // component: roleTestPage, // import 的组件，这是正常加载
    component: resolve => require(['@/components/super_editor'], resolve), // 使用懒加载可以减少首页加载时间，此时不需要 import
    name: '权限测试页', // 路由命名，name 要唯一
    meta: {
      role: ['admin', 'super_editor']
    } // noCache: 页面不会被缓存，默认false
  }]
}];

export default new Router({
  // mode: 'history', // 路由模式： 默认为 hash，如果改为 history，需要后端配合
  // base: '/', // 基路径：默认值为 '/'， 如果整个单页应用在 /app/ 下，base 就应该设为 '/app', 一般可以写成 __dirname, 在 webpack 中配置
  routes: constantRouterMap // 可以传入其他参数
})
