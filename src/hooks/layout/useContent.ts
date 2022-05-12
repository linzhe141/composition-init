import {watchEffect, ref, Ref} from 'vue'
import {useRouter} from 'vue-router'
export function useContent() {
  const router = useRouter()
  let componentName: Ref<String> = ref<String>('')
  watchEffect(() => {
    componentName.value = router.currentRoute.value.name as string
  })
  return {componentName}
}
