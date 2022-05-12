// 自定义hooks
import {ref, Ref} from "vue"
 
interface Result {
  current: Ref<number>,
  add: (delta: number) => void,
  dec: (delta: number) => void,
  set: (value: number) => void,
  reset: () => void
}

export function useCount(initVal: number): Result {
  const current = ref(initVal);
  const add = (delta: number) => {
    current.value += delta;
  }
  const dec = (delta: number) => {
    current.value -= delta
  }
  const set = (value: number) => {
    current.value = value
  }
  const reset = () => {
    current.value = initVal
  }
  return { current, add, dec, set, reset }
}