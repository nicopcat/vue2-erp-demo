# 项目介绍
试写一个基于Vue 2 + Element UI 的后台管理系统
（中途看到被删 [这篇](https://godbasin.github.io/front-end-playground/vue/vue-for-everyone/vue-for-everyone-3.html#%E9%A1%B5%E9%9D%A2%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1)，比这该死的免费课讲得清楚得多……）
demo: http://vue-for-everyone.godbasin.com/3/index.html
# 页面划分
设计好几页才能继续设计路由， 除了登录页，基本结构划分为左右+右侧的上下结构：
```
/home                   
+------------------+       
| s |    Header    |       
| i |              | 
| d |     Main     | 
| e |              |
|   |              |  
|   |              |    
|   |--------------|    
+------------------+ 
```
## 左侧菜单
大概包含 首页，信息管理，用户管理，

数据组织如下：
```
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
```

## 页面结构设计
|序号|	页面形式	|页面能力|
|---|---|---|
|1	|登录页|	只有用户名和密码的输入|
|2	|待定|	待定|
|3	|待定|	待定|
|4	|待定|	待定|

## 路由设计
明天再整 ┑(￣Д ￣)┍

# 一些笔记
## vue-cli相关

1. vue-cli 的配置项文件: 根目录下自行创建 vue.config.js 文件  
2. assets: 放静态资源，比如图标、字体等  

## 路由

1. this.$router → 表示vue实例对象； this.route → 表示路由的一系列信息  
2. 如何让面包屑通过路由动态变更内容呢？

## 组件
### 侧边导航栏，多级展示的写法
利用子组件递归循环遍历，动态加载


```jsx
// AsideNav.vue
// HTML template
<template>
  <el-aside width="200px">
    <h5>导航</h5>
    <el-menu default-active="2">
      <nav-items
        v-for="v in item"
        :key="v.url"
        :path="v.url"
        :item="v"
      ></nav-items>
    </el-menu>
  </el-aside>
</template>

// 后端传来的有子集的数据 
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
```

```jsx
// NavItems.vue

<template>
  <div>
    <!-- 无子集 -->
		<!-- 如果没有子集，就按这个模板渲染 -->
    <el-menu-item :index="item.url" v-if="!item.child">
      <i class="el-icon-menu"></i>
      <span slot="title"> {{ item.name }}</span>
    </el-menu-item>
		
		<!--如果有子集，就按这个模板渲染-->
    <el-submenu :index="item.url" v-else>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.name }}</span>
      </template>

			// 这里递归渲染子模版
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
	// 必须指定子组件的name属性
  name: "NavItems",
  props: ["path", "item"],
  data() {
    return {};
  },
};
</script>
```
## 其他
1. 第三方插件：学习别人的封装思想
2. axios二次封装

如果小项目不需要封装，直接使用:

```jsx
// 把axios赋值给Vue原型对象的http
Vue.prototype.$http = axios;
// 写默认接口地址
axios.default.baseURL = 'http://127.0.0.1:3333/'
```

如果项目较大，需要将axios二次封装，单独建立文件，配置请求拦截器，响应拦截器

3. './xxx'  '../xxx'  '@xxx' 或直接引入
    
    
    | 地址写法 | 查找位置 |
    | --- | --- |
    | ./ | 同级 |
    | ../ | 上级 |
    | @ | 根目录 |
    | 不写 | 直接从node_modules 引入 |

4. Eslint 组件名称报错
组件命名使用一个单词命名会报错：
```
eslint Component name “index” should always be multi-word
```
从@8版本起，新增的第一条规则就是`vue/multi-word-component-names
Require component names to be always multi-word`，主要是为了防止组件名与 HTML 标签冲突。
解决方法:
1. 除了 App.vue 之外的组件以两个以上的词命名，如`BaseCard.vue`
2. 禁用该 rule: 在.eslintrc.js 文件中的 `rule` 中加上规则:
```
'vue/multi-word-component-names': 0,
```