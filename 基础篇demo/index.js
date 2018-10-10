var vm = new Vue({
  el: '#app',
  data: {
    // 性别页面
    sexShow: true,
    // 爱好页面
    hobbyShow: false,
    // 介绍页面
    introduceShow: false,
    // 单选默认选中项
    isChecked: '保密',
    sexArr: [
      {
        sex: '男',
        id: 0
      },
      {
        sex: '女',
        id: 1
      },
      {
        sex: '保密',
        id: 2
      }
    ]
  },
  methods: {
    onSexShow(val) {
      this.sexShow = val;
      this.hobbyShow = true;
    },
    // 接收到子组件传过来的值并更改选中的值
    changeInputValue(val) {
      this.isChecked = val;
    }
  }
});