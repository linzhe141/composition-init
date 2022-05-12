import {computed, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import {HEADER} from '@/config/global'
import {getNavData} from '@/store/modules/permission'

import {useHeadNavs} from './useHeadNavs'
export function useLayout() {
  const {defaultActivePath: headActivePath} = useHeadNavs()
  const store = useStore()
  const showSide = computed<boolean>(() => {
    if (HEADER) {
      return store.getters['permission/navMenuData'].length ? true : false
    } else {
      return true
    }
  })
  onMounted(() => {
    store.commit(
      'permission/setNavMenuData',
      getNavData(store.getters['permission/menuData'], headActivePath.value)
    )
  })
  return {
    showSide,
  }
}
