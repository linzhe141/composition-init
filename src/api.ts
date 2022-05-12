import axios from 'axios'

const CODE = {
  LOGIN_TIMEOUT: 1000,
  REQUEST_SUCCESS: true,
  REQUEST_FOBID: 1001,
}

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
})

instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    const {data} = response
    if (data.success === CODE.REQUEST_SUCCESS) {
      return data
    }
  }
  return response
})
export default instance
