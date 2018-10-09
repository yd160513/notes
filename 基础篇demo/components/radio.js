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
    value(val) {
      debugger
      this.$emit('input', val);
    }
  }
});