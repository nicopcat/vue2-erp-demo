<template>
  <div>
    <!-- 无子集 -->
    <el-menu-item :index="item.url" v-if="!item.child">
      <i class="el-icon-menu"></i>
      <span slot="title"> {{ item.name }}</span>
    </el-menu-item>

    <!-- 有子集 -->
    <el-submenu :index="item.url" v-else>
      <template slot="title">
        <i class="el-icon-folder-opened"></i>
        <span>{{ item.name }}</span>
      </template>
      <!-- 递归循环子组件本身  -->
      <nav-items
        v-for="c in item.child"
        :key="c.url"
        :path="c.url"
        :item="c"
      ></nav-items>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "NavItems",
  props: ["path", "item"],
  data() {
    return {};
  },
  methods: {},
};
</script>

