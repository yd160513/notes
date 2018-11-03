import Vue from 'vue'
import Router from 'vue-router'
import CountDown from '@/view/countDown'
import ChangeColor from '@/view/computedChangeColor'
import Layout from '@/view/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
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
    }
  ]
})
