import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/home'
import Login from '@/view/login/Login'
import Table from '@/components/Table'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
})
