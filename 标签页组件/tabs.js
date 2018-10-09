Vue.component('tabs', {
  name: 'tabs',
  template: `
    <div class="tabs">
      <div class="tabs-bar">
        <!-- 标签页标题，这里要用v-for -->
        <div
          :class="tabCls(item)"
          v-for="(item, index) in navList"
          @click="handleChange(index)">
            {{ item.label }}
            <span :class="closePane()" v-if="item.closable" @click="onClick(item.label)">x</span>
        </div>
      </div>
      <div class="tabs-content">
        <!-- 这里的slot就是嵌套的pane -->
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    // 这里的value是为了父组件可以使用v-model
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      // 用于渲染tabs的标题
      navList: [],
      // 因为不能修改value，所以复制一份自己维护
      currentValue: this.value,
      isDisplay: ''
    }
  },
  methods: {
    // 控制标签名的样式，因为computed不能传参数，所以放到methods中
    tabCls(item) {
      return [
        'tabs-tab',
        {
          // 给当前选中的tab加一个class
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },
    // 隐藏
    onClick(item) {
      var tabs = this.getTabs();
      var _this = this;
      // debugger
      tabs.forEach(function (tab) {
        if (tab.label === item) {
          _this.isDisplay = 'none';
        }
      })
    },
    closePane() {
      // debugger
      // this.$children[index].isDisplay = 'none';
      // console.log(index);
      // console.log(this);
      // console.log(this.$children);
      return [
        {
          'display-none': this.isDisplay
        }
      ]
    },
    // 点击tab标题触发
    handleChange(index) {
      var nav = this.navList[index];
      var name = nav.name;
      // 改变当前选中的tab，并触发下面的额watch
      this.currentValue = name;
      // 更新value
      this.$emit('input', name);
      // 触发一个自定义事件，供父级使用
      this.$emit('on-click', name);
    },
    getTabs() {
      // 通过遍历子组件，得到所有的pane组件
      return this.$children.filter(function (item) {
        return item.$options.name === 'pane';
      })
    },
    // 将name和label取出
    updateNav() {
      this.navList = [];
      var _this = this;
      this.getTabs().forEach(function (pane, index) {
        _this.navList.push({
          label: pane.label,
          name: pane.name || index,
          closable: pane.closable
        });
        // 如果没有给pane设置name，默认设置它的索引
        if (!pane.name) {
          pane.name = index;
        }
        // 设置当前选中的tab的索引
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index;
          }
        }
      });
      this.updateStatus();
    },
    // 将内容取出，把没有选中的隐藏掉
    updateStatus() {
      var tabs = this.getTabs();
      var _this = this;
      tabs.forEach(function (tab) {
        return tab.isShow = tab.name === _this.currentValue;
      })
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue() {
      // 在当前选中的tab发生改变时，更新pane的显示状态
      this.updateStatus();
    },

  }
});