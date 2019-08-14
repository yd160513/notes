<template>
  <div>
    父亲: {{mny}}

    <Son1 :value="mny" @input="change"></Son1>
    <!-- <Son1 :value1="mny" @update:aaa="(value) => this.mny = value"></Son1> -->
    <!-- 
      上边这种写法模板解析：
        解析出一个对象来，{input: change},把这个对象传递到子组件中，
        子组件会循环这个对象，把这个对象挂载到子组件中 this.$on('input', change)
        子组件可以取触发 input ，所对应的事件就是 父组件中的 chagnge
     -->
    <!-- <Son1 :value.sync="mny"></Son1> -->

    <!-- <Son1 :value="mny" @input="(mny) => this.mny = mny"></Son1>
    <Son1 v-model="mny"></Son1> -->

    <!-- .sync 和 v-model 的唯一区别：
      .sync 可以自定义
      v-model 只能叫 value
     -->

     <!-- 多层级传递数据 -->
  </div>
</template>
<script>
import Son1 from './Son1'
export default {
  components: {
    Son1
  },
  data() {
    return {
      mny: 100
    }
  },
  methods: {
    change(val) {
      this.mny = val;
    }
  }
}
</script>
