/**
 * Description: login status managed by vuex.
 * Date: 2018-09-09
 * Author: huan7
 */
import Cookies from 'js-cookie'
import {setToken} from '@/lib/util.js'
import {login} from '@/api/login.js'

const user = {
  // state
  state: {
    uid: '',
    states: '',
    token: Cookies.get('token'),
    username: '',
    name: '',
    introduction: ''
  },
  // mutations
  mutations: {
    SET_UID (state, uid) {
      state.uid = uid
    },
    SET_STATE (state, states) {
      state.states = states
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_USERNAME (state, username) {
      state.username = username
    },
    SET_NAME (state, name) {
      state.name = name
    },
    SET_INTRO (state, introduction) {
      state.introduction = introduction
    }
  },

  // actions
  actions: {
    // login request handle
    LoginByUserName ({commit}, loginObject) {
      // send login request by axios
      console.log('123123')
      return new Promise((resolve, reject) => {
        login(loginObject)
          .then((response) => {
            console.log(response.data)
            commit('SET_TOKEN', response.data.token)
            commit('SET_INTRO', response.data.introduction)
            commit('SET_USERNAME', loginObject.username)
            commit('SET_NAME', response.data.name)
            setToken(response.data.token)
            resolve()
          })
          .cache((error) => {
            reject(error)
          })
      })
    }
  }
}

// export
export default user
