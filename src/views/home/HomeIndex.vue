<template>
  <div id="module">
    <el-container>
      <!-- 左侧 -->
      <aside-nav></aside-nav>
      <el-container>
        <!-- 头部  -->
        <el-header>
          <base-breadcrumb></base-breadcrumb>
          <el-button type="primary" size="small " class="exit" @click="logout"
            >退出</el-button
          >
        </el-header>

        <!-- 主体  -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideNav from "./AsideNav.vue";
import BaseBreadcrumb from "./BaseBreadcrumb.vue";

export default {
  components: {
    AsideNav,
    BaseBreadcrumb,
  },
  methods: {
    logout() {
      sessionStorage.removeItem("username");
      this.$router.push("/login");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100vh;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

h5 {
  text-align: center;
  display: inline-block;
  margin: 2rem auto;
}
</style>