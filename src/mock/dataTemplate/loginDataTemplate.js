/**
 * Description: Mock data template.
 * Date: 2018-9-21
 * Author: huan7
 */
import Mock from 'mockjs'

// define variable
var backResult = ''

const userDataTemplate = Mock.mock({
  administrator: {
    'userName': 'administrator',
    'token': /super-token[a-z][A-Z][0-9]{15}/,
    'userId': '1',
    'role': 'super-admin'
  },
  admin: {
    'userName': 'admin',
    'token': /admin-token[a-z][A-Z][0-9]{15}/,
    'userId': '2',
    'role': 'admin'
  },
  user: {
    'userName': 'user',
    'token': /user-token[a-z][A-Z][0-9]{15}/,
    'userId': '3',
    'role': 'user'
  }
})

export const loginDataTemplate = function (option) {
  // get username
  const {userName} = JSON.parse(option.body)
  if (userDataTemplate[userName.split('@')[0]] !== undefined) {
    backResult = userDataTemplate[userName.split('@')[0]].token
  }
  return {token: backResult}
}
