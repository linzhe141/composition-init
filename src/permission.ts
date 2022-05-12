import store from '@/store'
import router from '@/router'
import {NavigationGuardNext} from 'vue-router'
type toLoginFunType = (next: NavigationGuardNext) => void
const toLoginHandler: toLoginFunType = (next: NavigationGuardNext) => {
  setTimeout(() => {
    store.dispatch('user/logout')
    store.dispatch('permission/restore')
  })
  next()
  return
}
router.beforeEach(async (to, from, next) => {
  const token = store.getters['user/token']
  if (!token) {
    console.log('no token')
    if (to.path === '/login') {
      console.log('T1: to login')
      toLoginHandler(next)
    } else {
      console.log('T2: to login')
      next('/login')
    }
  } else {
    if (to.path === '/login') {
      console.log('T3: to login')
      toLoginHandler(next)
    }
    const menuData = store.getters['permission/menuData']
    if (menuData && menuData.length > 0) {
      next()
    } else {
      try {
        await store.dispatch('permission/getMenuData')
        await store.dispatch(
          'permission/initMenuRoutes',
          store.getters['permission/menuData']
        )
        next({...to, replace: true})
      } catch (error) {
        console.log(error)
        await store.commit('user/removeToken')
        next('/login')
      }
    }
  }
})
