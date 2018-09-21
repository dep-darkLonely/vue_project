/**
 * Description: axios global config file.
 * Date: 2018-9-18
 * Author: huan7
 */
import axios from 'axios'

// global parameter
axios.defaults.baseURL = ''
axios.defaults.timeout = 2500
axios.defaults.responseType = 'JSON'
// create axios instance
var axiosInstance = axios.create()

// request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // send before,do something
  console.log('content:' + config)
  return config
}, function (error) {
  // request error
  return Promise.reject(error)
})

// response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // reponse result do something
  return response
}, function (error) {
  // response error
  return Promise.reject(error)
})

// package axios
axiosInstance.install = function (Vue, option) {
  // add instance method'
  if (axiosInstance.installed) return
  Vue.prototype.$axios = axiosInstance
  // Vue is global variable, auto install
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(axiosInstance)
  }
}
export default axiosInstance
