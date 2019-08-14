<template>
  <div>
    儿子1: {{value1}}

    <button @click="change">点击修改</button>  
    <Grandson1 :value="value1"></Grandson1>
  </div>
</template>

<script>
import Grandson1 from './Grandson1'
export default {
  name: 'Son1',
  components: {
    Grandson1
  },

  // 单项数据流
  props: {
    value1: {
      type: Number,
      default: 1
    }
  },
  methods: {
    change() {
      // this.$emit('input', 200)
      this.$emit('update:aaa', 200)
      // this.$emit('input', 300)
    }
  }
}
</script>
