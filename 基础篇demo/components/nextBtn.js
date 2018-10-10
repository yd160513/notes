Vue.component('next-btn', {
  template: `
    <span>
      <button @click="nextBtn">下一步</button>
    </span>
  `,
  props: {
    isChecked: {
      type: String
    }
  },
  methods: {
    nextBtn() {
      if (this.isChecked != '保密') {
        this.$emit('change-sex-show', false);
        return;
      }
      alert('请更改性别选项！');
    }
  }
});