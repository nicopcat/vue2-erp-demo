import Vue from 'vue'
import VueRouter from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/home',  // 重定向
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/index',  // 首页
        name: 'index',
        component: () => import('../views/home/landing/LandingIndex.vue')
      },
      {
        path: '/stats', // 数据统计
        name: 'stats',
        component: () => import('../views/home/stats/StatsIndex.vue')
      },
      {
        path: '/wms', // 信息管理
        name: 'wms',
        component: () => import('../views/home/wms/WmsIndex.vue'),
        children: [
          {
            path: '/wms/list',  // 列表展示
            name: 'WmsList',
            component: () => import('../views/home/wms/WmsList.vue')
          },
        ]
      },
      {
        path: '/user', // 用户管理
        name: 'user',
        component: () => import('../views/home/user/UserIndex.vue'),
        children: [
          {
            path: '/user/stats',  // 用户统计
            name: 'userStats',
            component: () => import('../views/home/user/UserStats.vue')
          },
          {
            path: '/user/role',  // 角色统计
            name: 'userRole',
            component: () => import('../views/home/user/UserRole.vue')
          },
        ]
      },
    ]
  },



]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter);
export default router
