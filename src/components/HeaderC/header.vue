/**
 * Description: header information.
 * Date: 2018-09-29
 * Author: huan7
 */
<template>
  <Header :style="{ background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)' }">
    <!-- header Information -->
    <div class="demo-avatar">

      <Badge  class="notification-s"  @click.native="viewNotication"  :count="2"  type="error"  :offset="[22, 3]">
        <Icon type="ios-notifications-outline" size="26"></Icon>
      </Badge>

      <Dropdown>
        <Badge>
          <Avatar icon="ios-person" :src="personAvatar" size="large" />
        </Badge>
        <DropdownMenu slot="list">
          <DropdownItem @click.native="getUserInfo">
            <Icon type="ios-contact-outline" size="24" color="blue" />
            <span>Person</span>
          </DropdownItem>

          <DropdownItem @click.native="logOut">
            <Icon type="ios-log-out" size="24" color="red" />
            <span>Log Out</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

    <!-- Log Out -->
    <Modal v-model="modal1">
      <p slot="header" style="color: #f60;">
        <Icon type="ios-information-circle"></Icon>
        <span>Vue System Message</span>
      </p>
      <div>
        <p><strong>Do you quit the system?</strong></p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="quit">Quit</Button>
      </div>
    </Modal>

    <!-- person -->
    <Modal v-model="userInfoModal" title="User Information" footer-hide="true">
      <userForm></userForm>
    </Modal>

    <Drawer title="System Message" :closable="false" :scrollable="true" v-model="value1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>

  </Header>
</template>

<script>
import personImage from "@/assets/person.jpg";
import userForm from "@/components/User/UserForm";

export default {
  components: {
    userForm
  },
  data() {
    return {
      value1: false,
      personAvatar: personImage,
      modal1: false,
      userInfoModal: false
    };
  },
  methods: {
    viewNotication: function() { this.value1 = true;},
    logOut: function() { this.modal1 = true;},
    quit: function() {
      this.$store.dispatch("LoginOut").then(() => {
        this.$router.push({
          path: "/login"
        });
      });
    },
    getUserInfo: function() { this.userInfoModal = true;}
  }
};
</script>
<style>
.notification-s {
  margin-right: 15px;
  padding-top: 3px;
}
.demo-avatar {
  float: right;
}
</style>
