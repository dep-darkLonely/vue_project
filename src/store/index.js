/**
 * Description: assembly module and export store object.
 * refer to Vuex Official example,https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/
 * Date: 2018-09-25
 * Author: huan7
 */
import Vue from 'Vue'
import Vuex from 'Vuex'
import user from './modules/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  // setting strict model
  strict: process.env.NODE_ENV !== 'production'
})

export default store
