import Vue from "vue";
import App from './App'

// 如果想通知多级父亲 则使用向上派发
Vue.prototype.$dispatch = function(eventName, value) {
  const parent = this.$parent
  while(parent) {
    parent.$emit(eventName, value)
    parent = parent.$parent
  }
}

const vm = new Vue({
  el: '#app',
  render: h => (App)
})