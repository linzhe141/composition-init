import {reactive} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {ILoginForm} from '@/interface'
import { ElMessage } from 'element-plus'

export function useLogin(){
  const userInfo: ILoginForm = reactive({
    user: 'linzhe',
    password: 'linzhe141',
  })
  const router = useRouter()
  const store = useStore()
  const loginHandle = async () => {
    try {
     await store.dispatch('user/login', {userInfo, router})
    } catch (e) {
      ElMessage({
        type: 'error',
        message: e as string
      })
    }
  }
  return {
    loginHandle
  }
}