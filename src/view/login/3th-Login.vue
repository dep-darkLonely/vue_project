/**
 * Description: Third party software authorized login.
 * Date: 2018-09-09
 * Author: huan7
 */
<template>
  <div>
    <Row class="other-login">
      <span>其他登录方式：</span>
      <img :src="qq_logo">
      <img :src="wechat_logo">
      <img :src="weibo_logo">
    </Row>
  </div>
</template>
<script>
import avatarQq from '@/assets/QQ/Connect_logo_1.png'
import avatarWechat from '@/assets/wechat/16x16.png'
import avatarWeibo from '@/assets/weibo/16x16.png'
export default{
  data () {
    return {
      qq_logo: avatarQq,
      wechat_logo: avatarWechat,
      weibo_logo: avatarWeibo
    }
  }
}
</script>
<style>
img {
  vertical-align: middle;
}
</style>
