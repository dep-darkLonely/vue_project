/**
 * Description: login module
 * Date: 2018-09-09
 * Author: huan7
 */
<template>
  <div class="login-module">
    <Card :bordered="false" title="欢迎登陆">
      <p slot="title" class="login-text">
        <span>欢迎登陆</span>
      </p>
      <div >
        <loginForm></loginForm>
      </div>
      <thirdPartLogin></thirdPartLogin>
    </Card>
  </div>
</template>

<script>
import loginForm from '@/view/login/Login-Form'
import thirdPartLogin from '@/view/login/3th-login'

export default {
  components: {
    loginForm,
    thirdPartLogin
  }
}
</script>
<style>
.login-module {
  width: 350px;
  position: relative;
  left: 45%;
  top: 25%;
  margin-left: -130px;
}
.login-text {
  text-align: center;
}
</style>
