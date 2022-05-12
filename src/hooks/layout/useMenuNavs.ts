import {computed} from 'vue'
import {useRouter} from 'vue-router'
import {IMenuItem} from '@/interface'
import {useStore} from 'vuex'
import {HEADER} from '@/config/global'
export function useMenuNavs() {
  const store = useStore()
  const menuData: IMenuItem[] = store.getters['permission/menuData']
  const router = useRouter()
  const navs = computed<IMenuItem[]>(() => {
    return HEADER ? store.getters['permission/navMenuData'] : menuData
  })
  const defaultActivePath = computed<string>(() => {
    return router.currentRoute.value.path.replace('/', '')
  })
  return {
    navs,
    defaultActivePath,
  }
}
