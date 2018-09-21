// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// add iView UI components
import iView from 'iview/dist/iview'
import 'iview/dist/styles/iview.css'
import './router/router.js'
// global register axios
import axios from './axios/axios.js'
// global register mock
import './mock/index.js'

Vue.use(iView)
Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
