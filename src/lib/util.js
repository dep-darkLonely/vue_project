/**
 * Common Information
 * Created by Administrator on 2018-09-16.
 */
import Cookies from 'js-cookie'
// setting cookies config
import configs from '@/configs/config'

export const TOKEN_KEY = 'token'

// set token
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {expires: configs.Cookie_Repires_Time})
}

// get token
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) {
    return token
  } else {
    return false
  }
}
