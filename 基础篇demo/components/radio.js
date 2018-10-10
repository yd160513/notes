Vue.component('radio-btn', {
  template: `
    <span class="btn_box">
      <input type="radio" name="sex" :id="id" v-model="labelInfo" :value="value"/><label :for="id">{{ value }}</label>
    </span>
  `,
  props: {
    value: {
      type: String
    },
    id: {
      type: Number
    },
    label: {
      type: String
    }
  },
  data() {
    return {
      labelInfo: this.label
    }
  },
  watch: {
    // 监听本组件选项的变化，然后传给父页面
    labelInfo(val) {
      this.$emit('change-input', val);
    }
  }
});