// 导入axios对象
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 请求基址
  timeout: 5000 // 请求超时的事件
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service // 导出axios实例
