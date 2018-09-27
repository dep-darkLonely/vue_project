/**
 * Description: login request.
 * Date: 2018-09-26
 * Author: huan7
 */
import axios from '@/axios/axios'

// axios login request
export const login = ({loginObject}) => {
  return axios.post('/login', loginObject)
}

// axios user information
