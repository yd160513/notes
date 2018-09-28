Vue.component('input-number', {
  template: `
        <div class="input-number">
            <input type="text" :value="num" />
        </div>
    `,
  props: {
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
      currentValue: this.value // 初始化时引用父组件的value
    }
  },
  methods: {
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
  computed: {
    num() {
      return this.updateValue(this.value);
    }
  },
  watch: {
    // watch监听的回调函数中有两个参数，第一个是新的值，
    currentValue(val) {
      this.$emit('input', val);
    }
  }
});