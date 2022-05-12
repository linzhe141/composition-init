import {useRouter} from 'vue-router'

export function useHeader() {
  const router = useRouter()
  const logoutHandle = () => {
    router.push('/login')
  }
  return {
    logoutHandle,
  }
}
