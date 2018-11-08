<template>
  <scroll-bar>
    <el-menu mode="vertical" :default-active="$route.path" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item :routes="permission_routers" @click="changePage(item.path)"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>
<script>
import SidebarItem from "./sidebarItem";
import ScrollBar from '@/components/ScrollBar'

export default {
  components: {
    SidebarItem,
    ScrollBar
  },
  data() {
    return {
      permission_routers: [
        {
          id: '1',
          name: "验证码倒计时",
          path: "/countDown"
        },
        {
          id: '2',
          name: "计算属性切换颜色",
          path: "/changeColor"
        }
      ]
    };
  },
  methods: {
    changePage(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="less" scoped>
.sidebar-container {
  width: 180px !important;
}
</style>


