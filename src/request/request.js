import Axios from 'axios'

export function fetch (config) {
  const instance = Axios.create({
    baseURL: 'http://localhost:18080',
    method: config.method,
    data: config.params
  })
  return instance(config)
}
