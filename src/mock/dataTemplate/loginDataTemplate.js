/**
 * Description: Mock data template.
 * Date: 2018-9-21
 * Author: huan7
 */
import Mock from 'mockjs'

// define variable
// var backResult = ''

const userDataTemplate = Mock.mock({
  administrator: {
    'userName': 'administrator',
    'name': 'super-admin',
    'token': /super-token[a-z][A-Z][0-9]{15}/,
    'userId': '1',
    'introduction': 'Hello Everyone,I am super-admin !',
    'role': 'super-admin'
  },
  admin: {
    'userName': 'admin',
    'name': 'admin',
    'token': /admin-token[a-z][A-Z][0-9]{15}/,
    'userId': '2',
    'introduction': 'Hello Everyone,I am admin !',
    'role': 'admin'
  },
  user: {
    'userName': 'user',
    'name': 'user',
    'token': /user-token[a-z][A-Z][0-9]{15}/,
    'userId': '3',
    'introduction': 'Hello Everyone,I am user !',
    'role': 'user'
  }
})

export const loginDataTemplate = function (option) {
  // get username
  const {userName} = JSON.parse(option.body)
  /*
    if (userDataTemplate[userName.split('@')[0]] !== undefined) {
      backResult = userDataTemplate[userName.split('@')[0]]
    }
  */
  return userDataTemplate[userName.split('@')[0]]
}
