<template>
  <section>
    <!-- 头部 -->
    <header class="top_tips">
      <!-- 如果是首页显示第几周，如果是题目就显示第几题，由父页面来控制 -->
      <span class="num_tip" v-if="fatherComponent === 'home'">首页</span>
      <span class="num_tip" v-if="fatherComponent === 'item'">题目</span>
    </header>
    <div v-if="fatherComponent === 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style" ></router-link>
    </div>
    <div v-if="fatherComponent === 'item'">
      <!-- 具体题目 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">
          
        </div>
      </div>
      <!-- 下一题按钮，如果是最后一题显示分数按钮 -->
      <span class="next_item button_style">下一题</span>
      <span class="submit_item button_style"></span>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: "itemContainer",
  props: {
    fatherComponent: {
      type: String,
      default: "home"
    }
  },
  computed: mapState([
    'itemDetail' // 题目详情
  ])
};
</script>
<style lang="scss" scoped>
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../../images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
.home_logo {
  background-image: url(../../images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.item_back {
  background-image: url(../../images/2-1.png);
  background-size: 100% 100%;
}
.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.start {
  background-image: url(../../images/1-4.png);
}
.next_item {
  background-image: url(../../images/2-2.png);
}
.submit_item {
  background-image: url(../../images/3-1.png);
}
.item_list_container {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}
.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
