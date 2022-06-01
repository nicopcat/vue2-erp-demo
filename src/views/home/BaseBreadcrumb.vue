<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="r.path" v-for="(r, i) in list" :key="i">{{
        r.meta.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      tiltle: "",
    };
  },
  created() {
    console.log(this.$route.matched);
    this.list = this.$route.matched;
  },
  watch: {
    // 用watch监听路径历史
    $route(to, from) {
      console.log(from, to);
      this.list = to.matched;
    },
  },
};
</script>

<style scoped>
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
  z-index: 1;
  display: flex;
  flex-flow: row rap;
  justify-content: space-between;
  align-items: flex-end;
}
.el-header .el-breadcrumb,
.el-button {
  margin-bottom: 1em;
}
</style>