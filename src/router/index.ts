import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '../views/Login.vue'
import Test from '../test/test.vue'

const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login
  },
  // 测试使用
  {
    path: '/testDemo',
    component: Test
  }
]


//
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: defaultRouterList
})

export default router
