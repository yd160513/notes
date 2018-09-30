Vue.component('pane', {
  name: 'pane',
  template: `
    <div class="pane" v-show="isShow" :style="{display: isDisplay}" :closable="isClosable">
      <slot></slot>
    </div>`,
  props: {
    // 用户可选的设置唯一标识，默认从0开始
    name: {
      type: String
    },
    // 标签页的标题
    label: {
      type: String,
      default: ''
    },
    // 可否关闭
    closable: {
      type: Boolean
    }
  },
  data() {
    return {
      // 用来控制对应标签页的显示和隐藏
      isShow: true,
      isClosable: this.closable
    }
  },
  methods: {
    updateNav() {
      // 更新父组件
      this.$parent.updateNav();
    }
  },
  watch: {
    label() {
      this.updateNav();
    },
    closable() {
      this.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  }
});