/**
 * Description: login module
 * Date: 2018-09-09
 * Author: huan7
 */
<template>
  <div class="login">
    <div class="login-module">
      <Card :bordered="false" title="欢迎登陆">
        <p slot="title" class="login-text">
          <span>欢迎登陆</span>
        </p>
        <div>
          <loginForm></loginForm>
        </div>
        <thirdPartLogin></thirdPartLogin>
      </Card>
    </div>
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
.login {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/login/login4.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.login-module {
  width: 350px;
  position: relative;
  left: 46%;
  top: 25%;
  margin-left: -170px;
}
.login-text {
  text-align: center;
}
</style>
