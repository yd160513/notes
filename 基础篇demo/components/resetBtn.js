Vue.component('reset-btn', {
  template: `
    <span>
      <button @click="resetBtn">重置</button>
    </span>
  `,
  props: {
    resetVal: [String, Array]
  },
  data() {
    return {
      tempResetVal: this.resetVal
    }
  },
  methods: {
    resetBtn() {
      this.$emit('change-reset-val', this.tempResetVal);
    }
  }
});