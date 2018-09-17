// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// add iView UI components
import iView from 'iview/dist/iview'
import 'iview/dist/styles/iview.css'
import './router/router.js'

Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
