Vue.component('input-number', {
  template: `
        <div class="input-number">
            <input type="text" :value="currentValue" />
            <button @click="handleUp" :disiabled="currentValue >= max">+</button>
            <button @click="handleDown" :disiabled="currentValue <= min">-</button>
        </div>
    `,
  props: {
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity // 无限大
    },
    min: {
      type: Number,
      default: -Infinity // 无限小
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentValue: this.value, // 初始化时引用父组件的value
      stepVal: this.step
    }
  },
  methods: {
    // 加
    handleUp() {
      if(this.currentValue >= this.max) {
        return
      }
      this.currentValue+=this.stepVal;
    },
    // 减
    handleDown() {
      if(this.currentValue <= this.min) {
        return
      }
      this.currentValue-=this.stepVal;
    },

    updateValue(val) {
      if (val > this.max) {
        val = this.max;
      }
      if (val < this.min) {
        val = this.min;
      }
      this.currentValue = val;
    }
  },
  watch: {
    // watch监听的回调函数中有两个参数，第一个是新的值，一个是旧的值
    currentValue(val) { // 当currentValue变化时更新value
      this.$emit('input', val);
    },
    value(val) { // 当value变化时更新currentValue
      this.updateValue(val)
    }
  }
  // computed: {
  //   num() {
  //     return this.updateValue(this.value);
  //   }
  // },
  
});