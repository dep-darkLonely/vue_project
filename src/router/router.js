/**
 * Global Intercept Router setting
 * Created by Administrator on 2018-09-16.
 */
import routerIndex from './index'
import iview from 'iview/dist/iview'
import {getToken} from '@/lib/util'

// start router setting
// const whiteList = ['/login'];
const loginPageName = 'login'
routerIndex.beforeEach((to, from, next) => {
  // loading iview progress
  iview.LoadingBar.start()
  /**
   * Get login token
   * return false , token does not exist
   */
  const token = getToken()
  if (!token && to.name === loginPageName) {
    // not login and url name == login
    next()
  } else if (!token && to.name !== loginPageName) {
    next({
      name: loginPageName
    })
  } else if (token && to.name === loginPageName) {
    next({
      name: 'home'
    })
  } else {
    next()
  }
})
// end router setting
routerIndex.afterEach((to, from) => {
  iview.LoadingBar.finish()
  window.scrollTo(0, 0)
})
