<template>
  <div class="dynamicRendering">
    <el-form ref="form" :model="form" label-width="90px">
      <el-row 
        type="flex" 
        v-for="(item, index) in mockList" 
        :key="index" 
        class="row-bg" 
        justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item>
              <el-checkbox :label="item.label" v-model="checkedList[index].checked"></el-checkbox>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item label="">
              <el-input :disabled="!checkedList[index].checked" v-model="checkedList[index].inputValue"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input disabled v-model="checkedList[index].inputValue"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-button @click="btn">打印</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 后台
      mockList: [
        {label: 'babel1'},
        {label: 'babel2'}
      ],
      form: {
        value: ''
      },
      // 选中的
      checkedList: [
        {checked: '', inputValue: ''},
        {checked: '', inputValue: ''}
      ],
      name: ''
    }
  },
  created() {
    
  },
  methods: {
    btn() {
      console.log(this.checkedList);
    }
  },
  watch: {
    isChecked(val) {
      this.form.isChecked = val;
    },
    checkedList(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
