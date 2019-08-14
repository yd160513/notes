<template>
  <div>
    孙子：{{value}}
    <button @click="changeParent">修改父亲</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changeParent() {
      // this.$parent.$emit('input', '来自孙子的修改')
      // 只能通知向上一级，如果想通知当前组件的所有父亲则在 main.js 中定义向上派发
      this.$dispatch('input', '来自 $dispatch 的修改');
    
    }
  }
}
</script>
