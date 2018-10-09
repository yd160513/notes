var vm = new Vue({
  el: '#app',
  data: {
    // 性别
    sexShow: true,
    // 爱好
    hobbyShow: false,
    // 介绍
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
    }
  }
});