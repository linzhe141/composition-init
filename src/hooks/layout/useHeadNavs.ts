import {onMounted, Ref, ref, watch, watchEffect} from 'vue'
import {useRouter} from 'vue-router'
import {IMenuItem} from '@/interface'
import {useStore} from 'vuex'
import {getNavData} from '@/store/modules/permission'
export function useHeadNavs() {
  const router = useRouter()
  const store = useStore()
  const headerMenuData: IMenuItem[] = store.getters['permission/headerMenuData']

  const menuData: IMenuItem[] = store.getters['permission/menuData']
  let defaultActivePath = ref('')
  const getActiveName = () => {
    defaultActivePath.value =
      (router.currentRoute.value.meta.headActive as string) ||
      (router.currentRoute.value.name as string)
  }
  onMounted(() => {
    getActiveName()
  })
  const handleSelect = (index: string) => {
    store.commit('permission/setNavMenuData', getNavData(menuData, index))
  }
  return {
    headerMenuData,
    defaultActivePath,
    handleSelect,
  }
}
