<template>
  <el-aside width="200px">
    <h5>导航</h5>
    <!-- :default-active控制侧边栏菜单的激活状态 -->
    <!-- 这里用$route.path 动态绑定 -->
    <el-menu :default-active="$route.path" exact router>
      <nav-items
        v-for="v in item"
        :key="v.url"
        :path="v.url"
        :item="v"
      ></nav-items>
    </el-menu>
  </el-aside>
</template>

<script>
import NavItems from "./NavItems.vue";

export default {
  components: {
    NavItems,
  },
  data() {
    return {
      // item: [],由于没有接口 所以自己整一个假数据
      item: [
        { name: "首页", url: "/index" },
        { name: "数据统计", url: "/stats" },
        {
          name: "信息管理",
          url: "/wms",
          child: [{ name: "列表展示", url: "wms/list" }],
        },
        {
          name: "用户管理",
          url: "/user",
          child: [
            { name: "用户统计", url: "/user/stats" },
            { name: "角色统计", url: "/user/role" },
          ],
        },
      ],
    };
  },
  methods: {
    // 接口文档
    // 参数：
    //  code: 200成功
    //  msg: 名称 String
    //  result: [{name:"url",child:[],{}}]
    // getNav() {
    //   this.$http.get("/get_nav").then((res) => {
    //     console.log(res);
    //     let { code, result } = res.data;
    //     if (code === "200") {
    //       this.item = result;
    //     }
    //   });
    // },
  },
  // mounted() {
  //   getNav();
  // },
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

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100vh;
}

h5 {
  text-align: center;
  display: inline-block;
  margin: 2rem auto;
}
</style>


