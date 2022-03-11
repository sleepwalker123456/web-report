import Axios from 'axios'

export function fetch (config) {
  const instance = Axios.create({
    baseURL: 'http://172.16.66.46:18080',
    method: config.method,
    data: config.params,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    }
  })
  instance.interceptors.request.use(
    function (config) {
      return config
    },
    function (error) {
      return error
    }
  )
  instance.interceptors.response.use(function (config) {
    return config.data
  }, function (error) {
    return error
  })
  return instance(config)
}
