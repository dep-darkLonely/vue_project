/**
 * Description: login form
 * Date: 2018-09-09
 * Author: huan7
 */
<template>
  <Form ref="loginForm" :model="loginObject" :rules="loginRule">
    <FormItem prop="userName">
      <Input type="text" v-model="loginObject.userName" placeholder="username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="passWord" class="passWord">
      <Input type="password" v-model="loginObject.passWord" placeholder="password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem class="remember-me">
      <Checkbox v-model="loginObject.rememberMe">Remember me </Checkbox>
    </FormItem>
    <FormItem class="login-btn">
      <Button type="primary" @click="submit('loginForm')" long> Sign In
      </Button>
    </FormItem>
  </Form>
</template>
<script>
export default{
  data () {
    return {
      loginObject: {
        userName: '',
        passWord: '',
        rememberMe: false
      },
      loginRule: {
        userName: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // handle login request
          this.$store.dispatch('LoginByUserName', this.loginObject)
            // use arrow function to ensure the same this object
            .then((response) => {
              this.$Message.success('Login Success!')
              // home page
              this.$router.push({
                name: 'table'
              })
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          this.$Message.error('Login Fail!')
        }
      })
    }
  }
}
</script>
<style>
.remember-me {
  margin-bottom: 0px;
}
.login-btn,.passWord {
  margin-bottom: 15px;
}
</style>
