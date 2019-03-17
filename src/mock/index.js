/**
 * Description: interceptor ajax request by mock and generate random data.
 * Date: 2018-9-21
 * Author: huan7
 */
import Mock from 'mockjs'
import {
  loginDataTemplate
} from './dataTemplate/loginDataTemplate.js'

// mock(url, type, dataTemplate)
/*
Mock.mock('/login', 'post', function (option) {
  return {token: 'userAdmin'}
})
*/
Mock.mock('/login', 'post', loginDataTemplate)

export default Mock
