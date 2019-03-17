/**
 * Description: dialog information.
 * Date: 2019-03-17
 * Author: huan7
 */
<template>
  <Modal
    v-model="this.dialogStatus"
    title="Vue 系统提示"
    @on-ok="ok"
    @on-cancle="cancle"
  >
    <p> 退出当前系统？</p>
  </Modal>
</template>

<script>
export default {
  // 接收父组件传递的状态参数
  props: {
    dialogStatus: {
      default: false
    }
  },
  methods: {
    ok() {
      // clear cookie and Jump to login
      this.$store.dispatch("LoginOut").then((response) => {
        console.log('success')
        this.$router.push({
          path: "/login"
        });
      });
    },
    cancle() {
      dialogStatus = false;
      console.log("Dont't do anything.");
    }
  }
};
</script>
<style>
</style>
