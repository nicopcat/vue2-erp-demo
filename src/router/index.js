import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


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
    component: () => import('../views/home/HomeIndex.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
