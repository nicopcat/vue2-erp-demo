<template>
  <el-carousel :interval="4000" type="card" height="350px">
    <el-carousel-item v-for="(item, i) in items" :key="i">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <img :src="item" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // 图片导入需要用require
        require("@/assets/img/p-1.jpg"),
        require("@/assets/img/p-2.png"),
        require("@/assets/img/p-3.jpg"),
        require("@/assets/img/p-4.jpg"),
        require("@/assets/img/p-5.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  max-height: 350px;
}
</style>