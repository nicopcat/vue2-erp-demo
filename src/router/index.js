import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

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
    redirect: '/index', // 首次进入页面不为空
    meta: {
      title: '首页'
    },
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/index',  // 首页
        name: 'index',
        // 添加路由元信息 meta
        component: () => import('../views/home/landing/LandingIndex.vue')
      },
      {
        path: '/stats', // 数据统计
        name: 'stats',
        meta: { title: '数据统计' },
        component: () => import('../views/home/stats/StatsIndex.vue')
      },
      {
        path: '/wms', // 信息管理
        name: 'wms',
        meta: { title: '信息管理' },
        component: () => import('../views/home/wms/WmsIndex.vue'),
        children: [
          {
            path: '/wms/list',  // 列表展示
            name: 'wmsList',
            meta: { title: '列表展示' },
            component: () => import('../views/home/wms/WmsList.vue')
          }
        ]
      },
      {
        path: '/user', // 用户管理
        name: 'user',
        meta: {
          title: '用户管理'
        },
        component: () => import('../views/home/user/UserIndex.vue'),
        children: [
          {
            path: 'stats',  // 用户统计
            name: 'userStats',
            meta: { title: '用户统计' },
            component: () => import('../views/home/user/UserStats.vue')
          },
          {
            path: 'role',  // 角色统计
            name: 'userRole',
            meta: { title: '角色统计' },
            component: () => import('../views/home/user/UserRole.vue')
          },
        ]
      },
    ]
  },

  {
    // 会匹配所有路径
    path: '*', redirect: '/index'
  }
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, _, next) => {

  // 判断sessionStorage里是否有username
  if (!sessionStorage.getItem('status')) {
    if (to.path !== '/login')
      next('/login');
  }
  next();
})

export default router
