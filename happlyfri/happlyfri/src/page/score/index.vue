<template>
  <div>
    <div class="your_scores_container">
      <header class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分！</span></header>
      <div class="result_tip">{{scoreTips}}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "score",
  data() {
    return {
      score: 0, // 分数
      scoreTips: '', // 分数提示
      rightAnswer: [2, 7, 12, 13, 18], //正确答案
      scoreTipsArr:[
        '你说，是不是把知识都还给小学老师了？',
        '还不错，但还需要继续加油哦！',
        '不要嘚瑟还有进步的空间！',
        '智商离爆表只差一步了！',
        '你也太聪明啦！'
      ],
    }
  },
  computed: mapState(['answerid']),
  created() {
    this.computedScore();
    this.getScoreTip();
  },
  methods: {
    computedScore() {
      this.answerid.forEach((item, index) => {
        if(item === this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    getScoreTip() {
      let index = Math.ceil(this.score/20) - 1;
      this.scoreTips = this.scoreTipsArr[index]
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
