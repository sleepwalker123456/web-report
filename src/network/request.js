import Axios from 'axios'
import router from '../router'
import store from '../store'

const instance = Axios.create({
  baseURL: 'http://172.16.66.46:18080',
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    // 数据以JSON格式传输
    'Content-Type': 'application/json'
    // 数据以FormData格式传输
    // 'Content-Type': 'multipart/form-data'
  },
  method: 'POST'
})

instance.interceptors.request.use(
  function (config) {
    config.headers = {'auth_token': store.state.adminInfo.token}
    return config
  },
  function (error) {
    return error
  }
)

instance.interceptors.response.use(function (config) {
  if (config.data.statusCode === 407) {
    console.info('token已失效')
    // router.push('/login')
    return config.data
  } else {
    return config.data
  }
}, function (error) {
  return error
})

export function fetch(config) {
  return instance(config)
}
