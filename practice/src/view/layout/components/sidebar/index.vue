<template>
  <div>
    <ul>
      <li 
        v-for="(item, index) in list"
        :key="index"
        @click="changePage(item.path)">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  data() {
    return {
      list: [
        {
          id: 1,
          name: '验证码倒计时',
          path: '/countDown'
        },
        {
          id: 1,
          name: '计算属性切换颜色',
          path: '/changeColor'
        }
      ]
    }
  },
  methods: {
    changePage(path) {
      this.$router.push({
        path
      });
    }
  }
}
</script>

